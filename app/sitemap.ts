import type { MetadataRoute } from 'next';
export const dynamic = 'force-static';
import { siteUrl as base } from '@/lib/site-config';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/programmes', '/residencies', '/resources', '/library', '/contact', '/apply'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? ('monthly' as const) : ('yearly' as const), priority: path === '' ? 1 : .7 }));
}
