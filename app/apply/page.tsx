import type { Metadata } from 'next';
import { ApplicationForm } from '@/components/ApplicationForm';

export const metadata: Metadata = { title: 'Apply for a Residency', description: 'Prepare an application for the DMLC Resident Scholar Programme.' };

export default function Page() {
  return (
    <main id="main-content" className="bg-[#f7f3eb]">
      <section className="bg-[#0c2d26] pb-20 pt-40 text-white md:pb-28 md:pt-48"><div className="site-container grid gap-10 lg:grid-cols-12"><div className="lg:col-span-8"><p className="eyebrow text-[#dcc691]">Resident Scholar Programme</p><h1 className="font-display mt-8 text-[clamp(4rem,8vw,7.5rem)] leading-[.84] tracking-[-.04em]">Prepare your application.</h1></div><p className="max-w-xl text-base leading-8 text-white/68 lg:col-span-4 lg:self-end">A clear project, a focused objective and a commitment to use one week meaningfully.</p></div></section>
      <section className="section-pad"><div className="narrow-container"><div className="mb-16 grid gap-8 lg:grid-cols-2"><h2 className="font-display text-5xl leading-[.94] text-[#0c2d26] md:text-6xl">Tell us about the work you want to advance.</h2><p className="max-w-xl text-base leading-8 text-[#5e625d] lg:pt-4">The final application process, supporting-document requirements, deadlines and any fees are pending confirmation. This interface is ready to connect to the approved service later.</p></div><ApplicationForm /></div></section>
    </main>
  );
}
