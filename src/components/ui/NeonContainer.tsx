import type { ReactNode } from 'react';

type NeonContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function NeonContainer({ children, className = '' }: NeonContainerProps) {
  return (
    <div
      className={`relative flex w-full flex-auto rounded-xl border-2 border-cyan-400 bg-black/20 p-6 shadow-[0_0_20px_4px_#00ccff] backdrop-blur-md sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}
