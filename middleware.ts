// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

const SUPPORTED_LOCALES = ['en', 'pt', 'es', 'fr', 'de'];
const DEFAULT_LOCALE = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip public files and API routes
  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return;
  }

  // Skip if already has locale in URL
  const pathnameIsMissingLocale = SUPPORTED_LOCALES.every(
    (locale) => !pathname.startsWith(`/${locale}`),
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocale(req);
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
  }
}

function getLocale(req: NextRequest): string {
  const acceptLang = req.headers.get('accept-language');
  if (!acceptLang) return DEFAULT_LOCALE;

  const preferredLang = acceptLang.split(',')[0].split('-')[0];
  return SUPPORTED_LOCALES.includes(preferredLang) ? preferredLang : DEFAULT_LOCALE;
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)'],
};
