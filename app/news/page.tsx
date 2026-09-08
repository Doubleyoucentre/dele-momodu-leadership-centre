import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'News & Ideas', description: 'News and ideas from the Dele Momodu Leadership Centre.' };
export default function Page() { return <PageScaffold data={pages.news} />; }
