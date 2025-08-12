'use client';

import { motion } from 'framer-motion';

type ContentProps = {
  content: { title: string; content: string; image?: string }[];
};

export default function AboutContentSection({ content }: ContentProps) {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-8">
      {content.map((section, index) => (
        <motion.div
          key={index}
          className="flex max-w-5xl flex-col items-center justify-center gap-4 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.6, duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col justify-center gap-4 md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h2
              className="light-neon-text text-3xl font-semibold md:text-4xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {section.title}
            </motion.h2>
            <p className="my-4 text-justify text-base leading-relaxed text-gray-300 md:text-lg">
              {section.content}
            </p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
