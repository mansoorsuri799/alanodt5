import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { ROUTES, SITE_NAME, SITE_ORIGIN } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Play Alano DT 5 on PC with an Android emulator',
  description: 'Run Alano DT 5 on Windows using BlueStacks or LDPlayer. Keyboard mouse caveats, wallet OTPs still need a phone, and why iOS is out.',
  alternates: { canonical: `${SITE_ORIGIN}${ROUTES.pc}` },
  openGraph: {
    title: 'Play Alano DT 5 on PC with an Android emulator',
    description: 'Emulator setup for Alano DT 5 APK on desktop.',
    url: `${SITE_ORIGIN}${ROUTES.pc}`,
    siteName: SITE_NAME,
    images: [{ url: `${SITE_ORIGIN}/alano-dt-5-pakistan.webp`, width: 1200, height: 628, alt: 'Alano DT 5 on larger screens' }],
  },
};

export default function PcPage() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'PC Version', href: ROUTES.pc }]} />
      <h1 className="text-4xl font-bold mb-4 text-white">Alano DT 5 on a laptop is still an Android app</h1>
      <p className="text-gray-300 mb-6">
        There is no Windows installer. You install the same APK inside an emulator (BlueStacks, LDPlayer, or similar), then bind a real Pakistani number.
        JazzCash and EasyPaisa OTPs still arrive on that phone, so keep it nearby.
      </p>
      <Image src="/alano-dt-5-pakistan.webp" alt="Alano DT 5 promotional art for Pakistani Android players" width={1200} height={628} className="rounded-2xl w-full h-auto mb-8" />
      <h2 className="text-2xl font-bold text-accent mb-4">Emulator path</h2>
      <ol className="list-decimal pl-6 text-gray-300 space-y-3 mb-8">
        <li>Install a current Android emulator with virtualization enabled in BIOS.</li>
        <li>Download the APK from our <Link href={ROUTES.download} className="text-accent hover:underline">download page</Link>.</li>
        <li>Drag the file into the emulator or use its APK installer.</li>
        <li>Assign 2+ GB RAM to the instance so slot reels do not stutter.</li>
        <li>Sign in, bind the phone, then treat mouse clicks as touch.</li>
      </ol>
      <p className="text-gray-300 mb-8">
        Some gateways flag emulator fingerprints. If a deposit fails, finish the payment on a physical Android device.
        Money guides: <Link href={ROUTES.deposit} className="text-accent hover:underline">deposit</Link> and <Link href={ROUTES.withdraw} className="text-accent hover:underline">withdraw</Link>.
      </p>
      <CtaButton>DOWNLOAD NOW</CtaButton>
    </article>
  );
}
