import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { APP_SIZE, APP_VERSION, DOWNLOAD_URL, RATING_COUNT, RATING_VALUE, ROUTES, SITE_NAME, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Download Alano DT 5 APK v6.5 for Android',
  description: 'Sideload Alano DT 5 v6.5 (56.82 MB) on Android 5.0+. Unknown-sources steps, publisher URL disclosure, and JazzCash-ready install notes for Pakistan.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.download}` },
  openGraph: {
    title: 'Download Alano DT 5 APK v6.5 for Android',
    description: 'Free Alano DT 5 APK with disclosed alanorunny.com landing and invite code 14544841.',
    url: `${SITE_ORIGIN}${ROUTES.download}`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_ORIGIN}/feature/og-image.webp`, width: 512, height: 512, alt: 'Download Alano DT 5' }],
  },
};

export default function DownloadPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: SITE_NAME,
        operatingSystem: 'Android',
        applicationCategory: 'GameApplication',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: RATING_VALUE, bestRating: '5', ratingCount: RATING_COUNT },
        downloadUrl: DOWNLOAD_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
      },
      {
        '@type': 'HowTo',
        name: 'Download and install Alano DT 5',
        step: [
          { '@type': 'HowToStep', name: 'Open publisher landing', text: 'Use DOWNLOAD NOW on this page.' },
          { '@type': 'HowToStep', name: 'Allow unknown apps', text: 'Enable the browser or Files as an install source.' },
          { '@type': 'HowToStep', name: 'Install APK', text: 'Open the 56.82 MB file and confirm.' },
        ],
      },
    ],
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Download', href: ROUTES.download }]} />
      <h1 className="text-4xl font-bold mb-4 text-white">Sideload Alano DT 5 v6.5 without the Play Store</h1>
      <p className="text-gray-300 mb-6">
        Google Play does not host this lobby. The APK is {APP_SIZE}, targets {APP_VERSION}, and needs Android 5.0+, about 2 GB RAM, and 600 MB free space.
        The button below is an affiliate landing on alanorunny.com with code 14544841 — same destination the ranked WordPress site uses.
      </p>
      <div className="flex justify-center mb-4"><CtaButton>DOWNLOAD NOW</CtaButton></div>
      <p className="text-xs text-gray-500 text-center mb-8">4.5 ★★★★☆ (18,420) · Free · Android · Game</p>
      <Image src="/alano-dt-5.webp" alt="Alano DT 5 APK icon for Android download" width={240} height={240} className="mx-auto mb-10" />

      <h2 className="text-2xl font-bold text-accent mb-4">Install checklist</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-3 mb-8">
        <li>Tap DOWNLOAD NOW and wait until the transfer finishes. Partial files fail to parse.</li>
        <li>If Android blocks the install, open Settings → Apps → special access → install unknown apps, then allow your browser.</li>
        <li>Open Downloads, tap the APK, accept the requested permissions, and wait for “App installed”.</li>
        <li>Launch once on Wi-Fi so the first asset pack can cache.</li>
        <li>Bind a phone number before you expect welcome gold. See the <Link href={ROUTES.loginBlog} className="text-accent hover:underline">login walkthrough</Link>.</li>
      </ol>

      <h2 className="text-2xl font-bold text-accent mb-4">What to do if the APK will not open</h2>
      <p className="text-gray-300 mb-4">
        Delete older Alano DT builds first. Mixed versions often refuse to update. Storage under 600 MB free also fails silently.
        Emulator users should follow <Link href={ROUTES.pc} className="text-accent hover:underline">the PC version page</Link> instead of forcing a phone-only ABI.
      </p>
      <h2 className="text-2xl font-bold text-accent mb-4">After install</h2>
      <p className="text-gray-300 mb-8">
        Add coins only through the in-app Buy Coins sheet (<Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>).
        Do not send PKR to personal JazzCash numbers sent on WhatsApp.
      </p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
