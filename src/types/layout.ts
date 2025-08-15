import type { PropsWithChildren } from 'react';

// Props padrão para todos os layouts
export type LayoutProps = PropsWithChildren & {
  className?: string;
  [key: string]: unknown;
};
