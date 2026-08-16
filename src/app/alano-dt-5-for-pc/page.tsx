import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { imageObjectLicensing } from '@/lib/schemaImageLicensing';
import CtaButton from '@/components/CtaButton';

export const metadata: Metadata = {
  title: 'Alano DT 5 for PC Download Latest Version Free 2026',
  description: 'Download Alano DT 5 for PC using Android Emulator. Play Teen Patti, Rummy, Dragon Tiger on bigger screen. Better performance and smooth gameplay on Windows.',
  keywords: [
    'Alano DT 5 for PC',
    'Alano DT 5 PC download',
    'Alano DT 5 Windows',
    'Teen Patti PC',
    'Card games for PC',
    'BlueStacks Alano DT 5',
    'Android Emulator card games'
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://alanodt5game.com.pk/alano-dt-5-for-pc",
  },
  openGraph: {
    title: 'Alano DT 5 for PC Download Latest Version Free 2026',
    description: 'Download Alano DT 5 for PC using Android Emulator. Play on bigger screen with better performance.',
    url: "https://alanodt5game.com.pk/alano-dt-5-for-pc",
    siteName: "Alano DT 5",
    locale: "en_US",
    type: "website",
  },
};

export default function AlanoDt5ForPCPage() {
  // Schema.org structured data for PC version page
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "headline": "Alano DT 5 for PC Download Latest Version Free 2026",
    "description": "Complete guide to download and play Alano DT 5 on PC using Android emulator. Learn about system requirements, best emulators, and features.",
    "image": "https://alanodt5game.com.pk/alano-dt-5.webp",
    "author": {
      "@type": "Organization",
      "name": "Alano DT 5",
      "url": "https://alanodt5game.com.pk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Alano DT 5",
      "logo": {
        "@type": "ImageObject",
        "url": "https://alanodt5game.com.pk/alano-dt-5.webp",
        ...imageObjectLicensing,
        "creditText": "Alano DT 5 logo"
      }
    },
    "datePublished": "2026-01-03",
    "dateModified": "2026-01-03",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://alanodt5game.com.pk/alano-dt-5-for-pc"
    },
    "about": {
      "@type": "SoftwareApplication",
      "name": "Alano DT 5",
      "operatingSystem": "Windows 7 or higher",
      "applicationCategory": "GameApplication"
    },
    "articleSection": "Gaming",
    "keywords": "Alano DT 5 for PC, Alano DT 5 PC download, BlueStacks, Android Emulator, Teen Patti PC",
    "inLanguage": "en-US"
  };

  return (
    <article>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://alanodt5game.com.pk" },
              { "@type": "ListItem", "position": 2, "name": "Alano DT 5 for PC", "item": "https://alanodt5game.com.pk/alano-dt-5-for-pc" }
            ]
          })
        }}
      />
      
      {/* Hero Section */}
      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-[#FFA500]">Alano DT 5 for PC</span>
            <br />
            <span className="text-white">Download Latest Version</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
            Free 2026
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
            The <Link href="/" className="text-accent hover:underline font-semibold">Alano DT 5</Link> app is a popular platform where you can enjoy playing card games anytime. <a href="https://alanorunny.com/?code=14544841" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-semibold">Download Alano DT 5</a> to get started on mobile, or follow this guide to play on PC. The games offer a wide range of games like Classic Teen Patti, Andar Bahar, Dragon Tiger, Rummy, poker, and other mini games you can play to earn real cash. The game also provides daily bonuses to boost your balance.
          </p>
        </div>

        {/* Logo Display */}
        <div className="flex justify-center mb-12">
          <Image
            src="/alano-dt-5.webp"
            alt="Alano DT 5 for PC – Play on Windows with Android Emulator"
            title="Alano DT 5 for PC – Download & Play on Windows"
            width={320}
            height={320}
            className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
            priority={true}
            sizes="(max-width: 768px) 260px, 320px"
          />
        </div>
      </section>

      {/* Download Info Table */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#FFA500] text-center">Download Info Table</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800 max-w-3xl mx-auto">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-800">
              <tbody className="divide-y divide-gray-800">
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">App Name</td>
                  <td className="py-4 px-6 text-left text-white">Alano DT 5</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Category</td>
                  <td className="py-4 px-6 text-left text-white">Cards, Game</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Size</td>
                  <td className="py-4 px-6 text-left text-white">56.82 MB</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Latest Version</td>
                  <td className="py-4 px-6 text-left text-white">v6.5</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Update</td>
                  <td className="py-4 px-6 text-left text-white">Today</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Downloads</td>
                  <td className="py-4 px-6 text-left text-white">600k+</td>
                </tr>
                <tr className="bg-[#0a1029]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Language</td>
                  <td className="py-4 px-6 text-left text-white">English</td>
                </tr>
                <tr className="bg-[#06091F]/50">
                  <td className="py-4 px-6 text-left font-medium text-white">Price</td>
                  <td className="py-4 px-6 text-left text-white">Free (0$)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What is Alano DT 5 Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">What is Alano DT 5?</h2>
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              The Alano DT 5 app is available as an APK and widely used on Android devices. You can download the app on your PC for better features. This platform aims to make the experience more engaging so you never get bored. The official app is not available on PC, so you can use an Android Emulator to run the app on Windows and enjoy the game on a bigger screen.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Key Features of using Alano DT 5 on PC</h2>
          <p className="text-gray-300 mb-8">Using Alano DT 5 on PC offers several advantages over mobile devices. The following are the key features:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#FFA500]">
              <h3 className="text-xl font-bold text-[#FFA500] mb-3">🖥️ Large Screen</h3>
              <p className="text-gray-300">Playing Alano DT 5 games on a larger screen gives you a better, easier-to-view experience.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#4ade80]">
              <h3 className="text-xl font-bold text-[#4ade80] mb-3">⚡ Better Performance</h3>
              <p className="text-gray-300">PCs offer better processing power, reducing crashes.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#60a5fa]">
              <h3 className="text-xl font-bold text-[#60a5fa] mb-3">🎮 Smooth Gameplay</h3>
              <p className="text-gray-300">More precise and comfortable gameplay with a mouse and keyboard compared to mobile devices.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg border-l-4 border-[#f97316]">
              <h3 className="text-xl font-bold text-[#f97316] mb-3">🔄 Multitasking Support</h3>
              <p className="text-gray-300">On PC, you can play games while running other apps. So, Alano DT 5 on PC offers multitasking support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Instructions */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">How to Download the latest version of Alano DT 5 on PC?</h2>
          <p className="text-gray-300 mb-6">Here is the step-by-step process you can follow to download Alano DT 5 on PC:</p>
          
          <div className="space-y-4">
            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#FFA500]">
              <h3 className="text-lg font-bold text-white mb-2">Step 1:</h3>
              <p className="text-gray-300">First, find the official website of Alano DT 5, like <Link href="/" className="text-[#0ea5e9] hover:underline">www.alanodt5game.com.pk</Link>.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#4ade80]">
              <h3 className="text-lg font-bold text-white mb-2">Step 2:</h3>
              <p className="text-gray-300">Install an Android Emulator on your device.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#60a5fa]">
              <h3 className="text-lg font-bold text-white mb-2">Step 3:</h3>
              <p className="text-gray-300">Download the latest version of Alano DT 5.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#a855f7]">
              <h3 className="text-lg font-bold text-white mb-2">Step 4:</h3>
              <p className="text-gray-300">Open the Emulator and locate the install APK option.</p>
            </div>

            <div className="bg-[#0A1029] rounded-lg p-6 border-l-4 border-[#f97316]">
              <h3 className="text-lg font-bold text-white mb-2">Step 5:</h3>
              <p className="text-gray-300">Once installed, register or log in to the app and start playing.</p>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-10">
            <CtaButton>DOWNLOAD NOW</CtaButton>
          </div>
        </div>
      </section>

      {/* Top Emulators Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Top Emulators to Run Alano DT 5 on PC</h2>
          <p className="text-gray-300 mb-8">You can use different emulators to run or install Alano DT 5 on PC:</p>
          
          <div className="space-y-6">
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">💎 BlueStacks Emulator</h3>
              <p className="text-gray-300">BlueStacks is the most popular emulator, giving you high performance and a beginner-friendly interface.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">⚡ LD Player</h3>
              <p className="text-gray-300">Lightweight and fast. Best for low-end devices.</p>
            </div>

            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-3">🎯 Nox Player</h3>
              <p className="text-gray-300">Easy installation and good compatibility with card games.</p>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">System Requirements to run Alano DT 5 on PC</h2>
          <p className="text-gray-300 mb-8">For running Alano DT 5 smoothly on PC using an Android emulator, here are the device requirements you need:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Minimum Requirements */}
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#FFA500] mb-4">Minimum Requirements:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>Operating System:</strong> Windows 7 or higher</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>Processor:</strong> Intel, AMD Dual Core</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>RAM:</strong> at least 4 GB RAM required</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#FFA500] mr-2">•</span>
                  <span><strong>Storage:</strong> 5GB free space</span>
                </li>
              </ul>
            </div>

            {/* Recommended Requirements */}
            <div className="bg-[#0A1029] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#4ade80] mb-4">Recommended Requirements:</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>Operating System:</strong> Windows 10 or 11</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>Processor:</strong> Core i5 or higher</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>RAM:</strong> 8GB RAM for smooth gameplay</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#4ade80] mr-2">•</span>
                  <span><strong>Storage:</strong> SSD storage for best performance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Pros and Cons of Using Alano DT 5 PC</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#4ade80]">Pros:</h3>
              <div className="bg-[#0A1029] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>Gives better UI on a large screen</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>No battery limitations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>You can multitask</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4ade80] mr-2">✓</span>
                    <span>Ideal for longer gaming sessions</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 text-[#f87171]">Cons:</h3>
              <div className="bg-[#0A1029] p-6 rounded-lg">
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-[#f87171] mr-2">✗</span>
                    <span>Requires Emulator installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#f87171] mr-2">✗</span>
                    <span>Security risk if downloaded from unknown sources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6 text-[#FFA500]">Conclusion</h2>
          <p className="text-gray-300 leading-relaxed">
            If you want better performance and a high-quality user interface, you can use Alano DT 5 on PC. Emulator setup can be confusing for beginners, but once installed, you can enjoy a better experience. Using the Alano DT 5 apk on PC gives you a larger screen and smooth control over gameplay with fewer interruptions.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-secondary rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-8 text-[#FFA500]">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Is an emulator safe to use on a PC?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                Yes, Emulators are generally safe if you download them from official websites. Make sure to download BlueStacks, LD Player, or Nox Player from their official sources to avoid security risks.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Why is the APK not installed on my device?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                If the APK is not installing, make sure your emulator is properly configured and has enough storage space. Also, ensure you have downloaded the latest version of Alano DT 5 APK from the official source and that your emulator supports Android 5.0 or higher.
              </div>
            </details>

            <details className="group bg-[#0a1029]/50 rounded-xl">
              <summary className="flex items-center justify-between p-4 cursor-pointer text-white font-medium">
                Which emulator is best for Alano DT 5?
                <span className="transition group-open:rotate-180">
                  <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="p-4 pt-0 text-gray-300">
                BlueStacks is the most recommended emulator for Alano DT 5 due to its high performance, user-friendly interface, and excellent compatibility. However, if you have a low-end PC, LD Player is a great lightweight alternative that still offers smooth gameplay.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#0ea5e9] to-[#6366f1] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Play on PC?
          </h2>
          <p className="text-xl text-white mb-8 opacity-90">
            Download Alano DT 5 and install it using your favorite emulator!
          </p>
          <CtaButton>DOWNLOAD FOR PC</CtaButton>
        </div>
      </section>

      {/* Back to Home */}
      <section className="pt-6 pb-4 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <Link href="/" className="text-[#0ea5e9] hover:text-[#6366f1] font-medium transition-colors">
          ← Back to Home
        </Link>
      </section>
    </article>
  );
}

