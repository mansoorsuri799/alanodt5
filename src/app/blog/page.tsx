import Link from 'next/link';
import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROUTES, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Alano DT 5 blog: safety, login, bonuses, tips',
  description: 'Four original Alano DT 5 articles: Pakistan safety, phone bind, VIP bonuses, and table selection. No duplicate deposit or withdraw posts.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.blog}` },
};

const posts = [
  { href: ROUTES.safetyBlog, title: 'Is Alano DT 5 safe to sideload in Pakistan?', excerpt: 'APK risk, wallet passwords, legal grey area, and how this site differs from thin APK blogs.', time: '9 min' },
  { href: ROUTES.loginBlog, title: 'Bind a phone and log in to Alano DT 5', excerpt: 'OTP bind, withdraw password, and why unofficial agents are optional.', time: '7 min' },
  { href: ROUTES.bonusBlog, title: 'Alano DT 5 bonuses and the 23-level VIP track', excerpt: 'Welcome gold, check-in, referrals, and VIP prizes — with amounts you can verify in-app.', time: '8 min' },
  { href: ROUTES.tipsBlog, title: 'Alano DT 5 gameplay habits that cut avoidable losses', excerpt: 'Stake size, RTP-style selection, and when to walk away.', time: '7 min' },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: ROUTES.blog }]} />
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-accent">Alano DT 5 notes for Pakistani players</h1>
      <p className="text-gray-300 mb-8">Supporting articles only. Deposit and withdraw stay on dedicated guides so we do not cannibalise those queries.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((p, i) => (
          <div key={p.href} className={`bg-[#0A1029] px-8 py-8 rounded-lg border-2 ${i === 0 ? 'border-accent' : 'border-gray-700'}`}>
            {i === 0 && <div className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full mb-3">FEATURED</div>}
            <h2 className="text-2xl font-bold mb-4 text-white">{p.title}</h2>
            <p className="text-gray-300 mb-4">{p.excerpt}</p>
            <p className="text-sm text-gray-400 mb-4">August 2026 · {p.time}</p>
            <Link href={p.href} className="text-accent hover:underline font-semibold">Read article →</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
