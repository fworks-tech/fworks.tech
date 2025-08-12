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
    <div className={clsx(`scrollbar-neon`, className)} {...rest}>
      {children}
    </div>
  );
}
