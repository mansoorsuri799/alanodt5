import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROUTES, SITE_NAME, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Deposit in Alano DT 5 with JazzCash or EasyPaisa',
  description: 'Buy coins in Alano DT 5 from Rs 100 packs using JazzCash or EasyPaisa. Bundle extras, OTP tips, and what the buy-coins screen actually shows.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.deposit}` },
  openGraph: {
    title: 'Deposit in Alano DT 5 with JazzCash or EasyPaisa',
    description: 'Step-by-step PKR coin purchase inside Alano DT 5.',
    url: `${SITE_ORIGIN}${ROUTES.deposit}`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_ORIGIN}/alano-dt-5-deposit-money.webp`, width: 1200, height: 628, alt: 'Alano DT 5 deposit screen' }],
  },
};

export default function DepositPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Deposit', href: ROUTES.deposit }]} />
      <h1 className="text-4xl font-bold mb-4 text-white">Buy Alano DT 5 coins with Pakistani wallets</h1>
      <p className="text-gray-300 mb-6">
        Deposits happen inside Buy Coins, not on this website. Packs typically start near Rs 100 and scale to Rs 50,000.
        Small packs often advertise about 1% extra coins. First-purchase extras around Rs 77 appear only if the live event is still on.
      </p>
      <Image src="/alano-dt-5-deposit-money.webp" alt="Alano DT 5 buy coins list with JazzCash and EasyPaisa channels" width={1200} height={628} className="rounded-2xl w-full h-auto mb-8" />
      <h2 className="text-2xl font-bold text-accent mb-4">Steps on the phone</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-3 mb-8">
        <li>Open Alano DT 5 while logged in with a bound number.</li>
        <li>Tap Buy Coins on the lobby.</li>
        <li>Pick a bundle you can afford to lose. This is entertainment spend.</li>
        <li>Choose EasyPaisa or JazzCash, enter the wallet number that you control, and confirm.</li>
        <li>Complete the wallet OTP. Coins credit after the gateway returns success.</li>
      </ol>
      <h2 className="text-2xl font-bold text-accent mb-4">If the payment hangs</h2>
      <p className="text-gray-300 mb-4">
        Do not pay twice. Wait a few minutes, then check recharge history. Screenshot the order ID for live chat.
        Wallet names must match the number you typed. Using a friend’s JazzCash often fails KYC-style checks on the gateway.
      </p>
      <p className="text-gray-300 mb-8">
        Cash-out is a different intent: <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw from Alano DT 5</Link>.
        Need the APK first? <Link href={ROUTES.download} className="text-accent hover:underline">Download Alano DT 5</Link>.
      </p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
