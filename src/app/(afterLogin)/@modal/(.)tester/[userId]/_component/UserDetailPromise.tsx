'use client';

import { useQuery } from '@tanstack/react-query'
import { getUserPromise } from '../_lib/getUserPromise';
import { IPost } from '@/model/Post';
import PromiseCard from '@/app/(afterLogin)/promise/_component/PromiseCard';
import dayjs from 'dayjs';

export default function UserDetailPromise({ userId }: { userId: string }) {
  const { data } = useQuery<IPost[], Object, IPost[], [_1: string, _2:string, userId: string]>({
    queryKey: ['promise', 'users', userId],
    queryFn: getUserPromise,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  }); 
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
      {data?.map((post: IPost) => (
        <PromiseCard key={post.id} post={post} postTime={dayjs(post.createdAt).fromNow()} />
      ))}
    </div>
  )
}