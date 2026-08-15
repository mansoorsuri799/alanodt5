import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LIVE_CHAT_URL, ROUTES, SITE_NAME, SITE_ORIGIN, SUPPORT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact Alano DT 5 guide support',
  description: 'Email, live chat, and form for alanodt5game.com.pk. Site content questions versus in-app wallet help.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.contact}` },
  openGraph: { title: 'Contact Alano DT 5 guide support', description: 'Reach the editorial desk or the in-app chat.', url: `${SITE_ORIGIN}${ROUTES.contact}`, siteName: SITE_NAME, images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 512, height: 512, alt: SITE_NAME }] },
};

export default function ContactPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Contact Us', href: ROUTES.contact }]} />
      <h1 className="text-4xl font-bold mb-6 text-white">Talk to the site desk or the game desk</h1>
      <p className="text-gray-300 mb-4">
        Use the form or {SUPPORT_EMAIL} for broken pages, image credits, or privacy requests on this domain.
        For deposits, APK crashes, or VIP points, open live chat inside the app or the publisher desk:
      </p>
      <p className="mb-8">
        <a href={LIVE_CHAT_URL} className="text-accent hover:underline" rel="noopener noreferrer">Open live chat</a>
        {' · '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-accent hover:underline">{SUPPORT_EMAIL}</a>
      </p>
      <ContactForm />
      <div className="mt-10 text-center">
        <CtaButton href={`mailto:${SUPPORT_EMAIL}`} icon="mail" ariaLabel="Email Alano DT 5 site support">Email us</CtaButton>
      </div>
      <p className="text-gray-400 mt-6 text-sm">
        Also see <Link href={ROUTES.privacy} className="text-accent hover:underline">Privacy</Link> and <Link href={ROUTES.disclaimer} className="text-accent hover:underline">Disclaimer</Link>.
      </p>
    </article>
  );
}
