'use client';

import { useContext } from 'react'
import { TabContext } from './LikeTabProvider'
import UserLikeMe from './UserLikeMe';
import UserILike from './UserILike';

export default function TabDecider() {
  const { like } = useContext(TabContext);
  return (
    like ? <UserLikeMe /> : <UserILike />
  )
}