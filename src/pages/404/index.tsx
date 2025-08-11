import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

import FullscreenLayout from '@/components/layout/FullscreenLayout';
import SeoHead from '@/components/shared/SeoHead';
import NeonLinkButton from '@/components/ui/NeonLinkButton';
import { getI18nProps } from '@/lib/i18n';
import { availableNamespaces } from '@/lib/i18nNamespaces';

const temp_seo = {
  title: 'Page Not Found | FWORKS.tech',
  description: 'Oops! This page doesn’t exist or is not available.',
  keywords: '404, not found, fworks',
  image: '/assets/og-default-en.png'
};

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale, Array.from(availableNamespaces));
}

export default function NotFoundPage() {
  const { t } = useTranslation('common');

  return (
    <>
      <SeoHead {...temp_seo} url="https://fworks.tech/404" />
      <div className="flex h-full flex-col items-center justify-between gap-8 p-8 text-center">
        <motion.h1
          className="light-neon-text text-5xl font-semibold tracking-tight sm:text-4xl"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t('notFoundMessage', 'Oops! Page not found.')}
        </motion.h1>

        <NeonLinkButton href="/" label={t('goHome', 'Go back to homepage')} />
      </div>
    </>
  );
}

NotFoundPage.getLayout = (page: React.ReactNode) => <FullscreenLayout>{page}</FullscreenLayout>;
