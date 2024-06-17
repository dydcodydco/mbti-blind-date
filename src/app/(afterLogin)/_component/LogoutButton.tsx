'use client';

import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
// client component에서만!
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';
import { useQueryClient } from '@tanstack/react-query';

export default function LogoutButton({session}: {session: User}) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const onLogout = useCallback(() => {
    queryClient.invalidateQueries({
			queryKey: ['posts'],
		});
		queryClient.invalidateQueries({
			queryKey: ['users'],
		});
    signOut({ redirect: false }).then(() => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/logout`, {
        method: 'post',
        credentials: 'include',
      })
      router.replace('/login');
    });
  }, [router, queryClient]);
  
  if (!session) return null;
  return (
    <Button className='w-full' onClick={onLogout}>로그아웃</Button>
  )
}