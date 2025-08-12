import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import DefaultLayout from '@/components/layout/DefaultLayout';
import SeoHead from '@/components/shared/SeoHead';
import NeonLinkButton from '@/components/ui/NeonLinkButton';
import { getI18nProps } from '@/lib/i18n';
import type { SeoMetadata } from '@/types/seo';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale);
}

export default function HomePage() {
  const { t } = useTranslation('common');
  const seo = t('seo', { returnObjects: true }) as SeoMetadata;

  return (
    <>
      <SeoHead {...seo} url="https://fworks.tech/" />
      <section className="h-full w-full p-6 sm:p-8" style={{ marginTop: '4rem' }}>
        <div className="flex h-12 flex-auto flex-col items-center justify-center gap-4 text-center">
          <motion.h1
            className="light-neon-text text-center text-5xl font-semibold tracking-tight sm:text-4xl"
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {t('welcome')}
          </motion.h1>

          <motion.p
            className="max-w-xl text-lg text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ margin: '1rem 0 2rem' }}
          >
            {t('intro')}
          </motion.p>

          <motion.div
            className="animate-bounce cursor-pointer"
            onClick={() => {
              const about = document.getElementById('about');
              if (about) about.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.2 }}
          >
            <NeonLinkButton href="/about" label={t('about')} />
          </motion.div>
        </div>
      </section>
    </>
  );
}

// 🧩 Adiciona suporte ao layout dinâmico
HomePage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
