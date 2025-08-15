import { NextResponse, type NextRequest } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;
const SUPPORTED_LOCALES = ['en', 'pt', 'es', 'fr', 'de'];
const DEFAULT_LOCALE = 'en';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const hasLocale = SUPPORTED_LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // pega do cookie do Next ou do header
  const cookieLocale = req.cookies.get('NEXT_LOCALE')?.value;
  const headerLocale = req.headers.get('accept-language')?.split(',')[0].split('-')[0];
  const locale = SUPPORTED_LOCALES.includes(cookieLocale || '')
    ? cookieLocale!
    : SUPPORTED_LOCALES.includes(headerLocale || '')
      ? headerLocale!
      : DEFAULT_LOCALE;

  return NextResponse.redirect(new URL(`/${locale}${pathname}`, req.url));
}

export const config = { matcher: ['/((?!_next|api|.*\\..*).*)'] };
