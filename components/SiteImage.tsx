import Image, { type ImageProps } from 'next/image';
import { publicAsset } from '@/lib/site-config';

// next/link handles basePath automatically; public image paths need it explicitly.
export default function SiteImage({ src, ...props }: ImageProps) {
  // Web renditions preserve the originals and keep static Pages downloads small.
  const webSource = typeof src === 'string' && src.startsWith('/images/') && !src.includes('/hero/')
    ? src.replace(/\.jpg$/, '.webp')
    : src;
  return <Image {...props} src={typeof webSource === 'string' ? publicAsset(webSource) : webSource} />;
}
