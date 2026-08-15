import {
  LASTMOD,
  LOGO_PATH,
  ROUTES,
  SITE_NAME,
  SITE_ORIGIN,
} from './site';

export type SitemapPage = {
  url: string;
  lastMod: string;
  changeFreq: string;
  priority: number;
  images?: { loc: string; title: string; caption: string }[];
};

export const sitemapPages: SitemapPage[] = [
  {
    url: ROUTES.home,
    lastMod: LASTMOD,
    changeFreq: 'daily',
    priority: 1,
    images: [
      {
        loc: LOGO_PATH,
        title: `${SITE_NAME} official app icon`,
        caption: `${SITE_NAME} Android APK icon used on alanodt5game.com.pk`,
      },
      {
        loc: '/alano-dt-5-games.webp',
        title: `${SITE_NAME} game lobby`,
        caption: `Slot, card, and arcade titles inside ${SITE_NAME}`,
      },
    ],
  },
  {
    url: ROUTES.download,
    lastMod: LASTMOD,
    changeFreq: 'weekly',
    priority: 0.9,
    images: [
      {
        loc: LOGO_PATH,
        title: `Download ${SITE_NAME} APK`,
        caption: `Install ${SITE_NAME} v6.5 for Android in Pakistan`,
      },
    ],
  },
  {
    url: ROUTES.deposit,
    lastMod: LASTMOD,
    changeFreq: 'weekly',
    priority: 0.9,
    images: [
      {
        loc: '/alano-dt-5-deposit-money.webp',
        title: `${SITE_NAME} JazzCash and EasyPaisa deposit screen`,
        caption: `Buy coins in ${SITE_NAME} with Pakistani wallets`,
      },
    ],
  },
  {
    url: ROUTES.withdraw,
    lastMod: LASTMOD,
    changeFreq: 'weekly',
    priority: 0.9,
    images: [
      {
        loc: '/alano-dt-5-withdraw-money.webp',
        title: `${SITE_NAME} withdrawal screen`,
        caption: `Cash out ${SITE_NAME} balance to EasyPaisa or JazzCash`,
      },
    ],
  },
  {
    url: ROUTES.pc,
    lastMod: LASTMOD,
    changeFreq: 'weekly',
    priority: 0.8,
    images: [
      {
        loc: '/alano-dt-5-pakistan.webp',
        title: `${SITE_NAME} on a larger screen`,
        caption: `Play ${SITE_NAME} on PC with an Android emulator`,
      },
    ],
  },
  {
    url: ROUTES.about,
    lastMod: LASTMOD,
    changeFreq: 'monthly',
    priority: 0.7,
    images: [{ loc: LOGO_PATH, title: `About ${SITE_NAME}`, caption: `${SITE_NAME} brand and editorial site` }],
  },
  {
    url: ROUTES.blog,
    lastMod: LASTMOD,
    changeFreq: 'weekly',
    priority: 0.8,
  },
  {
    url: ROUTES.contact,
    lastMod: LASTMOD,
    changeFreq: 'monthly',
    priority: 0.7,
  },
  {
    url: ROUTES.privacy,
    lastMod: LASTMOD,
    changeFreq: 'yearly',
    priority: 0.5,
  },
  {
    url: ROUTES.disclaimer,
    lastMod: LASTMOD,
    changeFreq: 'yearly',
    priority: 0.5,
  },
  {
    url: ROUTES.safetyBlog,
    lastMod: LASTMOD,
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    url: ROUTES.loginBlog,
    lastMod: LASTMOD,
    changeFreq: 'monthly',
    priority: 0.8,
  },
  {
    url: ROUTES.bonusBlog,
    lastMod: LASTMOD,
    changeFreq: 'monthly',
    priority: 0.8,
    images: [
      {
        loc: '/alano-dt-5-daily-mail-bonus.webp',
        title: `${SITE_NAME} mail bonus`,
        caption: `Daily mailbox rewards inside ${SITE_NAME}`,
      },
    ],
  },
  {
    url: ROUTES.tipsBlog,
    lastMod: LASTMOD,
    changeFreq: 'monthly',
    priority: 0.8,
  },
];

export function abs(path: string) {
  if (path.startsWith('http')) return path;
  return `${SITE_ORIGIN}${path}`;
}
