import sharp from 'sharp';
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile, stat } from 'node:fs/promises';
import { resolve, relative, sep } from 'node:path';

const input = process.argv[2];
if (!input) throw new Error('Usage: node scripts/prepare-gallery.mjs /path/to/extracted-package');
const root = resolve(input);
const source = JSON.parse(await readFile(resolve(root, 'gallery.json'), 'utf8'));
if (source.total !== 38 || source.entries.length !== 38) throw new Error('Expected the complete 38-photograph collection.');
const output = resolve('public/images/archive');
await mkdir(output, { recursive: true });
const gallery = [];
let originalBytes = 0;
let webBytes = 0;

for (const [index, entry] of source.entries.entries()) {
  if (entry.id !== index + 1 || !entry.caption?.trim()) throw new Error(`Invalid numbered caption at ${index + 1}.`);
  const path = resolve(root, entry.src);
  if (!path.startsWith(root + sep)) throw new Error('Image path is outside the supplied package.');
  const bytes = await readFile(path);
  const digest = createHash('sha256').update(bytes).digest('hex');
  if (digest !== entry.sha256) throw new Error(`Original checksum mismatch for photograph ${entry.id}.`);
  const metadata = await sharp(bytes).metadata();
  if (metadata.width !== entry.width || metadata.height !== entry.height) throw new Error(`Original dimensions mismatch for photograph ${entry.id}.`);
  const width = metadata.autoOrient?.width ?? metadata.width;
  const height = metadata.autoOrient?.height ?? metadata.height;
  const prefix = `${String(entry.id).padStart(2, '0')}-${digest.slice(0, 10)}`;
  const widths = [...new Set([Math.min(640, width), Math.min(1200, width), Math.min(1800, width)])];
  const sources = [];
  for (const requestedWidth of widths) {
    const filename = `${prefix}-${requestedWidth}.webp`;
    const info = await sharp(bytes).rotate().resize({ width: requestedWidth, withoutEnlargement: true }).webp({ quality: 86, effort: 5 }).toFile(resolve(output, filename));
    sources.push({ src: `/images/archive/${filename}`, width: info.width });
    webBytes += info.size;
  }
  const thumbnail = `${prefix}-thumb.webp`;
  await sharp(bytes).rotate().resize({ width: 240, height: 168, fit: 'contain', background: '#071d19' }).webp({ quality: 82, effort: 5 }).toFile(resolve(output, thumbnail));
  webBytes += (await stat(resolve(output, thumbnail))).size;
  originalBytes += bytes.length;
  gallery.push({ id: entry.id, caption: entry.caption, width, height, originalSha256: digest, src: sources.at(-1).src, sources, thumbnail: `/images/archive/${thumbnail}` });
}

await writeFile('lib/gallery.json', JSON.stringify(gallery, null, 2) + '\n');
await mkdir('outputs/gallery', { recursive: true });
const report = { photographs: gallery.length, originalBytes, webBytes, quality: 86, maxWidth: 1800, originalsChanged: false, output: relative(process.cwd(), output), photographsVerified: gallery.map(photo => ({ id: photo.id, originalSha256: photo.originalSha256, sources: photo.sources, thumbnail: photo.thumbnail })) };
await writeFile('outputs/gallery/preparation.json', JSON.stringify(report, null, 2) + '\n');
console.log(`Prepared ${gallery.length} verified photographs: ${(originalBytes / 1e6).toFixed(2)} MB originals; ${(webBytes / 1e6).toFixed(2)} MB across all responsive renditions and thumbnails.`);
