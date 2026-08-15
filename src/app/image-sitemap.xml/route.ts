import { NextResponse } from 'next/server';
import { abs, sitemapPages } from '@/lib/sitemap-data';

const withImages = sitemapPages.filter((p) => p.images?.length);

export async function GET() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${withImages
  .map(
    (p) => `  <url>
    <loc>${abs(p.url)}</loc>
${p.images
  ?.map(
    (img) => `    <image:image>
      <image:loc>${abs(img.loc)}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`
  )
  .join('\n')}
  </url>`
  )
  .join('\n')}
</urlset>`;
  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'public, max-age=3600' },
  });
}
