import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'Events', description: 'Lectures, discussions and programmes at DMLC.' };
export default function Page() { return <PageScaffold data={pages.events} />; }
