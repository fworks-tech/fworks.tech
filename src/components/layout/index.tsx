import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen w-screen flex flex-col">
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
      <main role="main" className="flex justify-center items-center px-4 sm:px-8 h-screen w-screen">
        <div className="relative w-screen max-w-9/12 flex flex-col min-h-8/12 p-6 sm:p-8 border-4 rounded-2xl border-cyan-400 shadow-[0_0_40px_10px_#00ccff,0_0_80px_20px_#9ae7ff] animate-fade-in neon-border">
          <Navbar />
          <section className="my-8 sm:px-8 flex flex-col flex-auto items-center justify-center text-center">
            {children}
          </section>
          <Footer />
        </div>
      </main>
    </div>
  );
}
