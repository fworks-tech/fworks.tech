import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import type { LayoutProps } from '@/types/layout';

import Footer from '../footer';
import Navbar from '../navbar';
import Loading from '../ui/Loading';

export default function BaseLayout({ children, ...rest }: LayoutProps) {
  const { ready } = useTranslation();

  if (!ready) return <Loading />;

  return (
    <div className="relative flex h-screen w-screen flex-col" {...rest}>
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/second-background.png"
          alt="FWORKS main background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      <main className="flex w-screen items-center justify-center px-4 sm:px-8">
        <div className="neon-border animate-fade-in max-h-9/12 max-w-9/12 md:max-h-8/12 md:max-w-8/12 relative flex h-screen w-screen flex-auto flex-col rounded-2xl border-4 border-cyan-400 p-6 sm:p-8">
          <Navbar />
          <section className="flex flex-auto flex-col items-center justify-center overflow-y-auto pt-1 sm:px-8 md:pt-0">
            {children}
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
