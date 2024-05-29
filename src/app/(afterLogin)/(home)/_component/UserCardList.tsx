'use client';

import { InfiniteData, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { getUserAll } from '../_lib/getUserAll';
import UserCard from '@/app/(afterLogin)/_component/UserCard';
import { IUser } from '@/model/User';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function UserCardList() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
    isLoading,
  } = useInfiniteQuery<IUser[], Object, InfiniteData<IUser[]>, [_1: string, _2: string], number>({
    queryKey: ['users', 'all'],
    queryFn: getUserAll,
    staleTime: 60 * 1000, // fresh -> stale, 5분 기준,
    gcTime: 60 * 1000 * 5, // 캐시타임, 기본 5분
    // getTime은 staleTime보다 무조건 더 커야한다!!
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
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

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((user: IUser) => <UserCard key={user.id} user={user} />)}
        </Fragment>
      ))}
      <div ref={ref} style={{height: 50}}></div>
    </>
  )
} 