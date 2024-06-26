'use client';

import { Button } from '@/components/ui/button';
import { useCallback, useContext } from 'react';
import { TabContext } from './LikeTabProvider';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { useRouter, useSearchParams } from "next/navigation";

export default function Tab() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { like, setLike } = useContext(TabContext);
  
  const onFollowerButton = useCallback(() => {
    setLike(prev => !prev);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('followings');
    router.push(`/like`)
  }, [router, searchParams, setLike]);
  const onFollowingButton = useCallback(() => {
    setLike(prev => !prev);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('type', 'followings');
    router.push(`/like?${newSearchParams.toString()}`);
  }, [router, searchParams, setLike]);
  return (
    <div className='flex mb-2'>
      <Button variant={like ? 'default' : 'outline'} className='flex-grow' onClick={onFollowerButton}>받은 관심</Button>
      <Button variant={like ? 'outline' : 'default'} className='flex-grow' onClick={onFollowingButton}>보낸 관심</Button>
    </div>
  )
}