import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const body = readFileSync(join(process.cwd(), 'public/robots.txt'), 'utf8');
  return new NextResponse(body, {
    headers: { 'Content-Type': 'text/plain', 'Cache-Control': 'public, max-age=3600' },
  });
}
