import { Card } from '@/components/ui/card';
import style from './userCard.module.css';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import UserCardArticle from './UserCardArticle';
import Link from 'next/link';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { IUser } from '@/model/User';
import Image from 'next/image';

type Props = {
  user: IUser
}

export default function UserCard({user}: Props) {
  return (
    // <UserCardArticle user={user}>
    <Card className={style.userCard}>
      <Link href={`/${user.id}`} scroll={false} className='w-full h-full absolute top-0 left-0'>
        {/* <img src={user.image[0]} className='rounded-xl h-full block w-full' alt="img" /> */}
        <ImageWithPlaceholder src={`${user.Images[0].link}`} />
        <div className={style.userInfo}>
          <h2 className='text-white font-extrabold text-xl'>{user.mbti.mbti}, 궁합 {user.mbti.score}%</h2>
          <h2 className='text-white font-extrabold text-xl'>{user.nickname}, {user.age}</h2>
          <p className='text-white font-semibold text-base'>{user.distance}km, {user.area}</p>
        </div>
      </Link>
      <div className='absolute bottom-3 px-3 w-full'>
        <Button variant={'default'} className='bg-white hover:bg-slate-50 w-full'>
          <UserPlus color='#000000' />
          <span className='ml-2 text-black font-extrabold'>친구신청</span>
        </Button>
      </div>
    </Card>
    // </UserCardArticle>
  )
}