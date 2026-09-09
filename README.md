# Dele Momodu Leadership Centre Website

Premium editorial website for the Dele Momodu Leadership Centre (DMLC), an intellectual and residential facility in Ibadan, Nigeria.

- **Project:** Dele Momodu Leadership Centre Website
- **Organisation:** DoubleU Innovation Centre
- **Technical Implementation:** Jeremiah Segun Alayo
- **Implementation support:** CyberEdify and participating team members
- **Status:** GitHub Pages review preparation; official launch pending

## Project credits

This DMLC website project is undertaken through **DoubleU Innovation Centre**. **Jeremiah Segun Alayo** ([JeremiahAlayo](https://github.com/JeremiahAlayo)) leads the technical implementation, with implementation support from his company **CyberEdify** and its participating team members. These credits describe contributions; they do not change project ownership or establish a separate client contract.

Individual team members should contribute through their own GitHub accounts. Record actual contributions in commits and pull requests; do not add invented co-authors. Public portfolio case studies should describe the person's or company's role accurately and use material approved for sharing.

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

All institutional statements and programme details are grounded in the supplied DMLC information document. Unconfirmed contact details, application dates, fees, links, events, testimonials, statistics, partnerships and social profiles are intentionally omitted or marked pending.

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

The earlier Sites preview remains available while the GitHub Pages deployment is being prepared. The official domain and permanent client hosting remain pending. A review preview is not the official launch and the application form does not submit data.

See [the GitHub Pages guide](docs/GITHUB-PAGES.md) for setup and manual commands,.

## Current status

The first implementation includes the responsive homepage, supporting content routes, structured application preview, accessibility foundations, SEO metadata, sitemap and robots configuration.

## Pending items

- Supplied homepage UI/UX reference image (not attached to the build task)
- Confirmed email address, telephone number and contact person
- Residency application service, dates, deadlines, fees and supporting-document rules
- Confirmed event, news and library catalogue content
- Approved social media links
- GitHub Pages publication and verification
- Official domain

This repository records implementation work without making claims beyond the stated organisational and technical roles.
