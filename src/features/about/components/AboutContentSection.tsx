'use client';

import { motion } from 'framer-motion';

type ContentProps = {
  content: { title: string; content: string; image?: string };
};

export default function AboutContentSection({ content }: ContentProps) {
  return (
    <>
      <motion.h2
        className="light-neon-text text-3xl font-semibold lg:text-4xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {content.title}
      </motion.h2>
      <p className="my-4 text-justify text-base leading-relaxed text-gray-300 lg:text-lg">
        {content.content}
      </p>
    </>
  );
}
