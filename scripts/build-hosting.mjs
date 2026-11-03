// Export the website at the root of its client-owned hosting account.
process.env.NEXT_PUBLIC_BASE_PATH = '';
process.env.NEXT_PUBLIC_SITE_URL ??= 'https://delemomoducentre.org';
await import('./build-pages.mjs');
