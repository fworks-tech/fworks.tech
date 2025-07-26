// next-i18next.config.ts
import type { UserConfig } from 'next-i18next';

const nextI18NextConfig: UserConfig = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pt', 'es', 'fr', 'de'],
    // 🔧 Aqui deve ser "false" se estiver tipado como NextJsI18NConfig
    localeDetection: false,
  },
  ns: ['common', 'articles', 'about', 'portfolio'],
  defaultNS: 'common',
  fallbackLng: 'en',
  localePath: './public/locales',
  reloadOnPrerender: true,
};

export default nextI18NextConfig;
