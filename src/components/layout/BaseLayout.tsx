import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Loading from '../ui/Loading';
import Navbar from '../navbar';
import Footer from '../footer';

type LayoutProps = {
  children: React.ReactNode;
  [key: string]: any;
};

export default function BaseLayout({ children }: LayoutProps) {
  const { ready } = useTranslation();

  if (!ready) return <Loading />;

  return (
    <div className="relative flex h-screen w-screen flex-col">
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
        <div className="neon-border animate-fade-in relative flex h-screen max-h-9/12 w-screen max-w-9/12 flex-auto flex-col rounded-2xl border-4 border-cyan-400 p-6 sm:p-8 md:max-h-8/12 md:max-w-8/12">
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
