import type { MetadataRoute } from 'next';
const base = 'https://dele-momodu-leadership-centre.tool-doubleu.chatgpt.site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/programmes', '/residencies', '/resources', '/library', '/events', '/news', '/contact', '/apply'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? ('monthly' as const) : ('yearly' as const), priority: path === '' ? 1 : .7 }));
}
