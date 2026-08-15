import { NextResponse } from 'next/server';
import { SITE_ORIGIN } from '@/lib/site';

export async function GET() {
  return NextResponse.redirect(`${SITE_ORIGIN}/robots.txt`, 308);
}
