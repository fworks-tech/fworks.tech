import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DefaultLayout from '@/components/layout/DefaultLayout';

import { availableNamespaces } from '@/lib/i18nNamespaces';
import { getI18nProps } from '@/lib/i18n';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale, Array.from(availableNamespaces));
}

export default function NotFoundPage() {
  const { t } = useTranslation('common');

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 text-center">
      <motion.h1
        className="light-neon-text text-5xl font-semibold tracking-tight sm:text-6xl"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {t('notFoundMessage', 'Oops! Page not found.')}
      </motion.h1>

      <Link
        href="/"
        className="neon-border mt-4 inline-block rounded-lg border border-cyan-400 px-6 py-2 text-cyan-300 transition-all hover:bg-cyan-400 hover:text-black"
      >
        {t('goHome', 'Go back to homepage')}
      </Link>
    </div>
  );
}

NotFoundPage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
