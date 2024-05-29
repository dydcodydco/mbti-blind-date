'use client';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import { getUserILike } from '../_lib/getUserILike';
import LikeCard from './LikeCard';

export default function UserILike() {
  const { data } = useSuspenseQuery({
    queryKey: ['users', 'iLike'],
    queryFn: getUserILike,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  })

  return (
    <div className='flex flex-col gap-2'>
      {data?.map((user: IUser) => (
        <LikeCard key={user.id} user={user} />
      ))}
    </div>
  )
}