import { Section } from '@/lib/types';
import { ReactNode } from 'react';

type NeonContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function NeonContainer({ children, className = '' }: NeonContainerProps) {
  return (
    <div
      className={`relative w-full flex flex-auto rounded-xl p-6 sm:p-8 bg-black/20 backdrop-blur-md border-2 border-cyan-400 shadow-[0_0_20px_4px_#00ccff] ${className}`}
    >
      {children}
    </div>
  );
}
