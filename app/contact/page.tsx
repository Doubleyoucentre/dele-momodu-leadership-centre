import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'Contact', description: 'Location and confirmed contact information for DMLC in Ibadan.' };
export default function Page() { return <PageScaffold data={pages.contact} />; }
