import { faker } from '@faker-js/faker';
import MainTitle from '../_component/MainTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import LogoutButton from '../_component/LogoutButton';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';

interface IMbtiCompatibility {
  [key: string]: {
    [key: string]: number;
  };
}

export default async function ProfilePage() {
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

  const mbtiCompatibility: IMbtiCompatibility = {
    ENFJ: { ENFJ: 100, ENFP: 100, ENTJ: 80, ENTP: 100, ESFJ: 60, ESFP: 80, ESTJ: 40, ESTP: 100, INFJ: 80, INFP: 80, INTJ: 60, INTP: 100, ISFJ: 60, ISFP: 60, ISTJ: 40, ISTP: 80 },
    ENFP: { ENFJ: 100, ENFP: 100, ENTJ: 100, ENTP: 80, ESFJ: 80, ESFP: 60, ESTJ: 100, ESTP: 40, INFJ: 80, INFP: 80, INTJ: 100, INTP: 60, ISFJ: 60, ISFP: 60, ISTJ: 80, ISTP: 40 },
    ENTJ: { ENFJ: 80, ENFP: 100, ENTJ: 100, ENTP: 100, ESFJ: 40, ESFP: 100, ESTJ: 60, ESTP: 80, INFJ: 60, INFP: 100, INTJ: 80, INTP: 80, ISFJ: 40, ISFP: 80, ISTJ: 60, ISTP: 60 },
    ENTP: { ENFJ: 100, ENFP: 80, ENTJ: 100, ENTP: 100, ESFJ: 100, ESFP: 40, ESTJ: 80, ESTP: 60, INFJ: 100, INFP: 60, INTJ: 80, INTP: 80, ISFJ: 80, ISFP: 40, ISTJ: 60, ISTP: 60 },
    ESTJ: { ENFJ: 40, ENFP: 100, ENTJ: 60, ENTP: 80, ESFJ: 80, ESFP: 100, ESTJ: 100, ESTP: 100, INFJ: 60, INFP: 80, INTJ: 60, INTP: 60, ISFJ: 60, ISFP: 100, ISTJ: 80, ISTP: 80 },
    ESTP: { ENFJ: 100, ENFP: 40, ENTJ: 80, ENTP: 60, ESFJ: 100, ESFP: 80, ESTJ: 100, ESTP: 100, INFJ: 80, INFP: 40, INTJ: 60, INTP: 60, ISFJ: 100, ISFP: 60, ISTJ: 80, ISTP: 80 },
    ESFJ: { ENFJ: 60, ENFP: 80, ENTJ: 40, ENTP: 100, ESFJ: 100, ESFP: 100, ESTJ: 80, ESTP: 100, INFJ: 60, INFP: 60, INTJ: 40, INTP: 80, ISFJ: 80, ISFP: 80, ISTJ: 60, ISTP: 100 },
    ESFP: { ENFJ: 80, ENFP: 60, ENTJ: 100, ENTP: 40, ESFJ: 100, ESFP: 100, ESTJ: 100, ESTP: 80, INFJ: 60, INFP: 60, INTJ: 80, INTP: 40, ISFJ: 80, ISFP: 80, ISTJ: 100, ISTP: 60 },
    INFJ: { ENFJ: 80, ENFP: 80, ENTJ: 60, ENTP: 100, ESFJ: 60, ESFP: 60, ESTJ: 40, ESTP: 80, INFJ: 100, INFP: 100, INTJ: 80, INTP: 100, ISFJ: 60, ISFP: 80, ISTJ: 40, ISTP: 100 },
    INFP: { ENFJ: 80, ENFP: 80, ENTJ: 100, ENTP: 60, ESFJ: 60, ESFP: 60, ESTJ: 80, ESTP: 40, INFJ: 100, INFP: 100, INTJ: 100, INTP: 80, ISFJ: 80, ISFP: 60, ISTJ: 100, ISTP: 40 },
    INTJ: { ENFJ: 60, ENFP: 100, ENTJ: 80, ENTP: 80, ESFJ: 40, ESFP: 80, ESTJ: 60, ESTP: 60, INFJ: 80, INFP: 100, INTJ: 100, INTP: 100, ISFJ: 40, ISFP: 100, ISTJ: 60, ISTP: 80 },
    INTP: { ENFJ: 100, ENFP: 60, ENTJ: 80, ENTP: 80, ESFJ: 80, ESFP: 40, ESTJ: 60, ESTP: 60, INFJ: 100, INFP: 80, INTJ: 100, INTP: 100, ISFJ: 100, ISFP: 40, ISTJ: 80, ISTP: 60 },
    ISFJ: { ENFJ: 60, ENFP: 60, ENTJ: 40, ENTP: 80, ESFJ: 80, ESFP: 80, ESTJ: 60, ESTP: 100, INFJ: 60, INFP: 80, INTJ: 40, INTP: 100, ISFJ: 100, ISFP: 100, ISTJ: 80, ISTP: 100 },
    ISFP: { ENFJ: 60, ENFP: 60, ENTJ: 80, ENTP: 40, ESFJ: 80, ESFP: 80, ESTJ: 100, ESTP: 60, INFJ: 80, INFP: 60, INTJ: 100, INTP: 40, ISFJ: 100, ISFP: 100, ISTJ: 100, ISTP: 80 },
    ISTJ: { ENFJ: 40, ENFP: 80, ENTJ: 60, ENTP: 60, ESFJ: 60, ESFP: 100, ESTJ: 80, ESTP: 80, INFJ: 40, INFP: 100, INTJ: 60, INTP: 80, ISFJ: 80, ISFP: 100, ISTJ: 100, ISTP: 100 },
    ISTP: { ENFJ: 80, ENFP: 40, ENTJ: 60, ENTP: 60, ESFJ: 100, ESFP: 60, ESTJ: 80, ESTP: 80, INFJ: 100, INFP: 40, INTJ: 80, INTP: 60, ISFJ: 100, ISFP: 80, ISTJ: 100, ISTP: 100 },
  };

  const mbtiList = Object.entries(mbtiCompatibility[user.mbti.mbti]);

  const session = await auth();
  console.log(session, '------------ProfilePage (server side session)');
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className='p-2'>
      <MainTitle>프로필</MainTitle>
      <Link href={`/${user.id}`}>
        <div className='flex justify-center items-center gap-2 mt-10 mb-10'>
          <Avatar className='w-[70px] h-[70px]'>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>{(session?.user.name || session?.user.email as string).slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <h2 className='font-semibold text-lg'>{session?.user.name || session?.user.email}</h2>
            <p className='text-sm'>{user.mbti.mbti}</p>
          </div>
        </div>
      </Link>
      
      <Button className='w-full mb-10'>프로필 수정</Button>
      <LogoutButton session={session?.user} />
      
      <div className='lg:hidden mt-10'>
        <h2>MBTI 리스트</h2>
        <div className='grid gap-1 flex-wrap grid-cols-2 sm:grid-cols-3'>
          <Button variant={'outline'} className='py-1 px-3 max-h-[30px] font-normal'>전체</Button>
          <Button className='py-1 px-3 max-h-[30px] font-normal'>상위 궁합</Button>
          {mbtiList.map(([key, value]) => (
            <Button key={key} title={key} variant={value >= 80 ? 'default' : 'outline'} className='py-1 px-3 max-h-[30px] font-normal'>
              {key}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}