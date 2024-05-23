import { Card } from '@/components/ui/card';
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import style from './userCard.module.css';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

export default function UserCard() {
  const user = {
    id: faker.string.nanoid(10),
    nickname: faker.internet.userName(),
    age: faker.number.int({ min: 20, max: 50 }),
    distance: faker.number.int({ min: 5, max: 100 }),
    area: faker.location.city(),
    image: faker.image.urlLoremFlickr({ category: 'cat' }),
  }
  return (
    <Card className={style.userCard}>
      <img src={user.image} className='rounded-xl' alt="img" />
      <div className={style.userInfo}>
        <h2 className='text-white font-extrabold text-xl'>{user.nickname}, {user.age}</h2>
        <p className='text-white font-semibold text-base'>{user.distance}km, {user.area}</p>
        <Button variant={'default'} className='mt-3 bg-white'>
          <UserPlus color='#000000' />
          <span className='ml-2 text-black font-extrabold'>친구신청</span>
        </Button>
      </div>
    </Card>
  )
}