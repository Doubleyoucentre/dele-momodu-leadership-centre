# Photo gallery

The homepage archive sits immediately after The Founder. The existing Centre photograph section and other page content are retained. The collection contains all 38 supplied photographs in their submitted order, with captions retained exactly as supplied.

The gallery supports native touch/trackpad scrolling, previous/next buttons, and thumbnail selection. Thumbnail controls support Left/Right and Home/End keys with one tab stop. The counter announces the current photograph and caption. Photographs do not advance automatically; navigation respects reduced-motion preferences. Main images and thumbnails retain the complete composition, including supplied black margins.

## Preserve and prepare

Retain the original ZIP, Word document, JSON, CSV and unchanged JPEGs outside the public document root. They are delivery source material; upload only the static website export.

```sh
node scripts/prepare-gallery.mjs /path/to/extracted-package
npm run lint
npm run build:hosting
```

Preparation validates all 38 original SHA-256 hashes and dimensions before producing `lib/gallery.json` and `public/images/archive/`. Responsive WebP versions use quality 86, a maximum width of 1800 pixels without enlargement, and smaller 640/1200-pixel versions where applicable. Browsers select one suitable rendition; the total preparation size includes all alternatives. Small thumbnails are separate. Originals are never overwritten. Images load lazily and retain their aspect ratios.

Both hosting and Pages builds run `scripts/verify-gallery.mjs`. It checks all 38 numbered captions, rendered image descriptions, responsive paths and optimized image files. To compare the export directly with the preserved source package as well, set `DMLC_GALLERY_PACKAGE` to its extracted directory when building or running the verifier.

Before publishing, test the arrows, all thumbnail selections, keyboard navigation, touch swiping, viewport changes and long captions on mobile, tablet and desktop. Preserve a rollback copy of files being replaced and follow [the Truehost guide](TRUEHOST-DEPLOYMENT.md). Verify all 38 image-caption pairs and gallery assets on the actual live domain after publication.
