import { Metadata } from 'next';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaButton from '@/components/CtaButton';
import { ROUTES, SITE_ORIGIN } from '@/lib/site';

const slug = 'alano-dt-5-gameplay-tips';

export const metadata: Metadata = {
  title: 'Alano DT 5 habits that reduce avoidable losses',
  description: 'Stake sizing, Dragon vs Tiger versus slots, bonus lock awareness, and stop rules for Alano DT 5 in Pakistan.',
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <BlogPostSchema
        title="Alano DT 5 habits that reduce avoidable losses"
        description={metadata.description as string}
        slug={slug}
        datePublished="2026-08-15"
      />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: ROUTES.blog }, { name: 'Tips', href: ROUTES.tipsBlog }]} />
      <h1 className="text-4xl font-bold text-white mb-6">Alano DT 5 habits that reduce avoidable losses</h1>
      <p className="text-gray-300 mb-4">These are risk controls, not a winning method. YouTube “DT 5 winning method” clips oversell variance. House-edge games stay negative over a long sample.</p>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Stake relative to pack size</h2>
      <p className="text-gray-300 mb-4">If you bought a Rs 100 pack, a Rs 50 Dragon vs Tiger click is not a warm-up. Use the smallest chip until you understand the round speed. 7 Up 7 Down and colour bets resolve fast; that speed is how balances vanish.</p>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Pick one table type per session</h2>
      <p className="text-gray-300 mb-4">Slots (Fortune Gems, Sweet Bonanza) and card rounds (Dragon vs Tiger Fight) feel different. Switching after a loss is chase behaviour. Read paytables inside each title instead of copying RTP numbers from unrelated sites.</p>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Do not treat bonuses as bankroll</h2>
      <p className="text-gray-300 mb-4">Check-in gold and spin prizes often carry wagering or lock flags. Trying to <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link> immediately after a free spin is a common support ticket. Details live on the <Link href={ROUTES.bonusBlog} className="text-accent hover:underline">bonus article</Link>.</p>
      <h2 className="text-2xl font-bold text-accent mt-10 mb-4">Stop rules</h2>
      <p className="text-gray-300 mb-8">Decide a daily PKR cap before you open Buy Coins. If you hit it, close the app. Safety context: <Link href={ROUTES.safetyBlog} className="text-accent hover:underline">is it safe</Link>. Install only from the <Link href={ROUTES.download} className="text-accent hover:underline">APK page</Link>.</p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
