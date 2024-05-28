'use client';

import { useQuery } from '@tanstack/react-query';
import { getPromiseAll } from '../_lib/getPromiseAll';
import { IPost } from '@/model/Post';
import PromiseCard from './PromiseCard';


export default function PromiseSection() {
  const { data } = useQuery({
    queryKey: ['users', 'promise', 'all'],
    queryFn: getPromiseAll,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  })
  return (
    data?.map((promise: IPost) => (
      <PromiseCard key={promise.id} promise={promise} />
    ))
  )
}