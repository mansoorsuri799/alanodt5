import { NextResponse } from 'next/server';
import { SITE_ORIGIN } from '@/lib/site';

export async function GET() {
  return NextResponse.redirect(`${SITE_ORIGIN}/index.xml`, 308);
}
