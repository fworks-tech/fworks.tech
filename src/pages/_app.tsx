import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { ReactElement, ReactNode } from 'react';

import { orbitron } from '@/lib/fonts';

import nextI18NextConfig from '../../next-i18next.config';

// Páginas que podem ter um layout customizado
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page);

  return <div className={orbitron.variable}>{getLayout(<Component {...pageProps} />)}</div>;
}

export default appWithTranslation(App, nextI18NextConfig);
