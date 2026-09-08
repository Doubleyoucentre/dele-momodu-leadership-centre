'use client';

const Field = ({ label, name, type = 'text', placeholder, autoComplete }: { label: string; name: string; type?: string; placeholder?: string; autoComplete?: string }) => (
  <label className="grid gap-2 text-sm font-semibold text-[#0c2d26]">
    {label}
    <input name={name} type={type} placeholder={placeholder} autoComplete={autoComplete} className="min-h-12 border border-[#0c2d26]/20 bg-transparent px-4 font-normal outline-none transition-colors placeholder:text-[#777a75]/65 focus:border-[#0c2d26]" />
  </label>
);

export function ApplicationForm() {
  return (
    <form onSubmit={(event) => event.preventDefault()} className="grid gap-12" aria-describedby="application-note">
      <div className="grid gap-6 border-t border-[#0c2d26]/20 pt-8 md:grid-cols-2">
        <div className="md:col-span-2"><p className="eyebrow text-[#8b764b]">01 · Personal information</p></div>
        <Field label="Full name" name="fullName" autoComplete="name" placeholder="Your full name" />
        <Field label="Email address" name="email" type="email" placeholder="you@example.com" />
        <Field label="Phone number" name="phone" type="tel" placeholder="Include country code" />
        <Field label="Country of residence" name="country" placeholder="Country" />
      </div>
      <div className="grid gap-6 border-t border-[#0c2d26]/20 pt-8 md:grid-cols-2">
        <div className="md:col-span-2"><p className="eyebrow text-[#8b764b]">02 · Professional background</p></div>
        <Field label="Current role" name="role" placeholder="Role or area of practice" />
        <Field label="Institution or organisation" name="organisation" placeholder="If applicable" />
        <label className="grid gap-2 text-sm font-semibold text-[#0c2d26] md:col-span-2">Brief biography<textarea name="bio" rows={5} placeholder="Tell us about your work and experience" className="border border-[#0c2d26]/20 bg-transparent p-4 font-normal outline-none transition-colors placeholder:text-[#777a75]/65 focus:border-[#0c2d26]" /></label>
      </div>
      <div className="grid gap-6 border-t border-[#0c2d26]/20 pt-8">
        <p className="eyebrow text-[#8b764b]">03 · Proposed project</p>
        <Field label="Project title" name="projectTitle" placeholder="Working title" />
        <label className="grid gap-2 text-sm font-semibold text-[#0c2d26]">Residency objective<textarea name="objective" rows={6} placeholder="What do you intend to work on during the residency?" className="border border-[#0c2d26]/20 bg-transparent p-4 font-normal outline-none transition-colors placeholder:text-[#777a75]/65 focus:border-[#0c2d26]" /></label>
        <label className="grid gap-2 text-sm font-semibold text-[#0c2d26]">Expected outcome<textarea name="outcome" rows={5} placeholder="What meaningful progress do you expect to make?" className="border border-[#0c2d26]/20 bg-transparent p-4 font-normal outline-none transition-colors placeholder:text-[#777a75]/65 focus:border-[#0c2d26]" /></label>
      </div>
      <div className="border-t border-[#0c2d26]/20 pt-8">
        <p id="application-note" className="max-w-2xl text-sm leading-7 text-[#5e625d]">This application is a design preview. Information entered here remains in your browser and is not submitted or stored. Applications will open after the approved submission service, dates and requirements are confirmed.</p>
        <button type="submit" disabled className="button-link mt-7 cursor-not-allowed opacity-55" aria-disabled="true">Applications opening soon</button>
      </div>
    </form>
  );
}
