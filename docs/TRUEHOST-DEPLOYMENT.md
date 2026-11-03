# Truehost deployment

The official domain is `delemomoducentre.org`. The client-provided Truehost hosting serves the static website; GitHub retains the source and version history.

## Build

Use the Node version declared in `package.json` and install dependencies with `npm ci` when needed.

```sh
npm run lint
npm run build:hosting
```

The hosting build runs the existing Next.js static export and verifier. It writes the deployable website to `out/`, with an empty base path and `https://delemomoducentre.org` as the sitemap, robots and structured-data origin. It checks all eight content pages and their local links/assets. A Node application server or database is not required for this version.

`npm run build:pages` remains the separate GitHub Pages preview build. Its project-folder URLs must not be uploaded to the official domain.

## Publish

1. Sign in to the correct Truehost account over its secure control-panel address. Confirm the primary domain is `delemomoducentre.org` and inspect its document root.
2. Preserve existing hosting configuration and back up any website files being replaced. Keep backups outside the public document root.
3. ZIP the **contents** of `out/`, with `index.html` at the archive root. Upload only these static files through the account's File Manager to the domain's document root, normally `public_html`. Include `_next/`, `images/`, all route folders, metadata files and generated route data. Do not upload the source checkout, credentials, `.git`, `node_modules` or private task notes.
4. Extract into the document root, without introducing an extra `out/` folder. Preserve existing cPanel PHP directives and other hosting files. Remove the temporary upload archive using the normal recoverable file-management flow once extraction is verified.
5. Ensure a publicly trusted certificate covers both `delemomoducentre.org` and `www.delemomoducentre.org`, with automatic renewal enabled. A self-signed certificate does not complete SSL setup. Use the included AutoSSL option if available; otherwise ask the hosting provider to activate it before considering a paid certificate.
6. After trusted HTTPS works, enable HTTP-to-HTTPS redirection and direct `www` consistently to the main domain. Preserve certificate-validation paths and existing hosting configuration.

## Verify the release

- Check public DNS against the hosting account's actual IP; preserve unrelated email records and nameservers.
- Verify HTTPS with normal certificate validation on the main domain and `www`, including certificate coverage and expiry.
- Check HTTP redirects, all eight content routes, their images, CSS, JavaScript, fonts, sitemap and robots file.
- Open the live website in desktop and mobile layouts. Check navigation, image loading and official contact/enquiry links.
- Check a missing route returns HTTP 404. Configure the exported `404.html` as the hosting error page if required.
- Record the source commit, production build, release date and observed live result. A successful build alone does not prove deployment or SSL completion.

The Apply page remains an enquiry flow using the approved public email/phone. The current release does not collect applications or send mail through SMTP. Additional photographs, captions and a carousel are separate content work.
