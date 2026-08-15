import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DeferredStyles from "@/components/DeferredStyles";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import {
  LOGO_PATH,
  RATING_COUNT,
  RATING_VALUE,
  SITE_NAME,
  SITE_ORIGIN,
} from "@/lib/site";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#140818",
  viewportFit: "cover",
  interactiveWidget: "resizes-visual",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: "Alano DT 5 APK Pakistan | Official Android Download",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Install Alano DT 5 v6.5 for Android in Pakistan. Slots, Dragon vs Tiger, JazzCash and EasyPaisa. Free APK, 56.82 MB, honest deposit and cash-out notes.",
  keywords: [
    "Alano DT 5",
    "alano dt 5 apk",
    "alano dt 5 download",
    "alano dt 5 pakistan",
    "alanodt5",
  ],
  authors: [{ name: `${SITE_NAME} Editorial` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "256x256" },
      { url: LOGO_PATH, type: "image/webp", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
    shortcut: [{ url: "/favicon.ico", type: "image/x-icon" }],
  },
  alternates: { canonical: SITE_ORIGIN },
  openGraph: {
    title: "Alano DT 5 APK Pakistan | Official Android Download",
    description:
      "Alano DT 5 v6.5 APK for Pakistan. JazzCash, EasyPaisa, slots and card tables. 4.5 rating shown on this site.",
    url: SITE_ORIGIN,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/og-image.webp`,
        width: 512,
        height: 512,
        alt: "Alano DT 5 Android game icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alano DT 5 APK Pakistan | Official Android Download",
    description: "Free Alano DT 5 APK v6.5 for Android. Pakistani wallets and in-app bonuses explained.",
    images: [
      {
        url: `${SITE_ORIGIN}/feature/twitter-card.webp`,
        width: 512,
        height: 512,
        alt: "Alano DT 5 Android game icon",
      },
    ],
  },
  applicationName: SITE_NAME,
  category: "Gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256" />
        <link rel="icon" href={LOGO_PATH} type="image/webp" sizes="512x512" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body
        className={`${poppins.className} antialiased bg-primary text-white min-h-screen flex flex-col`}
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, rgba(40, 8, 28, 0.55) 0%, rgba(20, 8, 24, 0.02) 90%)",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
        suppressHydrationWarning
      >
        <div className="stars-bg fixed inset-0 z-0 opacity-20"></div>
        <MobileMenuProvider>
          <Header />
          <main className="relative z-10">{children}</main>
          <DeferredStyles />
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_ORIGIN,
              logo: `${SITE_ORIGIN}${LOGO_PATH}`,
              description:
                "Editorial Android APK guide for Alano DT 5 players in Pakistan.",
              email: "support@alanodt5game.com.pk",
            }),
          }}
        />
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: SITE_NAME,
              operatingSystem: "Android",
              applicationCategory: "GameApplication",
              offers: { "@type": "Offer", price: "0", priceCurrency: "PKR" },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: RATING_VALUE,
                bestRating: "5",
                ratingCount: RATING_COUNT,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
