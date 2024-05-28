export const getUserRandomRecommends = async () => {
  const res = await fetch(`http://localhost:9090/api/userRandomRecommends`, {
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