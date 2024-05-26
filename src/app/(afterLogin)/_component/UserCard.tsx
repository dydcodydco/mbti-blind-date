import { Card } from '@/components/ui/card';
import { faker } from '@faker-js/faker';
import style from './userCard.module.css';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';
import UserCardArticle from './UserCardArticle';
import Link from 'next/link';

export default function UserCard() {
  const user = {
    id: faker.string.nanoid(10),
    nickname: faker.internet.userName(),
    age: faker.number.int({ min: 20, max: 50 }),
    distance: faker.number.int({ min: 5, max: 100 }),
    area: faker.location.city(),
    image: [
      faker.image.urlLoremFlickr({ category: 'cat' })
    ],
    mbti: faker.helpers.arrayElement([{mbti: 'ESFP', score: 100}, {mbti: 'ESFP', score: 90}, {mbti: 'ESFP', score: 80}])
  }
  return (
    // <UserCardArticle user={user}>
    <Card className={style.userCard}>
      <Link href={`/${user.id}`} scroll={false} className='w-full h-full absolute top-0 left-0'>
        <img src={user.image[0]} className='rounded-xl h-full block w-full' alt="img" />
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