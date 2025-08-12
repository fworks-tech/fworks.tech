'use client';

import { motion } from 'framer-motion';

type Props = {
  title?: string;
  content?: string;
};

export default function ArticlesContentSection({ title, content }: Props) {
  return (
    <>
      {title && (
        <motion.h2
          className="light-neon-text text-3xl font-semibold md:text-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
      )}
      {content && (
        <p className="mt-2 text-justify text-base leading-relaxed text-gray-300 md:text-lg">
          {content}
        </p>
      )}
    </>
  );
}
