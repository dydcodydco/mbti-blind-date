'use client';

import { useSearchParams } from 'next/navigation';
import { Dispatch, ReactNode, SetStateAction, createContext, useMemo, useState } from 'react'

type tabContext = {
  like: boolean,
  setLike: Dispatch<SetStateAction<boolean>>;
}
export const TabContext = createContext<tabContext>({
  like: true,
  setLike: () => {}
})

type Props = {
  children: ReactNode
}

export default function LikeTabProvider({ children }: Props) {
  const searchParams = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const [like, setLike] = useState(newSearchParams.get('type') !== 'followings');
  const contextValue = useMemo(() => ({ like, setLike }), [like, setLike]);
  return (
    <TabContext.Provider value={contextValue}>
      {children}
    </TabContext.Provider>
  )
}