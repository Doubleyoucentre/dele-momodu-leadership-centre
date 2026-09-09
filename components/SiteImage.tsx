import Image, { type ImageProps } from 'next/image';
import { publicAsset } from '@/lib/site-config';

// next/link handles basePath automatically; public image paths need it explicitly.
export default function SiteImage({ src, ...props }: ImageProps) {
  return <Image {...props} src={typeof src === 'string' ? publicAsset(src) : src} />;
}
