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
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden" {...rest}>
      {/* Background */}
      <Image
        className="pointer-events-none -z-10 select-none object-cover"
        src="/second-background.png"
        alt="FWORKS main background"
        fill
        style={{ objectFit: 'cover' }}
        priority
      />

      <main className="flex h-full w-full flex-1 items-start justify-center p-8 sm:mb-12">
        <div className="neon-border-shadow flex h-full w-full flex-col overflow-auto p-4 sm:p-6">
          <Navbar />
          <AnimatePresence mode="popLayout" initial={false} key={router.asPath}>
            <motion.div
              key={router.asPath}
              className="h-full overflow-y-clip"
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
