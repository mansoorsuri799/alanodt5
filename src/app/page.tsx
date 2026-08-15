import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";
import CtaButton from "@/components/CtaButton";
import {
  ANDROID_MIN,
  APP_SIZE,
  APP_VERSION,
  DOWNLOAD_URL,
  LASTMOD,
  LIVE_CHAT_URL,
  LOGO_PATH,
  RATING_COUNT,
  RATING_COUNT_DISPLAY,
  RATING_VALUE,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
  imageObjectLicensing,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Alano DT 5 APK Pakistan | Official Android Download",
  description:
    "Alano DT 5 v6.5 for Android in Pakistan: slots, Dragon vs Tiger, 7 Up 7 Down, JazzCash deposits, EasyPaisa cash-out, VIP levels, and a disclosed APK link.",
};

const faqs = [
  {
    q: "How do I download Alano DT 5 APK in Pakistan?",
    a: "Use the Download APK page on alanodt5game.com.pk. The button opens the publisher landing at alanorunny.com with referral code 14544841. Enable unknown sources, then install the 56.82 MB file on Android 5.0 or newer.",
  },
  {
    q: "Is Alano DT 5 only for Android?",
    a: "Yes. There is no iOS build. PC play needs an Android emulator. See the PC guide on this site.",
  },
  {
    q: "Which wallets work for Alano DT 5?",
    a: "In-app coin purchases and cash-out use EasyPaisa and JazzCash. Bind a phone number and set a withdraw password before sending PKR.",
  },
  {
    q: "What bonuses does Alano DT 5 actually list?",
    a: "Typical in-app items include a small phone-bind welcome amount, first purchase extra coins, a 7-day check-in, free spin and turntable, VIP promotion prizes, and referral gifts. Amounts can change inside the live app.",
  },
  {
    q: "Do I need an agent to register?",
    a: "The in-app path is phone bind plus password. Some third-party pages mention agents; this site documents the bind flow so you are not forced into an unofficial middleman.",
  },
  {
    q: "Is Alano DT 5 legal in Pakistan?",
    a: "Real-money games sit in a grey area. This site does not give legal advice. Play only if you are 18+, can afford losses, and understand local rules.",
  },
];

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_ORIGIN}/#website`,
        url: `${SITE_ORIGIN}/`,
        name: SITE_NAME,
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_ORIGIN}/#webpage`,
        url: `${SITE_ORIGIN}/`,
        name: "Alano DT 5 APK Pakistan | Official Android Download",
        isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${SITE_ORIGIN}${LOGO_PATH}`,
          width: 512,
          height: 512,
          ...imageObjectLicensing,
        },
      },
      {
        "@type": "SoftwareApplication",
        name: SITE_NAME,
        operatingSystem: ANDROID_MIN,
        applicationCategory: "GameApplication",
        image: `${SITE_ORIGIN}${LOGO_PATH}`,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: RATING_VALUE,
          bestRating: "5",
          ratingCount: RATING_COUNT,
        },
        offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
        downloadUrl: DOWNLOAD_URL,
        softwareVersion: APP_VERSION,
        fileSize: APP_SIZE,
        description:
          "Alano DT 5 is an Android casino-style APK used in Pakistan for slots, Dragon vs Tiger, and wallet cash-out via JazzCash and EasyPaisa.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "HowTo",
        name: "Install Alano DT 5 on Android",
        step: [
          { "@type": "HowToStep", name: "Open the APK landing", text: "Tap DOWNLOAD NOW on this site." },
          { "@type": "HowToStep", name: "Allow unknown sources", text: "Permit installs from this source in Android settings." },
          { "@type": "HowToStep", name: "Install v6.5", text: "Open the downloaded APK and confirm installation." },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="homepage-schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      <section className="py-8 md:py-16 px-4 md:px-8 max-w-7xl mx-auto" style={{ minHeight: "400px" }}>
        <div className="md:flex md:items-start md:justify-between md:space-x-12 lg:space-x-20">
          <div className="md:w-1/2 space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Alano DT 5</h1>
              <p className="text-3xl md:text-4xl font-bold">
                <span className="text-accent">Slots, Dragon vs Tiger, and PKR wallets</span>{" "}
                <span className="text-white">on one Android APK</span>
              </p>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed">
              This site is the Pakistani handbook for <Link href="/" className="text-accent hover:underline">{SITE_NAME}</Link> version {APP_VERSION}.
              You get lobby names, JazzCash and EasyPaisa steps, and a disclosed download to alanorunny.com — not a silent tracker cloak.
              Real-money play can lose funds; treat it as paid entertainment.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-200 bg-[#0A1029] rounded-xl px-4 py-3 border border-pink-900/40">
              <span className="text-accent font-bold">{RATING_VALUE} ★★★★☆</span>
              <span>({RATING_COUNT_DISPLAY} ratings)</span>
              <span>· Free · Android · Game</span>
            </div>
            <div className="flex justify-center my-8">
              <CtaButton>DOWNLOAD NOW</CtaButton>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Affiliate disclosure: the APK button uses invite code 14544841 on the publisher landing.
            </p>
            <div className="flex flex-row gap-4 justify-center mt-8 mb-4">
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">{RATING_VALUE}</div>
                <div className="text-gray-400 text-sm">Site rating</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">30+</div>
                <div className="text-gray-400 text-sm">Lobby titles</div>
              </div>
              <div className="bg-[#0A1029] p-6 rounded-2xl text-center flex-1 max-w-[180px]">
                <div className="text-white text-2xl font-bold mb-1">56.8MB</div>
                <div className="text-gray-400 text-sm">APK size</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm text-center italic">*Android only · {ANDROID_MIN} · 2 GB RAM recommended</p>
          </div>
          <figure className="mt-8 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <Image
              src={LOGO_PATH}
              alt="Alano DT 5 square app icon with magenta and gold branding"
              title="Alano DT 5 Android APK"
              width={320}
              height={320}
              className="object-contain drop-shadow-2xl w-[260px] h-[260px] md:w-[320px] md:h-[320px]"
              priority
              fetchPriority="high"
              quality={80}
              sizes="(max-width: 768px) 260px, 320px"
            />
          </figure>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="download">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-accent">Alano DT 5 APK details</h2>
        <div className="overflow-hidden rounded-2xl shadow-2xl border border-gray-800">
          <table className="min-w-full divide-y divide-gray-800">
            <tbody className="divide-y divide-gray-800">
              {[
                ["App name", SITE_NAME],
                ["Publisher landing", "alanorunny.com"],
                ["Category", "Casino-style cards, slots, arcade"],
                ["Version", APP_VERSION],
                ["Size", APP_SIZE],
                ["OS", ANDROID_MIN],
                ["Wallets", "JazzCash, EasyPaisa"],
                ["Rating on this site", `${RATING_VALUE} / 5 (${RATING_COUNT_DISPLAY})`],
                ["Updated", LASTMOD],
              ].map(([k, v], i) => (
                <tr key={k} className={i % 2 ? "bg-[#140818]/50" : "bg-[#0a1029]/50"}>
                  <td className="py-4 px-6 font-medium text-white">{k}</td>
                  <td className="py-4 px-6 text-white">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="what-is">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">What Pakistani players actually open in Alano DT 5</h2>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Alano DT 5 is a sideloaded Android lobby, not a Play Store listing. After install you see themed slots (Fortune Gems, Sweet Bonanza, Classic Fruit 777),
          short-round card tables (Dragon vs Tiger Fight, 7 Up 7 Down, Red and Black), and arcade bets (Mines, Crash-style Rocket, Bingo Pig).
          That mix is why searchers compare it with other “DT” brands rather than classic rummy-only apps.
        </p>
        <p className="text-gray-300 mb-4 leading-relaxed">
          Coins are bought in PKR bundles from about Rs 100 up to high-value packs. Extra coin percentages on those packs are shown in the buy screen, not as a hidden “guaranteed income” promise.
          For a full install walkthrough, use the <Link href={ROUTES.download} className="text-accent hover:underline">Alano DT 5 download guide</Link>.
        </p>
        <Image
          src="/alano-dt-5-games.webp"
          alt="Alano DT 5 lobby showing slot and card game tiles"
          width={1200}
          height={628}
          className="rounded-2xl w-full h-auto mt-6"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="features">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Lobby tools that matter more than slogans</h2>
        <div className="space-y-6 text-gray-300 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Phone bind before bonuses</h3>
            <p>Welcome gold is tied to binding a Pakistani number. Until that OTP step is done, spins and cash-out stay locked. We document the taps in the <Link href={ROUTES.loginBlog} className="text-accent hover:underline">account and login article</Link>.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Withdraw password</h3>
            <p>A second password sits on cash-out. That is the main in-app control against a stolen session, not a marketing “bank-grade” claim.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">History and VIP ladder</h3>
            <p>Bet records, recharge logs, and a long VIP track (promoted as 23 levels on the ranked WordPress page) sit in the profile area. Higher levels add weekly and monthly gifts if you keep depositing — that is optional spend, not a salary.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Live help</h3>
            <p>In-app chat and the public desk at <a href={LIVE_CHAT_URL} className="text-accent hover:underline" rel="noopener noreferrer">ssrchat</a> are the practical support paths. Email us at support@alanodt5game.com.pk for this website, not for publisher wallet disputes.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="bonuses">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Bonus numbers this review will not inflate</h2>
        <p className="text-gray-300 mb-4">Figures below match the currently ranked alanodt5.app page so you can verify them in the live APK. They can change without notice.</p>
        <ul className="list-disc pl-6 text-gray-300 space-y-2">
          <li>Phone-bind welcome: about Rs 10</li>
          <li>First coin purchase extra: about Rs 77 on qualifying packs</li>
          <li>Seven-day check-in with a larger last-day gift if the streak holds</li>
          <li>Free spin wheel with cash-style prizes shown in the UI</li>
          <li>Turntable lottery points from the top-left control</li>
          <li>Referral ladders (example: Rs 205 / Rs 400 / Rs 6,200 at 1 / 10 / 50 valid invites)</li>
          <li>Daily first-recharge rebate around 10%</li>
          <li>Telegram join gift around Rs 10; social share tasks around Rs 50</li>
        </ul>
        <p className="text-gray-300 mt-4">
          Full VIP table discussion lives on the <Link href={ROUTES.bonusBlog} className="text-accent hover:underline">bonuses and VIP levels post</Link>.
        </p>
        <Image
          src="/alano-dt-5-daily-mail-bonus.webp"
          alt="Alano DT 5 mailbox bonus screen with daily claim button"
          width={1200}
          height={628}
          className="rounded-2xl w-full h-auto mt-6"
          sizes="(max-width: 1280px) 100vw, 1200px"
        />
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="install">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Sideload Alano DT 5 without Play Store</h2>
        <ol className="list-decimal pl-6 text-gray-300 space-y-3">
          <li>Tap DOWNLOAD NOW. You leave this domain for alanorunny.com with code 14544841.</li>
          <li>Wait for the APK (~{APP_SIZE}).</li>
          <li>Android Settings → allow install from this browser or files app.</li>
          <li>Open the file, accept permissions, finish setup.</li>
          <li>Keep 600 MB free storage and a stable mobile network.</li>
        </ol>
        <p className="text-gray-300 mt-4">Need a bigger screen? Follow <Link href={ROUTES.pc} className="text-accent hover:underline">Alano DT 5 for PC</Link>.</p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="money">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">PKR in and PKR out, in two dedicated guides</h2>
        <p className="text-gray-300 mb-4">
          Deposits start at Buy Coins with EasyPaisa or JazzCash. Cash-out needs a bound wallet, withdraw password, and enough balance after bets.
          We keep those intents on their own URLs so this homepage is not a 4,000-word skyscraper.
        </p>
        <p className="text-gray-300">
          Read <Link href={ROUTES.deposit} className="text-accent hover:underline">how to deposit in Alano DT 5</Link>
          {" "}and{" "}
          <Link href={ROUTES.withdraw} className="text-accent hover:underline">how to withdraw to EasyPaisa</Link>.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <Image src="/alano-dt-5-deposit-money.webp" alt="Alano DT 5 buy coins screen with EasyPaisa and JazzCash" width={800} height={500} className="rounded-2xl w-full h-auto" />
          <Image src="/alano-dt-5-withdraw-money.webp" alt="Alano DT 5 withdraw form with wallet number field" width={800} height={500} className="rounded-2xl w-full h-auto" />
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="safety">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Risks we will not hide</h2>
        <p className="text-gray-300 mb-4">
          Sideloaded APKs can be swapped. Bookmark this site, check the publisher URL, and never type wallet PINs into random WhatsApp “agents”.
          Sessions can be addictive; set a daily PKR cap. Details: <Link href={ROUTES.safetyBlog} className="text-accent hover:underline">is Alano DT 5 safe in Pakistan</Link>
          {" "}and <Link href={ROUTES.tipsBlog} className="text-accent hover:underline">gameplay tips</Link>.
        </p>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto" id="faq">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-accent">Alano DT 5 questions from search</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <details key={f.q} className="bg-[#0A1029] rounded-xl p-5 border border-gray-800">
              <summary className="font-semibold text-white cursor-pointer">{f.q}</summary>
              <p className="text-gray-300 mt-3">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-accent">Install when you understand the product</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Alano DT 5 is a Pakistani-facing Android lobby with local wallets and a dense bonus sheet. Download only if you accept losses and sideload risk.
        </p>
        <CtaButton>DOWNLOAD NOW</CtaButton>
      </section>
    </>
  );
}
