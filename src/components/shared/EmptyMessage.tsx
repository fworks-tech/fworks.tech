import { motion } from 'framer-motion';

export default function EmptyMessage({ message }: { message: string }) {
  return (
    <motion.div
      className="light-neon-text text-center text-4xl font-semibold tracking-tight sm:text-5xl"
      animate={{ opacity: [1, 0.6, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {message}
    </motion.div>
  );
}
