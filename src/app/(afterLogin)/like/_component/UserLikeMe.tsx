'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserLikeMe } from '../_lib/getUserLikeMe';
import { IUser } from '@/model/User';
import LikeCard from './LikeCard';

export default function UserLikeMe() {
  const { data } = useQuery({
    queryKey: ['users', 'likeMe'],
    queryFn: getUserLikeMe,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  })

  return (
    <div>
      {data?.map((user: IUser) => (
        <LikeCard key={user.id} user={user} />
      ))}
    </div>
  )
}