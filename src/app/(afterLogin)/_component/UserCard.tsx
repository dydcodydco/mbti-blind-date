import { Card } from '@/components/ui/card';
import style from './userCard.module.css';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import UserCardArticle from './UserCardArticle';
import Link from 'next/link';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { IUser } from '@/model/User';
import Image from 'next/image';
import { mbtiCompatibility } from '../_constants/constants';
import { useMemo } from 'react';
import { Session } from 'next-auth';
import React from 'react';
type Props = {
  user: IUser, session: Session | null,
}

const UserCard = ({ user, session }: Props) => {
  // console.log(user);
  const myMbti = useMemo(() => (session?.user as IUser)?.mbti.toUpperCase(), [session?.user]);
  const userMbti = useMemo(() => (user as IUser)?.mbti?.toUpperCase(), [user]);
  const mbtiData = mbtiCompatibility[myMbti];

  if (!session) {
    return null;
  }

  return (
    // <UserCardArticle user={user}>
    <Card className={style.userCard}>
      <Link href={`/${user.id}`} scroll={false} className='w-full h-full absolute top-0 left-0'>
        {/* <img src={user.image[0]} className='rounded-xl h-full block w-full' alt="img" /> */}
        {/* <ImageWithPlaceholder src={`${user.Images[0].link}`} /> */}
        <div className={style.userInfo}>
          <h2 className='text-white font-extrabold text-xl'>{user?.nickname}</h2>
          <h2 className='text-white font-extrabold text-xl mt-3'>{userMbti}</h2>
          <h2 className='text-white font-extrabold text-xl my-3'>궁합 {mbtiData[userMbti]}%</h2>
          <p className='text-white font-semibold text-base'>
            {user?.region}, {user?.age}
          </p>
        </div>
      </Link>
      {/* <div className='absolute bottom-3 px-3 w-full'>
        <Button variant={'default'} className='bg-white hover:bg-slate-50 w-full'>
          <UserPlus color='#000000' />
          <span className='ml-2 text-black font-extrabold'>친구신청</span>
        </Button>
      </div> */}
    </Card>
    // </UserCardArticle>
  )
}

export default React.memo(UserCard);