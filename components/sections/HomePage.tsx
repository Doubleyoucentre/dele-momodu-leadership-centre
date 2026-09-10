import Image from '@/components/SiteImage';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { Arrow } from '@/components/ui/Arrow';
import { ButtonLink, TextLink } from '@/components/ui/ButtonLink';

const programmes = [
  { number: '01', title: 'Resident Scholar Programme', text: 'A focused one-week residency for selected scholars working on substantial research, writing or creative projects.', image: '/images/programmes/private-study.jpg', href: '/residencies' },
  { number: '02', title: 'Leadership & Public Discourse', text: 'A setting for serious conversations, lectures and programmes addressing issues that matter to Nigeria, Africa and the wider world.', image: '/images/gallery/main-courtyard.jpg', href: '/programmes' },
  { number: '03', title: 'Research & Knowledge', text: 'Space and resources for ideas to be explored, stories documented and meaningful work advanced.', image: '/images/centre/library-study.jpg', href: '/resources' },
];

const experience = [
  ['Private accommodation', 'Comfort and privacy for each resident scholar.'],
  ['Research resources', 'A library with books, publications and archival materials.'],
  ['Quiet work environment', 'Dedicated room to read, write, reflect and make progress.'],
  ['Connected & comfortable', 'High-speed internet and a modern kitchen for daily routines.'],
  ['Space to recharge', 'A swimming pool and outdoor areas for rest and reflection.'],
  ['Serene surroundings', 'A secure residential setting away from urban distraction.'],
];

const applicants = ['University lecturers & professors', 'PhD & postgraduate researchers', 'Authors & writers', 'Journalists', 'Policy researchers & analysts', 'Historians & social scientists', 'Independent researchers', 'Creative professionals'];

