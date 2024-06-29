'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useQuery } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import { getUserRandomRecommends } from '@/app/(afterLogin)/_lib/getUserRandomRecommends';
import Link from 'next/link';
import { User } from 'next-auth';

export default function UserRandomRecommendSection({session}: {session: User}) {
  const { data } = useQuery<IUser[]>({
    queryKey: ['users', 'random', 'recommends'],
    queryFn: getUserRandomRecommends,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
    enabled: !!session,
  });

  return (
    session ? (
      <div className='flex flex-col gap-2 px-1'>
        {data?.map((user: IUser) => (
          <Card key={user.id}>
            <Link className='p-2 flex items-center' href={`/${user.id}`}>
              <Avatar className='w-[40px] h-[40px]'>
                <AvatarImage src={(user.Images as any)[0]?.src ? (user.Images as any)[0]?.src : 'https://github.com/shadcn.png'} />
                <AvatarFallback>ZZ</AvatarFallback>
              </Avatar>
              <div className='text-ellipsis text-xs w-[100px] xl:w-[130px] ml-2 overflow-hidden'>
                {user.nickname}
                <p className='text-ellipsis overflow-hidden'>{user.id}</p>
              </div>
              <Button className='ml-auto text-xs px-2 h-[30px]'>상세보기</Button>
            </Link>
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