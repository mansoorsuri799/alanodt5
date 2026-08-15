import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROUTES, SITE_NAME, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Withdraw from Alano DT 5 to EasyPaisa or JazzCash',
  description: 'Cash out Alano DT 5 with a withdraw password, bound wallet, and EasyPaisa or JazzCash. What to check before you tap confirm.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.withdraw}` },
  openGraph: {
    title: 'Withdraw from Alano DT 5 to EasyPaisa or JazzCash',
    description: 'Wallet cash-out steps for Alano DT 5 in Pakistan.',
    url: `${SITE_ORIGIN}${ROUTES.withdraw}`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_ORIGIN}/alano-dt-5-withdraw-money.webp`, width: 1200, height: 628, alt: 'Alano DT 5 withdraw screen' }],
  },
};

export default function WithdrawPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Withdraw', href: ROUTES.withdraw }]} />
      <h1 className="text-4xl font-bold mb-4 text-white">Move Alano DT 5 balance to a wallet you own</h1>
      <p className="text-gray-300 mb-6">
        Withdrawals need a bound phone, a withdraw password, and a JazzCash or EasyPaisa number. Processing time varies; this site does not promise 5-minute payouts.
        Unsettled bets or bonus lock conditions can block a request even when the lobby shows gold.
      </p>
      <Image src="/alano-dt-5-withdraw-money.webp" alt="Alano DT 5 withdrawal form with amount and wallet fields" width={1200} height={628} className="rounded-2xl w-full h-auto mb-8" />
      <h2 className="text-2xl font-bold text-accent mb-4">Cash-out taps</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-3 mb-8">
        <li>Open Withdraw from the lobby.</li>
        <li>Read the available balance in PKR, not bonus-locked gold.</li>
        <li>Enter an amount the screen allows.</li>
        <li>Select EasyPaisa or JazzCash and type your own account number.</li>
        <li>Enter the withdraw password (not the login password) and submit.</li>
      </ol>
      <h2 className="text-2xl font-bold text-accent mb-4">When a request stays pending</h2>
      <p className="text-gray-300 mb-4">
        Wrong wallet digits and missing bind are the usual causes. Use in-app chat with screenshots.
        Never share the withdraw password with an “agent”. If you still need to add coins, use the <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit page</Link>.
      </p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
