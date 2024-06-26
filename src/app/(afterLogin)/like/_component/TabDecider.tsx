'use client';

import { useContext } from 'react'
import { TabContext } from './LikeTabProvider'
import Followers from './Followers';
import Followings from './Followings';

export default function TabDecider() {
  const { like } = useContext(TabContext);
  return (
    like ? <Followers /> : <Followings />
  )
}