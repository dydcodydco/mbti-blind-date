'use client';

import { useQuery } from '@tanstack/react-query';
import { getSearchResult } from '../_lib/getSearchResult';
import { Card } from '@/components/ui/card';
import { IUser } from '@/model/User';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import SearchCard from './SearchCard';

type Props = {
  searchParams: { q: string, f?: string, pf?: string };
}

export default function SearchResult({ searchParams }: Props) {
  const { data } = useQuery<IUser[], Object, IUser[], [_1: string, _2: string, Props['searchParams']]>({
    // useQuery의 queryKey에는 객체로 넣어줄 수 있음
    queryKey: ['users', 'search', searchParams],
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 60 *  5 * 1000,
  })
  return (
    <div className='flex flex-col gap-2'>
      {data?.map((user: IUser) => (
        <SearchCard key={user.id} user={user} />
      ))}
    </div>
  )
}