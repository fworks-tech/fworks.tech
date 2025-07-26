import DefaultLayout from '@/components/layout/DefaultLayout';
import { getI18nProps } from '@/lib/i18n';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }: { locale: string }) {
  return await getI18nProps(locale);
}

export default function HomePage() {
  const { t } = useTranslation('common');

  return (
    <section className="w-full max-w-5xl p-6 sm:p-8">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl font-semibold tracking-tight text-[#e499ff] sm:text-6xl"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t('welcome')}
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-lg text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('intro')}
        </motion.p>

        <motion.div
          className="mt-10 animate-bounce cursor-pointer"
          onClick={() => {
            const about = document.getElementById('about');
            if (about) about.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.2 }}
        >
          <ArrowDown size={40} className="text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
}

// 🧩 Adiciona suporte ao layout dinâmico
HomePage.getLayout = (page: React.ReactNode) => <DefaultLayout>{page}</DefaultLayout>;
