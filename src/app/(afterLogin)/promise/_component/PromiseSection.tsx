'use client';

import { InfiniteData, useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { getPromiseAll } from '../_lib/getPromiseAll';
import { IPost } from '@/model/Post';
import PromiseCard from './PromiseCard';
import { useInView } from 'react-intersection-observer';
import { Fragment, useEffect } from 'react';
import { Session } from 'next-auth';


export default function PromiseSection({session}: {session: Session}) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
    isLoading,
  } = useSuspenseInfiniteQuery<IPost[], Object, InfiniteData<IPost[]>, [_1: string, _2: string], number>({
    queryKey: ['posts', 'all'],
    queryFn: getPromiseAll,
    staleTime: 60 * 1000, // fresh -> stale, 5분 기준,
    gcTime: 60 * 1000 * 5, // 캐시타임, 기본 5분
    // getTime은 staleTime보다 무조건 더 커야한다!!
    initialPageParam: 0,
    getNextPageParam: (lastPage) => (lastPage as any).at(-1)?.id,
  });
  
  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });
  
  useEffect(() => {
    if (inView) {
      !isFetching && hasNextPage && fetchNextPage();
    }
  }, [inView, fetchNextPage, isFetching, hasNextPage]);
  
  console.log(data, '------------------PromiseSection')
  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((post: IPost) => <PromiseCard key={post.id} post={post} session={session} />)}
        </Fragment>
      ))}
      {hasNextPage && <div ref={ref} style={{ height: 50 }}></div>}
    </>
  )
}