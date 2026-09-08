import Link from 'next/link';
import { Arrow } from './Arrow';

export function ButtonLink({ href, children, variant = 'dark' }: { href: string; children: React.ReactNode; variant?: 'dark' | 'light' | 'ghost' }) {
  const modifier = variant === 'light' ? ' button-link--light' : variant === 'ghost' ? ' button-link--ghost' : '';
  return <Link href={href} className={`button-link${modifier}`}>{children}<Arrow /></Link>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} className="text-link">{children}<Arrow /></Link>;
}
