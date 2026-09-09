import { existsSync, readFileSync, statSync } from 'node:fs';
import { resolve, sep } from 'node:path';

const root = resolve('out');
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '/dele-momodu-leadership-centre';
const routes = ['', 'about', 'apply', 'contact', 'events', 'library', 'news', 'programmes', 'residencies', 'resources'];
const failures = [];
let assetsChecked = 0;

for (const route of routes) {
  const file = resolve(root, route, 'index.html');
  if (!existsSync(file)) {
    failures.push(`Missing HTML for /${route}`);
    continue;
  }
  const html = readFileSync(file, 'utf8');
  if (!html.includes('Apply now')) failures.push(`Missing Apply CTA on /${route}`);
  if (html.includes('/_next/image?')) failures.push(`Server image endpoint used on /${route}`);
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    const url = match[1].replaceAll('&amp;', '&');
    if (!url.startsWith('/') || url.startsWith('//')) continue;
    const pathname = decodeURIComponent(url.split(/[?#]/)[0]);
    if (base && pathname !== base && !pathname.startsWith(`${base}/`)) {
      failures.push(`URL outside project base on /${route}: ${pathname}`);
      continue;
    }
    let target = resolve(root, `.${pathname.slice(base.length) || '/'}`);
    if (target !== root && !target.startsWith(root + sep)) throw new Error('Invalid export asset path');
    if (existsSync(target) && statSync(target).isDirectory()) target = resolve(target, 'index.html');
    if (!existsSync(target)) failures.push(`Missing link or asset on /${route}: ${pathname}`);
    assetsChecked++;
  }
}
for (const file of ['robots.txt', 'sitemap.xml', '404.html']) {
  if (!existsSync(resolve(root, file))) failures.push(`Missing ${file}`);
}
if (failures.length) throw new Error(failures.join('\n'));
console.log(`Verified ${routes.length} pages and ${assetsChecked} local links/assets for ${base || '/'}.`);
