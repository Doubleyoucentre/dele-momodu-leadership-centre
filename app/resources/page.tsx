import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'Resources', description: 'Research and reading resources available at DMLC.' };
export default function Page() { return <PageScaffold data={pages.resources} />; }
