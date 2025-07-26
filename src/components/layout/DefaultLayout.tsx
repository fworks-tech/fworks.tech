import BaseLayout from './BaseLayout';
import { PropsWithChildren } from 'react';

export default function DefaultLayout({ children, ...rest }: PropsWithChildren<{}>) {
  return <BaseLayout {...rest}>{children}</BaseLayout>;
}
