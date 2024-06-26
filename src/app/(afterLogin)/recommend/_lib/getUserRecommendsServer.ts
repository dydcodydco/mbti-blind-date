import { cookies } from 'next/headers';

export const getUserRecommendsServer = async (mbtiList: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/recommends?mbti=${mbtiList}`, {
    next: {
      tags: ['users', 'recommends']
    },
    cache: 'no-store',
    credentials: 'include',
    headers: {Cookie: cookies().toString()},
  });

  console.log(res, '------------------------------getUserRecommends res');
  if (!res.ok) {
    throw new Error('getUserRecommends 에러 발생했습니다.');
  }
  console.log(res, '------------------------------getUserRecommends res afterrrrrrrrrrrr');

  return res.json();
}