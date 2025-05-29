import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation('common');

  i18n.use(initReactI18next).init({
    resources: {
      /* your translations */
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

  return (
    <section className="w-full max-w-5xl p-6 sm:p-8">
      <div className="flex flex-col items-center justify-center text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-semibold tracking-tight light-neon-text"
          animate={{ opacity: [1, 0.6, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {t('welcome')}
        </motion.h1>

        <motion.p
          className="text-lg mt-4 text-gray-300 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {t('home-intro')}
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
