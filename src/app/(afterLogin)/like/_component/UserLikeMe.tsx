'use client';

import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getUserLikeMe } from '../_lib/getUserLikeMe';
import { IUser } from '@/model/User';
import LikeCard from './LikeCard';

export default function UserLikeMe() {
  const { data } = useSuspenseQuery({
    queryKey: ['users', 'likeMe'],
    queryFn: getUserLikeMe,
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