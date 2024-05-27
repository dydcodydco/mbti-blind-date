'use client';

import { IUser } from '@/model/User';
import { useRouter } from 'next/navigation';
import { ReactNode, useCallback } from 'react';

type Props = {
  children: ReactNode,
  user: IUser,
}

export default function UserCardArticle({ children, user }: Props) {
  const router = useRouter();
  const onclick = useCallback(() => {
    router.push(`/${user.id}`, {scroll: false});
  }, [router, user]);

  return (
    <article onClickCapture={onclick}>
      {children}
    </article>
  )
}