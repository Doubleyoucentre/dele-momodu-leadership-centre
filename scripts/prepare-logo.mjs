import sharp from 'sharp';

const source = 'public/images/brand/dmlc-official.png';
const destination = 'public/images/brand/dmlc-transparent.png';
const { data, info } = await sharp(source).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
let transparentPixels = 0;
for (let offset = 0; offset < data.length; offset += 4) {
  const red = data[offset], green = data[offset + 1], blue = data[offset + 2];
  const minimum = Math.min(red, green, blue);
  const spread = Math.max(red, green, blue) - minimum;
  // Only the pale, near-neutral background is made transparent.
  // Every RGB value, dark letter and red symbol pixel remains unchanged.
  if (minimum >= 180 && spread <= 30) {
    data[offset + 3] = 0;
    transparentPixels++;
  }
}
if (transparentPixels < info.width * info.height * .35) throw new Error('Unexpected background; inspect the supplied source.');
await sharp(data, { raw: info }).png().toFile(destination);
await sharp(destination).resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile('public/images/brand/dmlc-icon.png');
console.log(`Preserved ${info.width}×${info.height} source RGB pixels; made ${transparentPixels} background pixels transparent.`);
