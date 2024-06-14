'use client';

import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserDetailTop from './UserDetailTop';
import { useQuery } from '@tanstack/react-query';
import { getSingleUser } from '../_lib/getSingleUser';
import { IUser } from '@/model/User';
import UserDetailPromise from './UserDetailPromise';
import UserInfo from './UserInfo';
import Back from '@/app/(afterLogin)/_component/Back';

type Props = {
  userId: string
}

export default function UserDetailContent({userId}: Props) {
  const { data: user, error, isLoading } = useQuery<IUser, Object, IUser, [_1: string, userId: string]>({
    queryKey: ['users', userId],
    queryFn: getSingleUser,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  })

  if (error) {
    console.dir(error);
    return (
      <>
        <div><Back /></div>
        <div className='flex flex-grow justify-center items-center'>
          <h1>계정이 존재하지 않습니다.</h1>
        </div>
      </>
    )
  }

  if (!user) return null;

  return (
    <div className='flex flex-col w-full md:w-[600px] xl:w-[800px] md:max-h-[95dvh] overflow-y-auto overscroll-none'>
      <UserDetailTop user={user} />
      <UserInfo user={user} />
      <UserDetailPromise userId={userId} />
      <div className='w-full sticky bottom-0 z-10 p-3 bg-white'>
        <Button variant={'default'} className='w-full bg-black z-10'>
          <UserPlus color='#ffffff' />
          <span className='ml-2 text-white font-extrabold'>친구신청</span>
        </Button>
      </div>
    </div>
  )
}