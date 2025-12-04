import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';

import type { LayoutProps } from '@/types/layout';

import Footer from '../footer';
import Navbar from '../navbar';

export default function BaseLayout({ children, ...rest }: LayoutProps) {
  const router = useRouter();

  return (
    <div
      className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/second-background.png)`
      }}
      {...rest}
    >
      <main className="flex h-full w-full flex-1 items-start justify-center p-8 sm:mb-12">
        <div className="neon-border-shadow scrollbar-neon flex h-full w-full flex-col overflow-auto p-4 sm:p-6">
          <Navbar />
          <AnimatePresence mode="popLayout" initial={false} key={router.asPath}>
            <motion.div
              key={router.asPath}
              className="flex-1 overflow-y-auto md:overflow-y-clip"
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
