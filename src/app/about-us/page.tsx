import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import { LOGO_PATH, ROUTES, SITE_HOST, SITE_NAME, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About alanodt5game.com.pk',
  description: 'Who publishes this Alano DT 5 APK guide, how it differs from the WordPress ranking page, and how to reach the editorial desk.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.about}` },
  openGraph: { title: 'About alanodt5game.com.pk', description: 'Editorial site for Alano DT 5 in Pakistan.', url: `${SITE_ORIGIN}${ROUTES.about}`, siteName: SITE_NAME, images: [{ url: `${SITE_ORIGIN}${LOGO_PATH}`, width: 512, height: 512, alt: SITE_NAME }] },
};

export default function AboutPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'About Us', href: ROUTES.about }]} />
      <h1 className="text-4xl font-bold mb-6 text-white">About this Alano DT 5 handbook</h1>
      <Image src={LOGO_PATH} alt="Alano DT 5 brand icon used by alanodt5game.com.pk" width={160} height={160} className="mb-6" />
      <p className="text-gray-300 mb-4">
        {SITE_HOST} is an independent English-language guide for Pakistani Android users who search for Alano DT 5.
        We are not the game studio. The APK publisher landing is alanorunny.com. Our download button discloses invite code 14544841.
      </p>
      <p className="text-gray-300 mb-4">
        A WordPress property at alanodt5.app already ranks for the same keyword with a long single-page article. This Next.js site splits download, deposit, withdraw, and PC into separate URLs,
        writes original headings, and keeps Privacy, Disclaimer, About, and Contact as custom pages — not generator boilerplate.
      </p>
      <p className="text-gray-300 mb-4">
        Facts such as version 6.5, 56.82 MB, JazzCash/EasyPaisa, and listed bonus amounts were checked against that WordPress page and competitor APK blogs in August 2026.
        In-app numbers can still change. We do not claim guaranteed income.
      </p>
      <p className="text-gray-300">
        Questions about this website: <Link href={ROUTES.contact} className="text-accent hover:underline">Contact</Link>.
        App wallet issues: use in-app chat.
      </p>
    </article>
  );
}
