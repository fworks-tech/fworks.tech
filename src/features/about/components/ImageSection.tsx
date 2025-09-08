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
      className="relative z-30 flex flex-shrink-0 justify-center"
    >
      <Image
        src={image}
        alt={title || 'Image'}
        priority
        height={isMobile ? 220 : 420} // Slightly reduced sizes to improve layout
        width={isMobile ? 220 : 420}
        className="neon-border-shadow"
        style={{ position: 'relative', opacity: 0.8, borderRadius: '50%' }} // Mantém o formato circular
      />
    </motion.div>
  );
}
