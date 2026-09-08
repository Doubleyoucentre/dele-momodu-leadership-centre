import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'Library & Archive', description: 'The DMLC library, publications and journalism archive.' };
export default function Page() { return <PageScaffold data={pages.library} />; }
