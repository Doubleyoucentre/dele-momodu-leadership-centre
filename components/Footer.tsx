import Link from 'next/link';
import { BrandMark } from './ui/BrandMark';

const footerNav = [
  ['About', '/about'], ['Programmes', '/programmes'], ['Residencies', '/residencies'],
  ['Library', '/library'], ['Events', '/events'], ['News', '/news'], ['Contact', '/contact'],
];

export function Footer() {
  return (
    <footer className="bg-[#071d19] text-white">
      <div className="site-container grid gap-14 py-16 md:grid-cols-[1.25fr_.75fr_.75fr] md:py-24">
        <div>
          <BrandMark inverse />
          <p className="font-display mt-8 max-w-md text-3xl leading-tight text-white/90">A home for scholarship, reflection and consequential African ideas.</p>
        </div>
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.16em] text-[#c5a66a]">Explore</p>
          <nav className="grid gap-2 text-sm text-white/70" aria-label="Footer navigation">
            {footerNav.map(([label, href]) => <Link className="transition-colors hover:text-white" key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.16em] text-[#c5a66a]">The Centre</p>
          <address className="not-italic text-sm leading-7 text-white/70">Alalubosa GRA<br />Ibadan, Oyo State<br />Nigeria</address>
          <p className="mt-5 text-xs text-white/45">Contact details pending confirmation.</p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dele Momodu Leadership Centre.</p>
          <p>A Dele Momodu Foundation initiative.</p>
        </div>
      </div>
    </footer>
  );
}
