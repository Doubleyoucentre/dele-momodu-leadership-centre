import { contact } from '@/lib/contact';

export function ContactDetails({ className = '' }: { className?: string }) {
  return (
    <address className={`contact-details not-italic ${className}`}>
      <a href={contact.emailHref}>{contact.email}</a>
      <a href={contact.phoneHref}>{contact.phone}</a>
    </address>
  );
}
