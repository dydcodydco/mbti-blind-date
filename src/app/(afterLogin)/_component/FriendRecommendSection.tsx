import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { faker } from '@faker-js/faker';

export default function FriendRecommendSection() {
  const user = {
    id: faker.string.nanoid(10),
    nickname: faker.internet.userName(),
    age: faker.number.int({ min: 20, max: 50 }),
    distance: faker.number.int({ min: 5, max: 100 }),
    area: faker.location.city(),
    image: faker.image.urlLoremFlickr({ category: 'cat' }),
  }
  return (
    <div className='flex flex-col gap-2 px-1'>
      {Array(4).fill(0).map((d, i) => (
        <Card key={i} className='p-2 flex items-center'>
          <Avatar className='w-[40px] h-[40px]'>
            <AvatarImage src="https://github.com/shadcn.png" />
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
  )
}