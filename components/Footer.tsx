import { ContactDetails } from './ContactDetails';
import Link from 'next/link';
import { BrandMark } from './ui/BrandMark';

const footerNav = [
  ['About', '/about'], ['Programmes', '/programmes'], ['Residencies', '/residencies'],
  ['Resources', '/resources'], ['Library', '/library'], ['Contact', '/contact'],
];

export function Footer() {
  return (
    <footer className="bg-[#f7f3eb] text-[#0c2d26]">
      <div className="site-container grid gap-14 py-16 md:grid-cols-2 md:py-24 xl:grid-cols-[1.25fr_.75fr_1fr]">
        <div className="md:col-span-2 md:flex md:items-end md:gap-10 xl:col-span-1 xl:block">
          <BrandMark footer />
          <p className="font-display mt-8 max-w-md text-3xl leading-tight text-[#0c2d26]">Dele Momodu Leadership Centre</p>
        </div>
        <div>
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.16em] text-[#80683f]">Explore</p>
          <nav className="grid gap-2 text-sm text-[#515a52]" aria-label="Footer navigation">
            {footerNav.map(([label, href]) => <Link className="transition-colors hover:text-[#0c2d26]" key={href} href={href}>{label}</Link>)}
          </nav>
        </div>
        <div className="min-w-0">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[.16em] text-[#80683f]">The Centre</p>
          <address className="not-italic text-sm leading-7 text-[#515a52]">Alalubosa GRA<br />Ibadan, Oyo State<br />Nigeria</address>
          <ContactDetails className="mt-5 text-sm text-[#0c2d26]" />
        </div>
      </div>
      <div className="border-t border-[#0c2d26]/15">
        <div className="site-container flex flex-col gap-2 py-6 text-xs text-[#62685f] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Dele Momodu Leadership Centre.</p>
          <p>A Dele Momodu Foundation initiative.</p>
        </div>
      </div>
    </footer>
  );
}
