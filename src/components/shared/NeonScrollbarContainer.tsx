// src/components/shared/NeonScrollbarContainer.tsx
'use client';

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
    <div
      className={clsx('scrollbar-neon max-h-[70vh] overflow-y-auto px-2 md:px-4', className)}
      {...rest}
    >
      {children}
    </div>
  );
}
