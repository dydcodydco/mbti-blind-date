'use client';

import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { TabContext } from './LikeTabProvider';

export default function Tab() {
  const {like, setLike} = useContext(TabContext);
  return (
    <div className='flex mb-2'>
      <Button variant={like ? 'default' : 'outline'} className='flex-grow' onClick={() => setLike(prev => !prev)}>받은 관심</Button>
      <Button variant={like ? 'outline' : 'default'} className='flex-grow' onClick={() => setLike(prev => !prev)}>보낸 관심</Button>
    </div>
  )
}