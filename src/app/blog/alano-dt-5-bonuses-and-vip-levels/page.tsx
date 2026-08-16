import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import BlogPostSchema from '@/components/BlogPostSchema';
import Breadcrumbs from '@/components/Breadcrumbs';
import CtaButton from '@/components/CtaButton';
import { ROUTES, SITE_ORIGIN } from '@/lib/site';

const slug = 'alano-dt-5-bonuses-and-vip-levels';

export const metadata: Metadata = {
  title: 'Alano DT 5 bonuses and VIP levels explained',
  description: 'Welcome gold, first-purchase extra, 7-day check-in, referrals, free spin, turntable, and a 23-level VIP ladder — figures to verify in the live APK.',
  alternates: { canonical: `${SITE_ORIGIN}/blog/${slug}` },
};

export default function Page() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <BlogPostSchema
        title="Alano DT 5 bonuses and VIP levels explained"
        description={metadata.description as string}
        slug={slug}
        datePublished="2026-08-15"
      />
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: ROUTES.blog }, { name: 'Bonuses', href: ROUTES.bonusBlog }]} />
      <h1 className="text-4xl font-bold text-white mb-6">Alano DT 5 bonuses and VIP levels explained</h1>
      <p className="text-gray-300 mb-4">Bonus copy on competing APK sites is either stuffed or vague. Below are the amounts published on the ranking alanodt5.app page in 2026. Open the live Events and VIP screens; if they differ, the app wins.</p>
      <Image src="/alano-dt-5-mail-bonus.webp" alt="Alano DT 5 mail inbox listing claimable bonus items" width={1200} height={628} className="rounded-2xl w-full h-auto my-6" />
      <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Entry gifts</h2>
      <p className="text-gray-300 mb-4">Phone bind about Rs 10. First qualifying coin purchase about Rs 77 extra. Daily mailbox items appear as mail — screenshot <em>mail bonus</em> screens so support can see claim errors.</p>
      <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Repeat loops</h2>
      <p className="text-gray-300 mb-4">Seven-day check-in needs an unbroken streak. Free spin and turntable are separate widgets. Sunday pack tasks may add gold when you buy a high pack — that is extra spend, not free money.</p>
      <h2 className="text-2xl font-bold text-accent mt-8 mb-4">Referrals and VIP</h2>
      <p className="text-gray-300 mb-4">Example invite ladders: Rs 205 / 400 / 6,200 at 1 / 10 / 50 valid users, plus smaller bind gifts. VIP is described as 23 levels with rising weekly and monthly prizes (level 1 examples around 20 / 10 / 20 plus a 2% sign-in buff; top level prizes are large and assume heavy recharge). Chasing VIP is how bankrolls die.</p>
      <p className="text-gray-300 mb-8">How you fund packs is on the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit guide</Link>, not duplicated here. Cash-out: <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw page</Link>.</p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
