import Link from 'next/link';
import Image from '../SiteImage';

export function BrandMark({ footer = false, onClick }: { footer?: boolean; onClick?: () => void }) {
  return (
    <Link href="/" onClick={onClick} className={footer ? 'brand-mark brand-mark--footer' : 'brand-mark'} aria-label="Dele Momodu Leadership Centre home">
      <Image src="/images/brand/dmlc-transparent.png" alt="Dele Momodu Leadership Centre" width={264} height={198} preload={!footer} className="h-auto w-full" />
    </Link>
  );
}
