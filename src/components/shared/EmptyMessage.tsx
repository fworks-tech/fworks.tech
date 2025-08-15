import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

import NeonLinkButton from '../ui/NeonLinkButton';

export default function EmptyMessage({ message }: { message: string }) {
  const { t } = useTranslation('common');

  return (
    <div className="flex h-full flex-col items-center justify-between gap-8 p-8 text-center">
      <motion.div
        className="light-neon-text text-center text-4xl font-semibold tracking-tight sm:text-5xl"
        animate={{ opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {message}
      </motion.div>
      <NeonLinkButton href="/" label={t('goHome', 'Go back to homepage')} />
    </div>
  );
}
