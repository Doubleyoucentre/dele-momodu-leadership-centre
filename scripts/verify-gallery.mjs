import { readFile, stat } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { createHash } from 'node:crypto';
import sharp from 'sharp';

const photographs = JSON.parse(await readFile('lib/gallery.json', 'utf8'));
const html = await readFile('out/index.html', 'utf8');
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/dele-momodu-leadership-centre';
const sourceRoot = process.env.DMLC_GALLERY_PACKAGE;
const source = sourceRoot ? JSON.parse(await readFile(resolve(sourceRoot, 'gallery.json'), 'utf8')).entries : null;
const decode = value => value.replace(/&#(x[\da-f]+|\d+);/gi, (_, number) => String.fromCodePoint(number[0].toLowerCase() === 'x' ? parseInt(number.slice(1), 16) : Number(number))).replaceAll('&quot;', '"').replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');

if (photographs.length !== 38 || source && source.length !== 38) throw new Error('The gallery must contain all 38 photographs.');
if ((html.match(/<figcaption\b[^>]*class="gallery-caption"/g) ?? []).length !== 38) throw new Error('The export does not contain exactly 38 captioned figures.');
let assets = 0;
for (const [index, photo] of photographs.entries()) {
  if (photo.id !== index + 1 || !photo.caption?.trim()) throw new Error(`Missing ordered caption ${index + 1}.`);
  if (source) {
    const original = source[index];
    if (photo.id !== original.id || photo.caption !== original.caption || photo.originalSha256 !== original.sha256) throw new Error(`Supplied caption/image mapping changed at ${photo.id}.`);
    const bytes = await readFile(resolve(sourceRoot, original.src));
    if (createHash('sha256').update(bytes).digest('hex') !== original.sha256) throw new Error(`Original image changed at ${photo.id}.`);
  }
  const figure = html.match(new RegExp(`<figure\\b[^>]*aria-labelledby="gallery-caption-${photo.id}"[^>]*>([\\s\\S]*?)</figure>`))?.[1];
  const caption = figure?.match(/<figcaption\b[^>]*>[\s\S]*?<p>([\s\S]*?)<\/p>/)?.[1];
  if (!figure || decode(caption ?? '') !== photo.caption) throw new Error(`Rendered caption does not match photograph ${photo.id}.`);
  if (!figure.includes(`src="${base}${photo.src}"`) || !figure.includes('loading="lazy"') || !figure.includes('<picture>') && !figure.includes('<picture ')) throw new Error(`Missing responsive lazy image ${photo.id}.`);
  const alt = decode(figure.match(/<img\b[^>]*\balt="([^"]*)"/)?.[1] ?? '');
  if (alt !== photo.caption) throw new Error(`Accessible image description does not match ${photo.id}.`);
  for (const image of [...photo.sources, { src: photo.thumbnail }]) {
    const path = resolve('out', `.${image.src}`);
    if (!path.startsWith(resolve('out') + sep)) throw new Error('Invalid gallery asset path.');
    const metadata = await sharp(path).metadata();
    if (metadata.format !== 'webp' || !(await stat(path)).size || image.width && metadata.width !== image.width) throw new Error(`Invalid optimized image ${image.src}.`);
    if (!html.includes(`${base}${image.src}`)) throw new Error(`Missing base-path-aware gallery source ${image.src}.`);
    assets++;
  }
}
if (html.indexOf('<section id="gallery"') < html.indexOf('The founder</p>') || !html.includes('A setting for')) throw new Error('The archive must follow the founder and preserve the Centre section.');
console.log(`Verified all 38 original image/caption mappings, exported figures, accessible descriptions and ${assets} optimized gallery assets for ${base || '/'}.`);
