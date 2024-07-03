import { ReactNode } from 'react';
import SocketProvider from './_component/SocketProvider';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <SocketProvider>
      {children}
    </SocketProvider>
  )
}