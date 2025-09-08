import { motion } from 'framer-motion';
import type { LinkProps } from 'next/link';
import Link from 'next/link';

type NeonLinkButtonProps = LinkProps & {
  label: React.ReactNode;
};

/* NeonLinkButton renders a neon-styled animated link button.
 *
 * @param {NeonButtonProps} props - Props extending LinkProps with a label for the button.
 * @returns {JSX.Element} The neon link button component.
 */
export default function NeonLinkButton({ label, ...rest }: NeonLinkButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className="animate-fade-in neon-border flex cursor-pointer rounded-lg"
      style={{
        padding: '1rem'
      }}
    >
      <Link {...rest}>
        <span className="light-neon-text m-1 flex flex-1 font-semibold">{label}</span>
      </Link>
    </motion.div>
  );
}
