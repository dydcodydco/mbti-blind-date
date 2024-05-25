'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useCallback } from 'react';

interface userProps {
  id: string;
  nickname: string;
  age: number;
  distance: number;
  area: string;
  image: string[];
}

export default function UserCardArticle({ children, user }: { children: ReactNode, user: userProps }) {
  const router = useRouter();
  const onclick = useCallback(() => {
    router.push(`/${user.id}`);
  }, [router, user]);
  return (
    <article onClickCapture={onclick}>
      {children}
    </article>
  )
}