'use client';

import { Button } from '@/components/ui/button';
import { useCallback } from 'react';
// client component에서만!
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();
  const { data: me } = useSession();

  const onLogout = useCallback(() => {
    signOut({redirect: false}).then(() => {router.replace('/login')});
  }, [router]);
  console.log(me, '------------client side session');
  
  if (!me?.user) return null;
  return (
    <Button className='w-full' onClick={onLogout}>로그아웃</Button>
  )
}