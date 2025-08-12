import type { LayoutProps } from '@/types/layout';

import BaseLayout from './BaseLayout';

export default function FullscreenLayout({ children, ...rest }: LayoutProps) {
  return (
    <BaseLayout {...rest}>
      <div className="flex h-full items-center justify-center">{children}</div>
    </BaseLayout>
  );
}
