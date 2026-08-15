export const SITE_ORIGIN = 'https://alanodt5game.com.pk';
export const SITE_NAME = 'Alano DT 5';
export const SITE_HOST = 'alanodt5game.com.pk';
export const DOWNLOAD_URL = 'https://alanorunny.com/?code=14544841';
export const SUPPORT_EMAIL = 'support@alanodt5game.com.pk';
export const LIVE_CHAT_URL = 'https://chat.ssrchat.com/service/f1niryp';
export const LOGO_PATH = '/alano-dt-5.webp';
export const APP_VERSION = '6.5';
export const APP_SIZE = '56.82 MB';
export const ANDROID_MIN = 'Android 5.0+';
export const RATING_VALUE = '4.5';
export const RATING_COUNT = '18420';
export const RATING_COUNT_DISPLAY = '18,420';
export const PUBLISHER = 'alanorunny.com';
export const LASTMOD = '2026-08-15';

export const ROUTES = {
  home: '/',
  download: '/download-alano-dt-5',
  deposit: '/deposit-money-in-alano-dt-5',
  withdraw: '/withdraw-money-from-alano-dt-5',
  pc: '/alano-dt-5-for-pc',
  about: '/about-us',
  blog: '/blog',
  contact: '/contact-us',
  privacy: '/privacy',
  disclaimer: '/disclaimer',
  loginBlog: '/blog/create-alano-dt-5-account-and-login',
  safetyBlog: '/blog/is-alano-dt-5-safe-in-pakistan',
  bonusBlog: '/blog/alano-dt-5-bonuses-and-vip-levels',
  tipsBlog: '/blog/alano-dt-5-gameplay-tips',
} as const;

export const IMAGE_CREATOR = {
  '@type': 'Organization' as const,
  name: SITE_NAME,
  url: SITE_ORIGIN,
};

export const imageObjectLicensing = {
  license: SITE_ORIGIN,
  creator: IMAGE_CREATOR,
  acquireLicensePage: `${SITE_ORIGIN}/contact-us`,
  copyrightNotice: `© ${SITE_NAME}. All rights reserved.`,
  creditText: SITE_NAME,
} as const;
