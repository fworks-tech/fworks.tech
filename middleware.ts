import { NextResponse, type NextRequest } from 'next/server';

const SUPPORTED = ['en', 'pt', 'es', 'de', 'fr'] as const;
type Locale = (typeof SUPPORTED)[number];
const DEFAULT: Locale = 'en';

function isSupported(value: unknown): value is Locale {
  return typeof value === 'string' && (SUPPORTED as readonly string[]).includes(value);
}

function getCookieLocale(req: NextRequest): Locale | null {
  const c = req.cookies.get('locale')?.value ?? req.cookies.get('NEXT_LOCALE')?.value;
  return isSupported(c) ? c : null;
}

function getHeaderLocale(req: NextRequest): Locale | null {
  const header = req.headers.get('accept-language') ?? '';
  const preferred = header.split(',')[0]?.toLowerCase() ?? '';
  const base = preferred.split('-')[0] ?? '';
  return isSupported(base) ? base : null;
}

function pathHasLocale(pathname: string): boolean {
  const firstSeg = pathname.split('/').filter(Boolean)[0] ?? '';
  return isSupported(firstSeg);
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || pathname.includes('.')) {
    return NextResponse.next();
  }

  if (pathHasLocale(pathname)) return NextResponse.next();

  const locale: Locale = getCookieLocale(req) ?? getHeaderLocale(req) ?? DEFAULT;

  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ['/((?!_next|api|.*\\..*).*)']
};
