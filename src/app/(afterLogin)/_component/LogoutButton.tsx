'use client';

import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
// client component에서만!
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';

export default function LogoutButton({session}: {session: User}) {
  const router = useRouter();

  const onLogout = useCallback(() => {
    signOut({redirect: false}).then(() => {router.replace('/login')});
  }, [router]);
  
  if (!session) return null;
  return (
    <Button className='w-full' onClick={onLogout}>로그아웃</Button>
  )
}