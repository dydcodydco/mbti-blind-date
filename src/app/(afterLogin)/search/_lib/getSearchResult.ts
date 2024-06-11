import { IUser } from '@/model/User';
import { QueryFunction } from '@tanstack/react-query';

export const getSearchResult: QueryFunction<IUser[], [_1: string, _2: string, searchParams: { q: string, f?: string, pf?: string }]>
  = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchParams.q}?${searchParams.toString()}`, {
    next: {
      // useQuery의 queryKey와 다르게 next의 tag에는 객체 못들어간다.
      tags: ['users', 'search', searchParams.q]
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // revalidateTag('all'); 초기화하기위한 함수
  // revalidatePath('/'); 초기화하기위한 함수
  return res.json();
}