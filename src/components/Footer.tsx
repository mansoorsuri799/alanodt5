import Link from 'next/link';
import CtaButton from '@/components/CtaButton';
import { ROUTES, SITE_HOST, SITE_NAME } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-8 pb-2 px-4 md:px-8 border-t border-gray-800 relative z-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-accent mb-4">{SITE_NAME}</h2>
            <p className="text-sm text-gray-300 mb-4">
              Independent Pakistani guide for the Alano DT 5 Android APK: slots, Dragon vs Tiger, JazzCash and EasyPaisa cash-out, and honest install steps.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.home} className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href={ROUTES.download} className="text-gray-300 hover:text-accent transition-colors">Download APK</Link></li>
              <li><Link href={ROUTES.pc} className="text-gray-300 hover:text-accent transition-colors">PC Version</Link></li>
              <li><Link href={ROUTES.blog} className="text-gray-300 hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href={ROUTES.about} className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href={ROUTES.contact} className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Resources</h2>
            <ul className="space-y-2 text-sm">
              <li><Link href={ROUTES.deposit} className="text-gray-300 hover:text-accent transition-colors">JazzCash deposit steps</Link></li>
              <li><Link href={ROUTES.withdraw} className="text-gray-300 hover:text-accent transition-colors">EasyPaisa cash-out</Link></li>
              <li><Link href={ROUTES.loginBlog} className="text-gray-300 hover:text-accent transition-colors">Phone bind and login</Link></li>
              <li><Link href={ROUTES.tipsBlog} className="text-gray-300 hover:text-accent transition-colors">Gameplay tips</Link></li>
              <li><Link href={ROUTES.privacy} className="text-gray-300 hover:text-accent transition-colors">Privacy Policy</Link></li>
              <li><Link href={ROUTES.disclaimer} className="text-gray-300 hover:text-accent transition-colors">Disclaimer</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4 text-accent">Download App</h2>
            <p className="text-sm text-gray-300 mb-4">
              Get Alano DT 5 v6.5 for Android. The button opens the publisher landing with our referral code disclosed.
            </p>
            <CtaButton ariaLabel="Download Alano DT 5 APK for Android">DOWNLOAD NOW</CtaButton>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-4 pb-3 text-center text-sm text-gray-400">
          <p className="mb-0">© 2026 {SITE_NAME}. Entertainment only — you can lose money. | <Link href="/" className="hover:text-accent">{SITE_HOST}</Link></p>
        </div>
      </div>
    </footer>
  );
}
