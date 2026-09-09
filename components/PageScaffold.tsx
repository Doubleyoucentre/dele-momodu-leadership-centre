import Image from './SiteImage';
import { Reveal } from './Reveal';
import type { PageData } from '@/lib/page-data';
import { ButtonLink } from './ui/ButtonLink';

export function PageScaffold({ data, applyCta = false }: { data: PageData; applyCta?: boolean }) {
  return (
    <main id="main-content" className="bg-[#f7f3eb]">
      <section className="bg-[#0c2d26] pb-20 pt-40 text-white md:pb-28 md:pt-48">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8"><p className="eyebrow text-[#dcc691]">{data.eyebrow}</p><h1 className="font-display mt-8 text-[clamp(4rem,8vw,7.5rem)] leading-[.84] tracking-[-.04em]">{data.title}</h1></div>
          <p className="max-w-xl text-base leading-8 text-white/68 lg:col-span-4 lg:self-end">{data.intro}</p>
        </div>
      </section>
      <Reveal image className="relative h-[clamp(380px,58vw,760px)] bg-[#d8d1c4]"><Image src={data.image} alt={data.imageAlt} fill preload sizes="100vw" className="object-cover object-center" /></Reveal>
      <section className="section-pad bg-[#f7f3eb]"><div className="site-container">
        {data.sections.map((section, index) => <Reveal key={section.title} className="grid gap-8 border-t border-[#0c2d26]/20 py-12 lg:grid-cols-12 lg:py-16" delay={(index % 2) * 60}><div className="lg:col-span-3"><p className="eyebrow text-[#8b764b]">{section.eyebrow}</p></div><div className="lg:col-span-5"><h2 className="font-display text-[clamp(2.7rem,5vw,4.7rem)] leading-[.92] text-[#0c2d26]">{section.title}</h2></div><div className="lg:col-span-4"><p className="text-base leading-8 text-[#5e625d]">{section.body}</p>{section.items && <ul className="mt-6 grid gap-3 border-t border-[#0c2d26]/15 pt-5 text-sm text-[#343834]">{section.items.map((item) => <li key={item} className="flex gap-3 before:mt-[.75em] before:h-px before:w-5 before:bg-[#b79a62]">{item}</li>)}</ul>}{section.note && <p className="mt-6 border-l border-[#b79a62] pl-4 text-xs leading-6 text-[#777a75]">{section.note}</p>}</div></Reveal>)}
      </div></section>
      {applyCta && <section className="bg-[#0c2d26] py-24 text-white"><div className="site-container"><h2 className="font-display max-w-4xl text-[clamp(3.5rem,7vw,6.5rem)] leading-[.86]">Give your work an uninterrupted week.</h2><div className="mt-9"><ButtonLink href="/apply" variant="light">Prepare your application</ButtonLink></div></div></section>}
    </main>
  );
}
