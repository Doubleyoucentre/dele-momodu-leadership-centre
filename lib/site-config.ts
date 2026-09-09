export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  'https://dele-momodu-leadership-centre.tool-doubleu.chatgpt.site'
).replace(/\/$/, '');

export function publicAsset(path: string) {
  return path.startsWith('/') && !path.startsWith('//') ? `${basePath}${path}` : path;
}
