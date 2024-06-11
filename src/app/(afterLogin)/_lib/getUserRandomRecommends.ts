export const getUserRandomRecommends = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userRandomRecommends`, {
    next: {
      tags: ['users', 'random', 'recommends']
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}