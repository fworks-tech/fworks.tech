import type { LayoutProps } from '@/types/layout';

import BaseLayout from './BaseLayout';

export default function DefaultLayout({ children, ...rest }: LayoutProps) {
  return <BaseLayout {...rest}>{children}</BaseLayout>;
}
