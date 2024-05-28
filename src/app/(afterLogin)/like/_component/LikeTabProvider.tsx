'use client';

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
  const [like, setLike] = useState(true);
  const contextValue = useMemo(() => ({ like, setLike }), [like, setLike]);
  return (
    <TabContext.Provider value={contextValue}>
      {children}
    </TabContext.Provider>
  )
}