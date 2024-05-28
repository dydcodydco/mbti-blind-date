'use client';

import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import { getUserILike } from '../_lib/getUserILike';
import LikeCard from './LikeCard';

export default function UserILike() {
  const { data } = useQuery({
    queryKey: ['users', 'iLike'],
    queryFn: getUserILike,
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