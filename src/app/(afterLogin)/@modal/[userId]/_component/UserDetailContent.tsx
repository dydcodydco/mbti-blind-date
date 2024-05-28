'use client';

import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserDetailTop from './UserDetailTop';
import { useQuery } from '@tanstack/react-query';
import { getAUser } from '../_lib/getAUser';
import { IUser } from '@/model/User';
import UserDetailPromise from './UserDetailPromise';
import UserInfo from './UserInfo';

type Props = {
  userId: string
}

export default function UserDetailContent({userId}: {userId: string}) {
  const { data: user } = useQuery<IUser, Object, IUser, [_1: string, userId: string]>({
    queryKey: ['users', userId],
    queryFn: getAUser,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  })
  if (!user) return null;

  return (
    <div className='flex flex-col w-full md:w-[600px] xl:w-[800px] md:h-[100dvh] overflow-y-auto overscroll-none'>
        <UserDetailTop user={user} />
        <UserInfo user={user} />
        <UserDetailPromise userId={userId} />
        <div className='w-full md:w-[600px] lg:max-w-[800px]'>
          <Button variant={'default'} className='fixed bottom-2 w-[95%] md:w-[600px] xl:w-[800px] bg-black'>
            <UserPlus color='#ffffff' />
            <span className='ml-2 text-white font-extrabold'>친구신청</span>
          </Button>
        </div>
      </div>
  )
}