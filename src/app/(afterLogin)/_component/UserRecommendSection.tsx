'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import { getUserRecommends } from '@/app/(afterLogin)/_lib/getUserRecommends';
import { useSession } from 'next-auth/react';

export default function UserRecommendSection() {
  const { data: session } = useSession();
  const { data } = useQuery<IUser[]>({
    queryKey: ['users', 'recommends'],
    queryFn: getUserRecommends,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
    enabled: !!session?.user,
  })

  return (
    session?.user ? (
      <div className='flex flex-col gap-2 px-1'>
        {data?.map((user: IUser) => (
          <Card key={user.id} className='p-2 flex items-center'>
            <Avatar className='w-[40px] h-[40px]'>
              <AvatarImage src={user.Images[0].link} />
              <AvatarFallback>ZZ</AvatarFallback>
            </Avatar>
            <div className='text-ellipsis text-xs w-[100px] xl:w-[130px] ml-2 overflow-hidden'>
              {user.nickname}
              <p className='text-ellipsis overflow-hidden'>{user.id}</p>
            </div>
            <Button className='ml-auto text-xs px-2 h-[30px]'>친구추가</Button>
          </Card>
        ))}
      </div>
    ) : (
      <div>
        로그인 후 확인할 수 있습니다.
      </div>
    )
  )
}