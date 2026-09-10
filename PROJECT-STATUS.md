# DMLC Website — Project Status

**Project:** Dele Momodu Leadership Centre Website  
**Organisation:** DoubleU Innovation Centre  
**Technical Implementation:** Jeremiah Segun Alayo  
**Current Phase:** Review refinement; GitHub Pages preview

**Repository:** https://github.com/Doubleyoucentre/dele-momodu-leadership-centre

**GitHub Pages:** https://doubleyoucentre.github.io/dele-momodu-leadership-centre/

**Earlier Review Preview:** https://dele-momodu-leadership-centre.tool-doubleu.chatgpt.site
**Domain:** Pending

## COMPLETED

- Source document reviewed and factual content mapped
- All twelve supplied photographs reviewed and organised
- Supplied HEIC assets preserved and web-compatible JPEG renditions prepared
- DMLC design system established: forest green, ivory, cream, charcoal and muted gold
- Editorial serif and modern sans-serif typography system
- Responsive desktop header and full-screen mobile navigation
- Premium homepage hero, purpose, facts, programmes, residency, founder, Centre, experience, applicant, why-apply and final CTA sections
- Supporting routes for About, Programmes, Residencies, Resources, Library, Contact and Apply. Empty News/Events routes removed during review refinement; their originals remain recoverable in Git.
- Residency enquiry page with official email/telephone links; no applicant data collection
- Scroll reveal, image reveal, hover and link micro-interactions
- Reduced-motion support, keyboard focus states and semantic page structure
- Base SEO metadata, canonical origin, robots, sitemap and organisation schema
- Project README and status tracking

- Review and organisation of the two supplied videos
- Dependency installation and production build validation
- Responsive and interaction testing across desktop and mobile breakpoints
- Console and broken-image checks

## PENDING

- Official domain and client hosting provision/connection
- Live application backend integration
- Future CMS integration for events and news

## BLOCKED / WAITING

- Supplied homepage UI/UX reference image was not attached to this task
- No GitHub access blocker: JeremiahAlayo is authenticated and the organisation repository is created

## CONTENT NEEDED

- Confirmed contact person
- Official application link/service, deadlines, fees, dates and document requirements
- Approved social media accounts
- Confirmed events and registration links
- News articles and announcements
- Library/archive catalogue
- Approved testimonials, quotes, statistics and partnerships

## DESIGN DECISIONS

- Photography-led editorial direction using only supplied DMLC imagery
- Aerial Centre photograph selected for the hero; residence, library, terrace, bedroom and courtyard imagery used contextually
- Founder feature uses the supplied portrait artwork displayed inside the Centre; no external portrait or invented quotation added
- Sharp-edged cinematic image treatments used instead of repeated rounded cards
- Unconfirmed content is omitted from public pages and tracked internally; no pending/development text is shown

## DEPLOYMENT

- OpenAI Sites project registered for client review
- Public-by-link client review preview published successfully
- GitHub Pages is the selected review host; Pages enabled with GitHub Actions as the source
- First deployment succeeded on 9 September 2026: Actions run 34391461876, application commit 8e019b6
- Live homepage verified in the browser; mobile and desktop Apply behavior checked against the same static build
- Next.js 16.3.4 exports the existing React pages to `out/`; standard Vinext build retained
- Ten content pages and 434 local links/assets passed static export verification on the first Pages publish
- After 10 September 2026 refinements: eight content pages (News/Events removed) and 341 local links/assets pass verification
- Header Apply remains visible while scrolling and now closes an open mobile menu
- README credits DoubleU Innovation Centre, Jeremiah Segun Alayo and CyberEdify
- Git Bash instructions are in `docs/GITHUB-PAGES.md`
- Review refinement evidence: `docs/REVIEW-2026-09-10.md`

## TECHNICAL FOLLOW-UP

- Existing Vinext/server/tooling dependencies have npm audit advisories (including react-server-dom-webpack, image-size, undici and Vite). The Pages deployment uploads only static `out/` files and has no Node/React application server. Review and update the retained server/tooling stack before any future server-backed deployment; no broad forced dependency upgrade was applied during the Pages migration.
- Earlier commits used a placeholder email and are preserved. New commits use JeremiahAlayo's GitHub noreply identity; README records the broader implementation credit without rewriting history.

## DOMAIN

- No domain purchased, transferred or configured

## LAST UPDATE

10 September 2026

## SEPTEMBER REVIEW REFINEMENTS

- Official email and phone added to contact, footer and mobile menu.
- Approved “Why the Centre Exists” message added verbatim without attribution.
- All twelve photographs re-reviewed; homepage uses eleven distinct photographs once each, with contextual library/residency/founder/gallery crops.
- New WebP renditions reduce photograph transfers; source JPEG/HEIC files preserved.
- Actual official logo retrieved from the supplied Drive folder. At the user's explicit request and approval, a pixel script removed only the pale background alpha. Every original RGB pixel remains unchanged; original PNG retained. Generated cutout rejected and not incorporated.
- Light header and footer retain readable black logo lettering without a background rectangle.
- Favicon uses the whole official logo, proportionally fitted on transparent square canvas.
- Empty News/Events links and all public development notes removed; application is a contact-based enquiry flow without a fake form or backend.
- Reduced-motion support retained, with visible server-rendered content before animation enhancement.
- Validation and publication evidence: see docs/REVIEW-2026-09-10.md.
