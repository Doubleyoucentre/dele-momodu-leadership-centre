'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ContactDetails } from './ContactDetails';
import { BrandMark } from './ui/BrandMark';

const nav = [
  ['About', '/about'],
  ['Programmes', '/programmes'],
  ['Residencies', '/residencies'],
  ['Resources', '/resources'],
  ['Library', '/library'],
  ['Contact', '/contact'],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
      if (event.key !== 'Tab') return;
      const links = Array.from(headerRef.current?.querySelectorAll<HTMLElement>('a, button') ?? []).filter(node => node.getClientRects().length && getComputedStyle(node).visibility !== 'hidden');
      const first = links[0], last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const onResize = () => { if (window.innerWidth >= 1280) setOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); };
  }, [open]);

  const inverse = false;

  return (
    <header ref={headerRef} className={`fixed inset-x-0 top-0 z-50 border-b border-[#0c2d26]/10 text-[#0c2d26] transition-colors duration-300 ${scrolled ? 'bg-[#f7f3eb]/95 backdrop-blur-sm' : 'bg-[#f7f3eb]'}`}>
      <div className="site-container flex h-[84px] items-center justify-between gap-3">
        <BrandMark onClick={() => setOpen(false)} />
        <nav className="hidden items-center gap-[clamp(.9rem,1.4vw,1.6rem)] xl:flex" aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={`relative py-2 text-[12px] font-semibold uppercase tracking-[.09em] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100 ${pathname === href ? 'after:scale-x-100' : ''}`}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/apply"
            onClick={() => setOpen(false)}
            aria-label="Apply now"
            style={{ color: inverse ? '#0c2d26' : '#ffffff' }}
            className={`inline-flex min-h-11 items-center px-3 text-[10px] font-bold uppercase tracking-[.08em] transition-colors sm:px-4 sm:text-[11px] sm:tracking-[.1em] ${inverse ? 'bg-white hover:bg-[#efe8dc]' : 'bg-[#0c2d26] hover:bg-[#16463b]'}`}
          >
            <span className="sm:hidden">Apply</span>
            <span className="hidden sm:inline">Apply now</span>
          </Link>
          <button ref={menuButton} type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center xl:hidden">
            <span className="sr-only">Menu</span>
            <span className="relative h-4 w-6">
              <span className={`absolute left-0 top-1 h-px w-6 bg-current transition-transform ${open ? 'translate-y-[4px] rotate-45' : ''}`} />
              <span className={`absolute bottom-1 left-0 h-px w-6 bg-current transition-transform ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>
      <div id="mobile-menu" aria-hidden={!open} inert={!open} className={`fixed inset-x-0 top-[84px] z-40 h-[calc(100svh-84px)] overflow-y-auto bg-[#071d19] text-white transition-all duration-500 xl:hidden ${open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-4 opacity-0'}`}>
        <nav className="site-container flex min-h-[calc(100vh-84px)] flex-col py-10" aria-label="Mobile navigation">
          {nav.map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="font-display border-b border-white/15 py-3 text-[clamp(2rem,9vw,3.2rem)] leading-none" style={{ transitionDelay: `${index * 35}ms` }}>{label}</Link>
          ))}
          <Link href="/apply" onClick={() => setOpen(false)} className="button-link button-link--light mt-8 self-start">Residency enquiries</Link>
          <ContactDetails className="mt-8 text-sm text-white/80" />
          <p className="mt-auto pt-8 text-xs uppercase tracking-[.16em] text-white/55">Alalubosa GRA · Ibadan, Nigeria</p>
        </nav>
      </div>
    </header>
  );
}
