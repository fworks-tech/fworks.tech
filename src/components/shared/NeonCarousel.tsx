'use client';

import { motion } from 'framer-motion';

type Props = {
  sections: unknown[];
  currentIndex: number;
  onSelect: (index: number) => void;
};

export default function NeonCarousel({ sections, currentIndex, onSelect }: Props) {
  return (
    <div
      className="mt-8 flex w-full items-center gap-4 px-6 md:px-4"
      style={{ justifyContent: 'end' }}
    >
      {sections?.map((_, index) => (
        <motion.div
          key={index}
          onClick={() => onSelect(index)}
          className={`neon-border h-4 w-4 cursor-pointer rounded-full ${
            index === currentIndex ? 'neon-carrosel-nav-icon-active' : ''
          }`}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.2 }}
        />
      ))}
    </div>
  );
}
