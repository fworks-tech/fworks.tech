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
    <div className="relative flex h-screen w-screen flex-col overflow-hidden" {...rest}>
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

      <main className="flex h-full w-full flex-1 flex-col items-center justify-center overflow-hidden p-8">
        <div className="neon-border animate-fade-in max-w-9/12 md:max-w-8/12 flex h-full max-h-fit w-full flex-col p-6 sm:p-8 md:max-h-[80vh]">
          <Navbar />
          <section className="flex h-full flex-auto flex-col items-center justify-center overflow-y-auto pt-1 sm:px-8 md:pt-4">
            {children}
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
