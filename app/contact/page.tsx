import type { Metadata } from 'next';
import Image from '@/components/SiteImage';
import { ContactDetails } from '@/components/ContactDetails';
import { TextLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = { title: 'Contact', description: 'Contact DMLC: dmlcconnect@gmail.com or +234 810 696 2985. Alalubosa GRA, Ibadan, Nigeria.' };
export default function Page() {
  return (
    <main id="main-content">
      <section className="bg-[#0c2d26] pb-20 pt-40 text-white md:pb-28 md:pt-48"><div className="site-container"><p className="eyebrow text-[#dcc691]">Contact DMLC</p><h1 className="font-display mt-8 max-w-4xl text-[clamp(3.6rem,8vw,7.5rem)] leading-[.94] tracking-[-.035em]">Let’s begin<br />a conversation.</h1></div></section>
      <section className="section-pad"><div className="site-container grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5"><p className="eyebrow text-[#0c2d26]">Enquiries</p><h2 className="font-display mt-7 text-5xl leading-none text-[#0c2d26] md:text-6xl">Connect with<br />the Centre.</h2><p className="mt-7 max-w-md text-base leading-8 text-[#5e625d]">Get in touch about the resident scholar programme, research resources or the Centre.</p><ContactDetails className="mt-8 text-lg text-[#0c2d26]" /><div className="mt-12 border-t border-[#0c2d26]/20 pt-7"><p className="eyebrow text-[#0c2d26]">Find us</p><address className="mt-5 not-italic text-base leading-8">Dele Momodu Leadership Centre<br />Alalubosa GRA<br />Ibadan, Nigeria</address></div><div className="mt-8"><TextLink href="/apply">Residency enquiries</TextLink></div></div>
        <figure className="lg:col-span-6 lg:col-start-7"><div className="relative aspect-[4/5] overflow-hidden"><Image src="/images/gallery/centre-approach.jpg" alt="The entrance and architecture of the Dele Momodu Leadership Centre" fill sizes="(max-width: 1023px) 100vw, 50vw" className="object-cover object-[60%_center]" /></div><figcaption className="mt-4 text-xs uppercase tracking-[.12em] text-[#656961]">Alalubosa GRA · Ibadan, Nigeria</figcaption></figure>
      </div></section>
    </main>
  );
}
