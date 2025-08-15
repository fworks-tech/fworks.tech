import { motion } from 'framer-motion';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

type NeonButtonProps = LinkProps & {
  label: React.ReactNode;
};

export default function NeonLinkButton({ label, ...rest }: NeonButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="animate-fade-in neon-border flex cursor-pointer rounded-lg"
      style={{
        padding: '1rem'
      }}
    >
      <Link className="light-neon-text m-4 flex flex-1 font-semibold" {...rest}>
        {label}
        <span aria-hidden className="light-neon-text m-4 flex flex-1 font-semibold" />
      </Link>
    </motion.div>
  );
}
