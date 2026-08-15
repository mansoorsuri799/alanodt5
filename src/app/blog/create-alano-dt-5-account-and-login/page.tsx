import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaButton from '@/components/CtaButton';
import { ROUTES, SITE_ORIGIN } from '@/lib/site';

const slug = 'create-alano-dt-5-account-and-login';

export const metadata: Metadata = {
  title: 'Bind a phone number on Alano DT 5',
  description: 'Alano DT 5 login: profile bind, SMS OTP, login password, withdraw password, and why you can skip unofficial agents.',
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <BlogPostSchema
        title="Bind a phone number on Alano DT 5"
        description={metadata.description as string}
        slug={slug}
        datePublished="2026-08-15"
      />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: ROUTES.blog }, { name: 'Login', href: ROUTES.loginBlog }]} />
      <h1 className="text-4xl font-bold text-white mb-6">Bind a phone number on Alano DT 5</h1>
      <p className="text-gray-300 mb-4">You can browse the lobby as a guest. Bonuses, Buy Coins, and cash-out wait until a Pakistani mobile number is bound. That is the account. There is no separate email signup on the current APK flow described by the ranking WordPress guide.</p>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Bind sequence</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-3 mb-6">
        <li>Open the profile or ID area at the top left.</li>
        <li>Choose Bind.</li>
        <li>Enter the number, request the SMS code, type it back.</li>
        <li>Set a login password and confirm.</li>
        <li>Immediately set a different withdraw password in security settings.</li>
      </ol>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Later logins</h2>
      <p className="text-gray-300 mb-4">Use the same number and login password. If SMS fails, wait for the cooldown instead of hammering resend. Dual-SIM users should bind the SIM that actually receives JazzCash OTPs if they plan to <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link>.</p>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Agents</h2>
      <p className="text-gray-300 mb-8">Some blogs list “agent required”. The in-app bind does not. Paying a stranger to register for you hands them the account. After bind, claim the small welcome amount then read <Link href={ROUTES.bonusBlog} className="text-accent hover:underline">bonus rules</Link>.</p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
