import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'Residencies', description: 'Learn about the one-week resident scholar programme at DMLC.' };
export default function Page() { return <PageScaffold data={pages.residencies} applyCta />; }
