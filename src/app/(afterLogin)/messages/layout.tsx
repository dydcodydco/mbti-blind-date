import { ReactNode } from 'react';
import SocketProvider from './_component/SocketProvider';
import { auth } from '@/auth';

type Props = { children: ReactNode };

export default async function Layout({ children }: Props) {
  const session = await auth();
  return (
    <SocketProvider session={session}>
      {children}
    </SocketProvider>
  )
}