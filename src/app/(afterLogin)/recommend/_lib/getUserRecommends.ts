
export const getUserRecommends = async (mbtiList: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/recommends?mbti=${mbtiList}`, {
    next: {
      tags: ['users', 'recommends']
    },
    cache: 'no-store',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('getUserRecommends 에러 발생했습니다.');
  }

  return res.json();
}