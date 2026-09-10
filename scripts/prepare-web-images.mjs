import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

// Preserve the supplied originals. Generate only smaller web renditions.
for (const folder of ['centre', 'founder', 'gallery', 'hero', 'programmes']) {
  for (const file of await readdir(join('public/images', folder))) {
    if (!file.endsWith('.jpg')) continue;
    const source = join('public/images', folder, file);
    const destination = source.replace(/\.jpg$/, '.webp');
    await sharp(source).rotate().resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 82 }).toFile(destination);
    console.log(`${file}: ${(await stat(source)).size} → ${(await stat(destination)).size} bytes`);
  }
}
