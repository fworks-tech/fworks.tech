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
      className="relative flex flex-shrink-0 justify-center"
    >
      <Image
        src={image}
        alt={title || 'Profile image'}
        priority
        height={isMobile ? 220 : 420}
        width={isMobile ? 220 : 420}
        className="neon-border-shadow rounded-full opacity-80"
        style={{ borderRadius: '50%' }}
      />
    </motion.div>
  );
}
