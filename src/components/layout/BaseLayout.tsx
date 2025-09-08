import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import type { LayoutProps } from '@/types/layout';

import Footer from '../footer';
import Navbar from '../navbar';
import Loading from '../ui/Loading';

export default function BaseLayout({ children, ...rest }: LayoutProps) {
  const { ready } = useTranslation('common');
  const router = useRouter();

  if (!ready) return <Loading />;

  return (
    <div className="relative flex h-screen w-full flex-col" {...rest}>
      {/* Background */}
      <Image
        className="pointer-events-none -z-10 select-none object-cover"
        src="/second-background.png"
        alt="FWORKS main background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      <main className="flex h-full w-full items-center justify-center p-8">
        <div
          className="neon-border-shadow max-w-8/12 align-center flex h-full w-full flex-1 flex-col justify-between p-4 sm:p-6"
          style={{ overflow: 'auto' }}
        >
          <Navbar />
          <AnimatePresence mode="popLayout" initial={false} key={router.asPath}>
            <motion.div
              className="h-full overflow-y-clip"
              key={router.asPath}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
          <Footer />
        </div>
      </main>
    </div>
  );
}
