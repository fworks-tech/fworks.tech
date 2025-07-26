import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Loading() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex h-64 items-center justify-center">
      <motion.div
        className="h-16 w-16 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
}
