'use client';

import { InfiniteData, useInfiniteQuery, useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import UserCard from '@/app/(afterLogin)/_component/UserCard';
import { IUser } from '@/model/User';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Session } from 'next-auth';
import { getUserAllMbti } from '../_lib/getUserAllMbti';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

type Props = { session: Session | null, searchParams: Params};

export default function UserMbtiCardList({session, searchParams}: Props) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isPending,
    isLoading,
    isError,
  } = useSuspenseInfiniteQuery<IUser[], Object, InfiniteData<IUser[]>, [_1: string, _2: string, mbti: string], number>({
    queryKey: ['users', 'all', searchParams.type?.toUpperCase()],
    queryFn: getUserAllMbti,
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
      hasNextPage && fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  if (isError) {
    return 'postRecommends 에러 발생'
  }

  return (
    <>
      {data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.map((user: IUser) => <UserCard key={user.id} user={user} session={session} />)}
        </Fragment>
      ))}
      {hasNextPage && <div ref={ref} style={{ height: 50 }}></div>}
    </>
  )
} 