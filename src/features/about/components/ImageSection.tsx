import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type Props = {
  image?: string;
  title?: string;
};

export default function ImageSection({ image, title }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1000); // Consider small device if width < 1000
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!image) return null;

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex h-full w-full flex-shrink-0 justify-center"
    >
      {isMobile ? (
        <Image
          src={image}
          alt={title || 'Profile image'}
          priority
          height={220}
          width={220}
          className="neon-border-shadow rounded-full opacity-80"
          style={{ borderRadius: '50%' }}
        />
      ) : (
        <Image
          src={image}
          alt={title || 'Profile image'}
          priority
          fill
          className="neon-border-shadow rounded-full object-contain opacity-80"
          style={{ borderRadius: '50%' }}
        />
      )}
    </motion.div>
  );
}
