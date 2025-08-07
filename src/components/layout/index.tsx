import Image from 'next/image';

import Footer from '../footer';
import Navbar from '../navbar';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex flex-col">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/second-background.png"
          alt="FWORKS main background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Neon Border Card */}
      <main role="main" className="flex h-screen w-screen items-center justify-center px-4 sm:px-8">
        <div className="max-w-9/12 min-h-8/12 animate-fade-in neon-border relative flex w-screen flex-col rounded-2xl border-4 border-cyan-400 p-6 shadow-[0_0_40px_10px_#00ccff,0_0_80px_20px_#9ae7ff] sm:p-8">
          <Navbar />
          <section className="my-8 flex flex-auto flex-col items-center justify-center text-center sm:px-8">
            {children}
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
