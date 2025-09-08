'use client';

import { motion } from 'framer-motion';

type Props = {
  sections: unknown[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function NeonCarousel({ sections, currentIndex, onSelect }: Props) {
  return (
    <div className="neon-carousel-container mt-2 flex w-full items-center justify-center gap-4 px-6 md:-mt-6 md:px-4">
      {sections?.map((_, index) => {
        const isActive = index === currentIndex;
        const animateProps = isActive ? { opacity: 1 } : { opacity: 0.9 };

        return (
          <motion.div
            key={index}
            onClick={() => onSelect(index)}
            className={`neon-border neon-carousel-dot h-4 w-4 cursor-pointer rounded-full ${
              isActive ? 'neon-carousel-nav-icon-active' : ''
            }`}
            initial={{ opacity: 0 }}
            animate={animateProps}
            transition={{ ease: 'easeInOut', duration: 0.28 }}
            layout
          />
        );
      })}
    </div>
  );
}
