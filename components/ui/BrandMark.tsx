import Link from 'next/link';

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="DMLC home">
      <span className={`grid h-11 w-11 place-items-center rounded-full border text-[10px] font-bold tracking-[.08em] transition-colors ${inverse ? 'border-white/45 text-white' : 'border-[#0c2d26]/40 text-[#0c2d26]'}`}>
        DMLC
      </span>
      <span className={`hidden max-w-[160px] text-[11px] font-semibold uppercase leading-[1.25] tracking-[.14em] sm:block ${inverse ? 'text-white' : 'text-[#0c2d26]'}`}>
        Dele Momodu<br />Leadership Centre
      </span>
    </Link>
  );
}
