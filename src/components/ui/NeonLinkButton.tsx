import { motion } from 'framer-motion';
import type { LinkProps } from 'next/link';
import Link from 'next/link';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

type NeonButtonProps = LinkProps & {
  label: React.ReactNode;
};

export default function NeonLinkButton({ label, ...rest }: NeonButtonProps) {
  const { i18n } = useTranslation();
  const currentLocale = useMemo(() => i18n.language, [i18n.language]);

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      className="animate-fade-in neon-border flex cursor-pointer rounded-lg"
      style={{
        padding: '1rem'
      }}
    >
      <Link
        locale={currentLocale}
        className="light-neon-text m-4 flex flex-1 font-semibold"
        {...rest}
      >
        {label}
      </Link>
    </motion.div>
  );
}
