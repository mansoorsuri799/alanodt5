import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROUTES, SITE_HOST, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Disclaimer',
  description: 'Entertainment-only disclaimer for Alano DT 5 coverage on alanodt5game.com.pk. No income guarantees, no legal advice.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.disclaimer}` },
};

export default function DisclaimerPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Disclaimer', href: ROUTES.disclaimer }]} />
      <h1 className="text-4xl font-bold mb-6 text-white">Disclaimer</h1>
      <p className="text-gray-400 mb-6">Last updated: 15 August 2026 · {SITE_HOST}</p>
      <div className="text-gray-300 space-y-4 leading-relaxed">
        <p>Alano DT 5 involves optional real-money staking. You can lose every rupee you deposit. Nothing on this site is a promise of profit, VIP “salary”, or legal clearance under Pakistani gambling statutes.</p>
        <p>We are 18+ only. If play harms your finances or mental health, stop and seek local help. This guide is English-only; we do not claim an Urdu edition.</p>
        <p>APKs installed outside Play Store can be modified. Compare the publisher URL before you install. Screenshots describe typical UI and may lag behind a live patch.</p>
        <p>External chat widgets and wallet apps are third parties. Their outages are not our liability.</p>
        <p>Return <Link href="/" className="text-accent hover:underline">home</Link> or read the <Link href={ROUTES.privacy} className="text-accent hover:underline">privacy policy</Link>.</p>
      </div>
    </article>
  );
}
