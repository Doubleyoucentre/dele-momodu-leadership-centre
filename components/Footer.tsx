import { ContactDetails } from './ContactDetails';
import Link from 'next/link';
import { BrandMark } from './ui/BrandMark';

const footerNav = [
  ['About', '/about'], ['Programmes', '/programmes'], ['Residencies', '/residencies'],
  ['Resources', '/resources'], ['Library', '/library'], ['Contact', '/contact'],
];

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/dele-momodu-leadership-centre/' },
  { name: 'Instagram', href: 'https://www.instagram.com/dmlcconnect/' },
] as const;

function SocialIcon({ network }: { network: 'LinkedIn' | 'Instagram' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      {network === 'Instagram' ? <><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></> : <><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8" cy="8" r="1" fill="currentColor" stroke="none" /><path d="M8 11v6m4 0v-6m0 3a3 3 0 0 1 6 0v3" /></>}
    </svg>
  );
}

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
          <nav aria-label="Social media" className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map(({ name, href }) => <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${name} (opens in a new tab)`} className="inline-flex min-h-11 items-center gap-2 border border-[#0c2d26]/25 px-3 text-xs transition-colors hover:bg-[#0c2d26] hover:text-white"><SocialIcon network={name} /><span>{name}</span></a>)}
          </nav>
        </div>
      </div>
      <div className="border-t border-[#0c2d26]/15">
        <div className="site-container flex flex-col items-center gap-2 py-6 text-xs text-[#62685f] md:flex-row md:justify-between">
          <p className="text-center md:order-last md:text-right">A Dele Momodu Foundation initiative.</p>
          <p className="footer-copyright w-full text-center md:order-first md:w-auto md:text-left">© {new Date().getFullYear()} Dele Momodu Leadership Centre.</p>
        </div>
      </div>
    </footer>
  );
}
