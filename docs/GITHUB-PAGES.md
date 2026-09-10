# DMLC — GitHub Pages and Git Bash guide

## Accounts and credit

Sign into GitHub as `JeremiahAlayo`. That personal account can act within organisations where it has permission. The DMLC repository is `Doubleyoucentre/dele-momodu-leadership-centre`: Doubleyou is the project home (frontier / hiring organisation, canonical repo and Pages — one source of truth). Jeremiah was hired by Doubleyou as lead developer. His company CyberEdify is credited as technical co-creator and delivery company, with a GitHub org link in the README.

The live review address is https://doubleyoucentre.github.io/dele-momodu-leadership-centre/. GitHub Actions run 34391461876 published the first Pages version successfully on 9 September 2026.

## Open the project in Git Bash

```bash
cd "/c/Users/DoubleUWork/Documents/Doubleyou-Work/Other-Projects/dele-momodu-leadership-centre"
```

`cd` changes the terminal's current folder. Git Bash represents the Windows C drive as `/c`.

## Check or connect GitHub

```bash
gh auth status
```

If you need to sign in:

```bash
gh auth login --hostname github.com --git-protocol https --web
```

Copy the temporary code printed in this same terminal, press Enter and enter it at GitHub's device activation page. Authorise with your personal account, then run `gh auth status` again. Do not commit login codes or tokens.

## Preview and build

```bash
npm ci
npm run dev
```

The development server prints its local address. Stop it with Ctrl+C. The Pages build uses the existing React pages with Next.js's static exporter:

```bash
npm run lint
npm run build:pages
npm run preview:pages
```

The output is `out/`, containing HTML, browser JavaScript, CSS and images. No application server or database runs on GitHub Pages. Never use the generated `dist/server/` or `.next/` directories as the Pages artifact.

## Publish an update after initial setup

```bash
git status
git diff
git add <the-files-you-changed>
git commit -m "Describe the change"
git push origin main
gh run list --workflow pages.yml --limit 5
```

Replace `<the-files-you-changed>` with actual filenames. `git status` lists changes; `git diff` lets you review them. `git add` selects files, `git commit` records the change, and `git push` uploads it. The Actions workflow then builds and publishes the website. Check for a successful run before telling a reviewer the update is live.

## Initial Pages setup

The repository must exist under the approved organisation, and the account must be allowed to manage its Pages settings. In repository Settings → Pages, select **GitHub Actions** as the source. The checked-in `.github/workflows/pages.yml` installs dependencies, runs lint, exports the site, and publishes `out/`.

GitHub Free Pages requires a public repository. Keep private documents and credentials out of the source. Public review hosting is not password protected.

## Future official domain and hosting

`NEXT_PUBLIC_SITE_URL` sets the full public website address. `NEXT_PUBLIC_BASE_PATH` sets the folder in the address; the Pages workflow obtains both from GitHub's Pages settings. A project preview uses `/dele-momodu-leadership-centre`; an official domain served from its root uses an empty base path.

For a different static host, build with that host's final URL and upload the contents of `out/`:

```bash
NEXT_PUBLIC_BASE_PATH='' NEXT_PUBLIC_SITE_URL='https://YOUR-CONFIRMED-DOMAIN' npm run build:pages
```

Replace the example with the confirmed domain. DNS configuration must be done with the domain owner's hosting instructions. Connecting a domain does not activate applications: the approved submission service, privacy information and requirements still need implementation and testing.

## References

- [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports)
