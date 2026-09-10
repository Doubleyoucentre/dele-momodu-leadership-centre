# Dele Momodu Leadership Centre Website

Premium editorial website for the Dele Momodu Leadership Centre (DMLC), an intellectual and residential facility in Ibadan, Nigeria.

- **Project:** Dele Momodu Leadership Centre Website
- **Project home:** [Doubleyou](https://github.com/Doubleyoucentre) — frontier / hiring organisation; canonical repo and GitHub Pages
- **Lead developer:** [Jeremiah Segun Alayo](https://github.com/JeremiahAlayo) — hired by Doubleyou to build the website
- **Technical co-creator:** [CyberEdify](https://github.com/CyberEdify) — Jeremiah’s company; delivery company for the technical work
- **Status:** Review refinement; GitHub Pages preview
- **Review website:** https://doubleyoucentre.github.io/dele-momodu-leadership-centre/
- **Repository (canonical):** https://github.com/Doubleyoucentre/dele-momodu-leadership-centre

## Project credits

**Doubleyou** ([Doubleyoucentre](https://github.com/Doubleyoucentre)) is the project home for DMLC: the frontier / hiring organisation, the canonical repository and the GitHub Pages host. Doubleyou hired the developer. Doubleyou is not the technical builder of this website.

**Jeremiah Segun Alayo** ([JeremiahAlayo](https://github.com/JeremiahAlayo)) is the lead developer. He was hired by Doubleyou to implement DMLC.

**CyberEdify** ([CyberEdify](https://github.com/CyberEdify)) is Jeremiah’s company and a technical co-creator on this work — the delivery company for engineering and implementation. CyberEdify is not a minor “support” credit; it is named for clear visibility alongside the lead developer.

The public repository and Pages preview stay under Doubleyoucentre so DMLC has one source of truth. That hosting choice reflects Doubleyou as project home, not as the party that built the product.

Contributors should use their own GitHub accounts for commits and pull requests. Do not invent co-authors. Portfolio case studies should describe each role accurately and use material approved for sharing.

## Technology stack

- TypeScript
- React 19
- Vinext / Next.js-compatible App Router
- Tailwind CSS
- GitHub Pages static preview via Next.js
- Existing Vinext / OpenAI Sites build retained for compatibility

## Source materials

- [DMLC information document](https://drive.google.com/file/d/1V16cj1tfaDbgPBoOfO5rl4xGUQI7bcsu/view?usp=drivesdk)
- [DMLC photographs and videos](https://drive.google.com/drive/folders/18BzhU268X142F2B0VnBvpSoOpu4lnirp)

All institutional statements and programme details are grounded in the supplied DMLC information document. Official contact details and branding were supplied during the September 2026 review. Unconfirmed application dates, fees, events, news, testimonials, statistics, partnerships and social profiles are omitted from the public website and tracked internally.

## Local development

```bash
npm install
npm run dev
```

## Build commands

```bash
npm run build
npm run lint
```

## Deployment

The preferred review host is GitHub Pages. Run `npm run build:pages` to create the static website in `out/`. The GitHub Actions workflow builds and publishes updates pushed to `main` after Pages is enabled for the repository.

The GitHub Pages review is live at https://doubleyoucentre.github.io/dele-momodu-leadership-centre/. The earlier Sites preview remains available but is no longer the preferred review link. The official domain and permanent client hosting remain pending. A review preview is not the official launch. The Apply route provides official email/telephone residency enquiries; it does not collect or submit applicant data.

See [the GitHub Pages guide](docs/GITHUB-PAGES.md) for setup and manual commands,.

## Official branding and contact

- Email: dmlcconnect@gmail.com
- Phone: +234 810 696 2985
- Logo: supplied Drive original preserved in `public/images/brand/dmlc-official.png`; transparent copy changes only background alpha, not logo RGB pixels.
- Run `node scripts/prepare-logo.mjs` to reproduce the transparent copy. `node scripts/prepare-web-images.mjs` produces smaller web photographs while retaining originals.

## Current status

The first implementation includes the responsive homepage, supporting content routes, residency enquiry flow, accessibility foundations, SEO metadata, sitemap and robots configuration.

## Pending items

- Supplied homepage UI/UX reference image (not attached to the build task)
- Confirmed contact person
- Residency application service, dates, deadlines, fees and supporting-document rules
- Confirmed event, news and library catalogue content
- Approved social media links
- Official domain

This repository is hosted under Doubleyoucentre as the canonical project home (Doubleyou as frontier / hiring organisation). Technical credit: JeremiahAlayo as lead developer; CyberEdify as technical co-creator and delivery company.
