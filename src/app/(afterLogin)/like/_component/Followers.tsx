'use client';

import { useQuery, useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import LikeCard from './LikeCard';
import { getFollowers } from '../_lib/getFollowers';
import { Fragment, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export default function Followers() {
  const { data, fetchNextPage, hasNextPage, isError  } = useSuspenseInfiniteQuery({
    queryKey: ['users', 'followers'],
    queryFn: getFollowers,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.at(-1)?.id,
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
    return 'Followers 에러 발생'
  }

  return (
    <>
      <div className='flex flex-col gap-2'>
      {data?.pages.length > 0 && data?.pages[0].length > 0 ? data?.pages.map((page: IUser[], i) => (
        <Fragment key={i}>
          {page.map((user: IUser) => (
            <LikeCard key={user.id} user={user} />
          ))}
        </Fragment>
      )) : (
          <>
            비어있습니다.
          </>
      )}
    </div>
    {hasNextPage && <div ref={ref} style={{ height: 50 }}></div>}
    </>
  )
}