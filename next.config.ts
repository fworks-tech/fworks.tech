// next.config.ts
import type { NextConfig } from 'next';

import nextI18NextConfig from './next-i18next.config';

const config: NextConfig = {
  i18n: nextI18NextConfig.i18n,
  reactStrictMode: true,
};

export default config;
