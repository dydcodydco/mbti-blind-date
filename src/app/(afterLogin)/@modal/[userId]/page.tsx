import Back from '@/app/(afterLogin)/_component/Back';
import Modal from '@/app/(afterLogin)/_component/Modal';
import { faker } from '@faker-js/faker';
import { Cigarette, EllipsisVertical, FileHeart, GraduationCap, Handshake, MapPin, Pickaxe, Ruler, UserPlus, Wine } from 'lucide-react';
import UserCaousel from './_component/UsrCarousel';
import { Button } from '@/components/ui/button';

type Props = { params: { userId: string } };

export async function generateMetadata({ params: {userId} }: Props) {
  return {
    title: userId,
  };
}

export default function UserPage({ params: {userId} }: Props) {
  const user = {
    id: faker.string.nanoid(10),
    nickname: faker.internet.userName(),
    age: faker.number.int({ min: 20, max: 50 }),
    tall: faker.number.int({ min: 150, max: 165 }),
    distance: faker.number.int({ min: 5, max: 100 }),
    area: faker.location.city(),
    image: [
      faker.image.urlLoremFlickr({ category: 'cat' }),
      faker.image.urlLoremFlickr({ category: 'cat' }),
      faker.image.urlLoremFlickr({ category: 'cat' }),
    ],
    mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
    school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
  }

  return (
    <Modal>
      <div className='flex flex-col w-full md:max-w-[600px] lg:max-w-[800px] md:h-[100dvh] overflow-y-auto'>
        <h2 className='font-bold flex justify-between items-center mb-1 sticky top-0 left-0 z-10 bg-white'>
          <div className='flex items-center'>
            <Back />
            {user.nickname}, {user.age}
          </div>
          <EllipsisVertical />
        </h2>
        <div className='pb-[80px]'>
          <div>
            <UserCaousel />
          </div>
          <h1 className='font-bold text-xl sm:text-2xl mt-2 break-all'>
            {user.nickname}, {user.age}
          </h1>
          <p className='flex items-center mt-2'>
          <FileHeart className='mr-1' size={20} /> {user.mbti.mbti}, 궁합: {user.mbti.score}%
          </p>
          <p className='flex items-center mt-2'>
            <MapPin className='mr-1' size={20} /> {user.distance}, {user.area}
          </p>
          <div className='grid grid-cols-2'>
            <span className='flex items-center mt-2'>
              <Ruler className='mr-1' size={20} /> {user.tall}cm
            </span>
            <span className='flex items-center mt-2'>
              <GraduationCap className='mr-1' size={20} /> {user.school}
            </span>
            <span className='flex items-center mt-2'>
              <Pickaxe className='mr-1' size={20} /> 전문직
            </span>
            <span className='flex items-center mt-2'>
              <Handshake className='mr-1' size={20} /> 무교
            </span>
            <span className='flex items-center mt-2'>
              <Wine className='mr-1' size={20} /> 가끔
            </span>
            <span className='flex items-center mt-2'>
              <Cigarette className='mr-1' size={20} /> 비흡연
            </span>
          </div>
          <div style={{ height: '1000px'}}></div>
        </div>
        <div className='w-full md:w-[600px] lg:max-w-[800px]'>
          <Button variant={'default'} className='fixed bottom-2 w-[95%] md:w-[600px] lg:w-[800px]'>
            <UserPlus color='#ffffff' />
            <span className='ml-2 text-white font-extrabold'>친구신청</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}