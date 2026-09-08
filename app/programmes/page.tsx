import type { Metadata } from 'next';
import { PageScaffold } from '@/components/PageScaffold';
import { pages } from '@/lib/page-data';
export const metadata: Metadata = { title: 'Programmes', description: 'Resident scholarship, research and public discourse programmes at DMLC.' };
export default function Page() { return <PageScaffold data={pages.programmes} applyCta />; }
