import type { Metadata } from 'next';
import { ContactDetails } from '@/components/ContactDetails';
import { TextLink } from '@/components/ui/ButtonLink';

export const metadata: Metadata = { title: 'Residency Enquiries', description: 'Contact DMLC about the Resident Scholar Programme and application process.' };

export default function Page() {
  return (
    <main id="main-content" className="bg-[#f7f3eb]">
      <section className="bg-[#0c2d26] pb-20 pt-40 text-white md:pb-28 md:pt-48">
        <div className="site-container grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8"><p className="eyebrow text-[#dcc691]">Resident Scholar Programme</p><h1 className="font-display mt-8 text-[clamp(3.6rem,8vw,7.5rem)] leading-[.94] tracking-[-.035em]">A week for<br />your work.</h1></div>
          <p className="max-w-xl text-base leading-8 text-white/75 lg:col-span-4 lg:self-end">Research, a manuscript, a policy paper or a creative project. Begin with a clear idea of what you want to advance.</p>
        </div>
      </section>
      <section className="section-pad">
        <div className="narrow-container grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div><p className="eyebrow text-[#0c2d26]">Residency enquiries</p><h2 className="font-display mt-7 text-5xl leading-none text-[#0c2d26] md:text-6xl">Start a conversation<br />with the Centre.</h2><p className="mt-7 text-base leading-8 text-[#5e625d]">For information about the residency and how to apply, contact DMLC by email or telephone.</p><ContactDetails className="mt-8 text-lg text-[#0c2d26]" /></div>
          <div className="border-t border-[#0c2d26]/20 pt-8 lg:mt-8"><h2 className="font-display text-4xl leading-tight text-[#0c2d26]">Before you enquire</h2><p className="mt-5 text-base leading-8 text-[#5e625d]">Consider the project you would bring, the progress you hope to make in one week, and the materials you would need for your work.</p><p className="mt-5 text-base leading-8 text-[#5e625d]">The programme welcomes scholars, researchers, writers, journalists and creative professionals with a defined objective.</p><div className="mt-8"><TextLink href="/residencies">Explore the programme</TextLink></div></div>
        </div>
      </section>
    </main>
  );
}
