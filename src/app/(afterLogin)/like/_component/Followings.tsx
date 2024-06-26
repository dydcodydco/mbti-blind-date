'use client';

import { useQuery, useSuspenseInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import { getFollowings } from '../_lib/getFollowings';
import LikeCard from './LikeCard';
import { Fragment } from 'react';

export default function Followings() {
  const { data } = useSuspenseInfiniteQuery({
    queryKey: ['users', 'followings'],
    queryFn: getFollowings,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
    initialPageParam: 0,
    getNextPageParam: (lastPage => lastPage.at(-1)?.id),
  })

  return (
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
  )
}