export function HomePage() {
  return (
    <main id="main-content">
      <section className="relative min-h-[92svh] overflow-hidden bg-[#071d19] text-white">
        <Image src="/images/hero/dmlc-aerial.jpg" alt="Aerial view of the Dele Momodu Leadership Centre surrounded by trees" fill preload sizes="100vw" className="hero-image object-cover object-[52%_50%]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,29,25,.86)_0%,rgba(7,29,25,.54)_48%,rgba(7,29,25,.1)_78%),linear-gradient(0deg,rgba(7,29,25,.48),transparent_55%)]" />
        <div className="site-container relative flex min-h-[92svh] flex-col justify-end pb-10 pt-36 md:pb-12">
          <div className="hero-copy max-w-[920px]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[.13em] text-[#dcc691] sm:text-[11px] sm:tracking-[.22em]">Dele Momodu Leadership Centre · Ibadan</p>
            <h1 className="font-display text-[clamp(4rem,9vw,8rem)] font-medium leading-[.9] tracking-[-.035em]">A sanctuary<br />for ideas.</h1>
            <div className="mt-8 grid max-w-[720px] gap-7 border-t border-white/35 pt-6">
              <p className="max-w-[600px] text-base leading-7 text-white/82 md:text-lg">A quieter place for scholarship, research and leadership.</p>
              <div className="flex flex-wrap gap-3"><ButtonLink href="/apply" variant="light">Residency enquiries</ButtonLink><ButtonLink href="#purpose" variant="ghost">Explore the Centre</ButtonLink></div>
            </div>
          </div>
          <div className="hero-location mt-12 flex items-center justify-between border-t border-white/18 pt-5 text-[10px] font-semibold uppercase tracking-[.2em] text-white/62">
            <span>Alalubosa GRA · Ibadan, Nigeria</span><a href="#purpose" className="hidden items-center gap-2 sm:flex">Scroll to discover <span aria-hidden="true">↓</span></a>
          </div>
        </div>
      </section>

      <section id="purpose" className="section-pad bg-[#f7f3eb]">
        <div className="site-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            <Reveal className="lg:col-span-7"><p className="eyebrow text-[#0c2d26]">Our purpose</p><h2 className="font-display mt-8 max-w-3xl text-[clamp(3.5rem,7vw,7rem)] font-medium leading-[.94] tracking-[-.035em] text-[#0c2d26]">A place for a deeper Africa.</h2></Reveal>
            <Reveal className="lg:col-span-4 lg:col-start-9 lg:pt-16" delay={100}><p className="text-lg leading-8 text-[#454844]">DMLC is an intellectual and residential facility established by the Dele Momodu Foundation for scholars, researchers, writers, journalists, creatives and thought leaders.</p><p className="mt-5 text-base leading-7 text-[#6e706c]">The Centre offers the privacy, tranquillity and focus needed to research, write, reflect and create with intention.</p><div className="mt-8"><TextLink href="/about">Discover our story</TextLink></div></Reveal>
          </div>
          <Reveal image className="relative mt-16 h-[clamp(360px,55vw,720px)] lg:ml-[8.333%]"><Image src="/images/centre/residence-wing.jpg" alt="The quiet residential wing and courtyard of the Centre" fill sizes="(max-width: 1024px) 100vw, 92vw" className="object-cover object-center" /></Reveal>
        </div>
      </section>

      <section id="why-the-centre-exists" className="section-pad border-t border-[#0c2d26]/15 bg-[#fbf9f4]">
        <div className="site-container">
          <p className="eyebrow text-[#0c2d26]">Why the Centre Exists</p>
          <div className="mt-10 grid items-end gap-12 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-9"><h2 className="why-statement font-display font-normal text-[#0c2d26]"><span className="block">Africa has no shortage of ideas.</span><span className="mt-8 block">What is often missing is the time, space and environment required to develop those ideas into scholarship, stories, institutions and solutions.</span></h2></Reveal>
            <figure className="ml-auto w-[65%] lg:col-span-3 lg:mb-3 lg:w-full"><div className="relative aspect-[3/4]"><Image src="/images/centre/roof-terrace.jpg" alt="A quiet covered terrace overlooking the trees at DMLC" fill sizes="(max-width: 1023px) 65vw, 25vw" className="object-cover" /></div><figcaption className="mt-4 text-xs uppercase leading-6 tracking-[.12em] text-[#666a65]">Room to think.<br />Space to develop.</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="border-y border-[#0c2d26]/15 bg-[#efe8dc]"><div className="site-container grid divide-y divide-[#0c2d26]/15 md:grid-cols-3 md:divide-x md:divide-y-0">
        {[['4', 'Resident scholars at a time'], ['1 week', 'Focused residency programme'], ['Library', 'Books, publications & archive']].map(([fact, label]) => <div key={fact} className="px-2 py-10 md:px-10 md:py-14 first:pl-0 last:pr-0"><p className="font-display text-5xl font-medium leading-none text-[#0c2d26] md:text-6xl">{fact}</p><p className="mt-3 text-xs font-semibold uppercase tracking-[.13em] text-[#666a65]">{label}</p></div>)}
      </div></section>

      <section className="section-pad bg-[#fbf9f4]"><div className="site-container">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="eyebrow text-[#0c2d26]">Our programmes</p><h2 className="font-display mt-7 text-[clamp(3.5rem,7vw,6.5rem)] leading-[.9] tracking-[-.03em] text-[#0c2d26]">People. Ideas. Impact.</h2></div><TextLink href="/programmes">View all programmes</TextLink></Reveal>
        <div className="mt-14 border-t border-[#0c2d26]/20">{programmes.map((item, index) => <Reveal key={item.title} delay={index * 70}><Link href={item.href} className="group grid gap-6 border-b border-[#0c2d26]/20 py-8 lg:grid-cols-[80px_1.1fr_1fr_48px] lg:items-center"><span className="text-xs font-semibold tracking-[.15em] text-[#8b764b]">{item.number}</span><div className="relative aspect-[16/9] overflow-hidden bg-[#d8d1c4] lg:aspect-[4/2.3]"><Image src={item.image} alt="" fill sizes="(max-width: 1024px) 100vw, 34vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" /></div><div><h3 className="font-display text-3xl leading-tight text-[#0c2d26] md:text-4xl">{item.title}</h3><p className="mt-3 max-w-lg text-base leading-7 text-[#666a65]">{item.text}</p></div><span className="hidden h-11 w-11 place-items-center rounded-full border border-[#0c2d26]/25 transition-all group-hover:translate-x-1 group-hover:bg-[#0c2d26] group-hover:text-white lg:grid"><Arrow /></span></Link></Reveal>)}</div>
      </div></section>

      <section className="bg-[#0c2d26] text-white"><div className="grid min-h-[760px] lg:grid-cols-2">
        <Reveal image className="relative min-h-[480px] lg:min-h-full"><Image src="/images/centre/private-room.jpg" alt="A private resident scholar bedroom" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" /></Reveal>
        <div className="flex items-center px-6 py-20 sm:px-12 lg:px-[clamp(4rem,7vw,8rem)]"><Reveal><p className="eyebrow text-[#dcc691]">Resident Scholar Programme</p><h2 className="font-display mt-8 text-[clamp(3.5rem,6vw,6.5rem)] leading-[.94] tracking-[-.03em]">One week.<br />Real progress.</h2><p className="mt-8 max-w-xl text-base leading-8 text-white/72">Selected scholars receive dedicated time and a private room to advance a clearly defined research, writing or creative project. The Centre hosts up to four scholars at a time, preserving an intimate and focused experience.</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/residencies" variant="light">Learn about residency</ButtonLink></div></Reveal></div>
      </div></section>

      <section className="section-pad overflow-hidden bg-[#071d19] text-white"><div className="site-container grid items-center gap-14 lg:grid-cols-12">
        <Reveal image className="relative aspect-[4/5] lg:col-span-5 lg:ml-[10%]"><Image src="/images/founder/dele-momodu-portrait-at-centre.jpg" alt="Portrait of Chief Dele Momodu displayed at the Centre" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-left" /></Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}><p className="eyebrow text-[#dcc691]">The founder</p><h2 className="founder-title font-display mt-8 text-[clamp(3.6rem,6vw,6.2rem)] leading-[.94] tracking-[-.04em]">A life in stories.<br />A legacy in ideas.</h2><p className="mt-8 max-w-xl text-base leading-8 text-white/68">Chief Dele Momodu, journalist, publisher and founder of Ovation International, established the Centre as a legacy project and an investment in the intellectual capacity of Nigerians and Africans.</p><div className="mt-9"><TextLink href="/about#founder">Read the founder’s story</TextLink></div></Reveal>
      </div></section>

      <section className="section-pad bg-[#f7f3eb]"><div className="site-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end"><div className="lg:col-span-7"><p className="eyebrow text-[#0c2d26]">The Centre</p><h2 className="font-display mt-7 text-[clamp(3.5rem,7vw,6.5rem)] leading-[.94] tracking-[-.035em] text-[#0c2d26]">A setting for<br />a different pace.</h2></div><p className="max-w-lg text-base leading-8 text-[#666a65] lg:col-span-4 lg:col-start-9">Private rooms, a library and outdoor spaces bring work and rest together in Alalubosa GRA, Ibadan.</p></div>
        <div className="mt-14 grid gap-8 md:grid-cols-12 md:items-start">
          <figure className="md:col-span-8"><Reveal image className="gallery-photo relative aspect-[4/3]"><Image src="/images/centre/front-courtyard.jpg" alt="White residential architecture and courtyard at the Centre" fill sizes="(max-width: 767px) 100vw, 66vw" className="object-cover" /></Reveal><figcaption className="mt-4 text-xs uppercase tracking-[.12em] text-[#666a65]">01 / Around the Centre</figcaption></figure>
          <figure className="md:col-span-4 md:mt-24"><Reveal image className="gallery-photo relative aspect-[3/4]"><Image src="/images/gallery/outdoor-reading-terrace.jpg" alt="Open-air terrace with a shaded seating area" fill sizes="(max-width: 767px) 100vw, 33vw" className="object-cover" /></Reveal><figcaption className="mt-4 text-xs uppercase tracking-[.12em] text-[#666a65]">02 / A moment outdoors</figcaption></figure>
          <figure className="md:col-span-6 md:col-start-4 md:mt-4"><div className="gallery-photo relative aspect-[4/3] overflow-hidden"><Image src="/images/programmes/research-room.jpg" alt="A light-filled workspace beside the library" fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" /></div><figcaption className="mt-4 text-xs uppercase tracking-[.12em] text-[#666a65]">03 / Space for focused work</figcaption></figure>
        </div>
      </div></section>

      <section className="section-pad bg-[#efe8dc]"><div className="site-container grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-4"><p className="eyebrow text-[#0c2d26]">The experience</p><h2 className="font-display mt-8 text-5xl leading-[.95] text-[#0c2d26] md:text-6xl">Designed for deep work and restoration.</h2></Reveal>
        <div className="grid gap-x-10 lg:col-span-7 lg:col-start-6 md:grid-cols-2">{experience.map(([title, text], index) => <Reveal key={title} delay={(index % 2) * 70} className="border-t border-[#0c2d26]/20 py-7"><span className="font-display text-2xl text-[#0c2d26]">{String(index + 1).padStart(2, '0')}</span><h3 className="mt-6 text-sm font-bold uppercase tracking-[.1em] text-[#0c2d26]">{title}</h3><p className="mt-2 text-base leading-7 text-[#6e706c]">{text}</p></Reveal>)}</div>
      </div></section>

      <section className="section-pad bg-[#fbf9f4]"><div className="site-container grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5"><p className="eyebrow text-[#0c2d26]">Who can apply</p><h2 className="font-display mt-8 text-[clamp(3.5rem,6vw,6rem)] leading-[.9] text-[#0c2d26]">For people doing work that matters.</h2><p className="mt-7 max-w-lg text-base leading-8 text-[#666a65]">Applicants should have a clear project or research objective that they intend to advance during the residency.</p></Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={100}><ul className="border-t border-[#0c2d26]/20">{applicants.map((item, index) => <li key={item} className="flex items-center gap-5 border-b border-[#0c2d26]/20 py-4"><span className="text-xs font-semibold tracking-[.12em] text-[#9a804d]">{String(index + 1).padStart(2, '0')}</span><span className="font-display text-2xl text-[#0c2d26] md:text-3xl">{item}</span></li>)}</ul></Reveal>
      </div></section>

      <section className="relative overflow-hidden bg-[#0c2d26] py-[clamp(6rem,12vw,11rem)] text-white"><div className="site-container relative"><Reveal><p className="eyebrow text-[#dcc691]">Your residency</p><h2 className="font-display mt-8 max-w-5xl text-[clamp(4rem,8vw,8rem)] leading-[.82] tracking-[-.04em]">Give your ideas the space they deserve.</h2><div className="mt-10 flex flex-wrap gap-3"><ButtonLink href="/apply" variant="light">Residency enquiries</ButtonLink></div></Reveal></div></section>
    </main>
  );
}
