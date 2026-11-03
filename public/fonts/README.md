# Website fonts

Manrope and Cormorant Garamond are self-hosted under the SIL Open Font License 1.1. The WOFF2 files and font-face descriptors are unchanged from the first production export, including the existing language subsets, weights, display behavior and fallback metrics. Only the two Latin subsets are preloaded.

Keeping these files in the repository makes production and review builds independent of external font-service responses. `app/layout.tsx` uses `publicAsset` for both font preloads and the stylesheet, so root-domain and GitHub Pages exports use the same files. Stylesheet URLs are relative to this directory.

- Manrope: [Google Fonts source and license](https://github.com/google/fonts/tree/main/ofl/manrope), local `Manrope-OFL.txt`.
- Cormorant Garamond: [Google Fonts source and license](https://github.com/google/fonts/tree/main/ofl/cormorantgaramond), local `Cormorant-Garamond-OFL.txt`.

The fonts remain the work of their respective authors. Website delivery credits are in the project README.
