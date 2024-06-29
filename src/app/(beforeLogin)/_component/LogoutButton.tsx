'use client';

import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';

type Props = {session: User | undefined, makeInfo: boolean}

export default function LogoutButton({session, makeInfo}: Props) {
  const router = useRouter();

  const onLogout = useCallback(() => {
    signOut({ redirect: false }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/logout`, {
        method: 'post',
        credentials: 'include',
      })
      router.refresh();
      router.replace('/login');
    });
  }, [router]);
  
  if (!session) return null;
  return (
    <Button variant="outline" size="icon" className='absolute right-2 top-[30px] w-[60px] h-[30px] flex px-4' style={{width: 80}} onClick={onLogout}>
      로그아웃
    </Button>
  )
}