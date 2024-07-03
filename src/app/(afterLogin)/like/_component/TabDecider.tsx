'use client';

import { useContext } from 'react'
import { TabContext } from './LikeTabProvider'
import Followers from './Followers';
import Followings from './Followings';
import { Session } from 'next-auth';

type Props = {session: Session | null}

export default function TabDecider({session}: Props) {
  const { like } = useContext(TabContext);
  return (
    like ? <Followers session={session} /> : <Followings session={session} />
  )
}