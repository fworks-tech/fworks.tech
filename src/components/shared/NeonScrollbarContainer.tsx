// src/components/shared/NeonScrollbarContainer.tsx
import clsx from 'clsx';
import type { ReactNode, HTMLAttributes } from 'react';

interface NeonScrollbarContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function NeonScrollbarContainer({
  children,
  className,
  ...rest
}: NeonScrollbarContainerProps) {
  return (
    <div className={clsx('scrollbar-neon max-h-[60vh] overflow-auto', className)} {...rest}>
      {children}
    </div>
  );
}
