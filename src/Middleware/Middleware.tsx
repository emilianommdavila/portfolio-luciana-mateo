import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';

export const config = { matcher: '/about' };

export async function middleware() {
  const greeting = await get('about');
  // NextResponse.json requires at least Next v13.1 or
  // enabling experimental.allowMiddlewareResponseBody in next.config.js
  return NextResponse.json(greeting);
}