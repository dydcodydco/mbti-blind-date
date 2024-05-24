import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { faker } from '@faker-js/faker';
import { EllipsisVertical, HandMetal, MapPin } from 'lucide-react';
import Link from 'next/link';
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ko';
import dayjs from "dayjs";
import style from './promiseSection.module.css';

dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function PromiseSection() {
  faker.seed(123);
  const createDummyUser = () => {
    return {
      id: faker.string.nanoid(10),
      content: faker.lorem.sentences(1),
      createdAt: faker.date.anytime(),
      area: faker.location.city(),
      Images: faker.helpers.arrayElements([
        faker.image.urlLoremFlickr({ category: 'cat' }),
        faker.image.urlLoremFlickr({ category: 'cat' }),
        faker.image.urlLoremFlickr({ category: 'cat' }),
      ], { min: 0, max: 3 }),
      User: {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        image: [
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ],
        mbti: faker.helpers.arrayElement([{mbti: 'ESFP', score: 100}, {mbti: 'ESFP', score: 90}, {mbti: 'ESFP', score: 80}])
      }
    }
  }
  const posts = faker.helpers.multiple(createDummyUser, { count: 10 });
  return (
    <>
      {
        posts.map(d => (
          <Card key={d.id} className='flex flex-col justify-between min-h-[400px] relative bg-black'>
            {d.Images?.length > 0 && <img className='absolute w-full h-full top-0 left-0' src={d.Images[0]} alt='img' />}
            <div className={style.promiseContent}>
              <div className='flex justify-between'>
                <Link href={`/${d.User.id}`} className='flex items-center'>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>{d.User.nickname.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className='ml-2 flex flex-col justify-center'>
                    <h3 className='font-semibold text-white'>{d.User.nickname}, {d.User.age}</h3>
                  </div>
                </Link>
                <span><EllipsisVertical color={'white'} /></span>
              </div>
              <p className='font-extrabold text-xl text-white text-center'>{d.content}</p>
              <div>
                <span className='text-white font-semibold text-sm flex items-center'>
                  <MapPin color='#ffffff' className='mr-1' />{d.User.area} · {dayjs(d.createdAt).fromNow()}
                </span>
                <Button variant={'outline'} className='flex w-full mt-1'><span className='mr-2'>궁금해요</span><HandMetal /></Button>
              </div>
            </div>
          </Card>
        ))
      }
    </>
  )
}