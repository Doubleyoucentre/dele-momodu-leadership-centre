import { HomePage } from '@/components/sections/HomePage';
import { contact } from '@/lib/contact';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Dele Momodu Leadership Centre',
    alternateName: 'DMLC',
    email: contact.email,
    telephone: contact.phone,
    description: 'An intellectual and residential facility for scholarship, research, leadership and ideas.',
    address: { '@type': 'PostalAddress', addressLocality: 'Ibadan', addressRegion: 'Oyo State', addressCountry: 'NG' },
  };
  return <><HomePage /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></>;
}
