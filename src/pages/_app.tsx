// pages/_app.tsx
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';
import nextI18NextConfig from '../../next-i18next.config';

function App({ Component, pageProps }: AppProps & { Component: any }) {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page); // usa layout direto na página ou nenhum

  return (
    <>
      <Head>
        <title>FWORKS.tech</title>
        <meta name="description" content="FWORKS.tech" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
