import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import Layout from '@/components/layout';
import '@/styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FWORKS.tech</title>
        <meta name="description" content="FWORKS.tech" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
