'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type Props = {
  image?: string;
  title?: string;
};

export default function ImageSection({ image, title }: Props) {
  if (!image) return null;

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      // className="relative flex h-48 w-48 flex-shrink-0 justify-center md:h-full md:w-full"
      className="relative flex h-48 w-48 flex-shrink-0 justify-center md:h-full md:w-full"
    >
      <Image
        src={image}
        alt={title || 'Image'}
        fill
        priority
        sizes="(max-width: 768px) 12rem, 340px"
        className="object-contain"
      />
    </motion.div>
  );
}
