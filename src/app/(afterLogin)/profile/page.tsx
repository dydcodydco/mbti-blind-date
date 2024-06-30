import { faker } from '@faker-js/faker';
import MainTitle from '../_component/MainTitle';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import LogoutButton from '../_component/LogoutButton';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { mbtiCompatibility } from '../_constants/constants';
import MbtiButtonList from '../_component/MbtiButtonList';
import { User } from 'lucide-react';
    
export default async function ProfilePage() {
  const session = await auth();
  const user = session?.user as any;
  const mbtiCompatibilityData = mbtiCompatibility;
  const mbtiList = Object.entries(mbtiCompatibilityData[user?.mbti.toUpperCase()]);
  
  console.log(user?.mbti, '---------------------------ProfilePage user?.mbti');
  console.log(session, '------------ProfilePage (server side session)');
  if (!session?.user) {
    redirect('/login');
  }

  return (
    <div className='p-2'>
      <MainTitle>프로필</MainTitle>
      <Link href={`/tester/${user?.id}`}>
        <div className='flex justify-center items-center gap-2 mt-10 mb-10'>
          <Avatar className='w-[70px] h-[70px]'>
            {user.Images && (user.Images as any)[0]?.src
              ? (<>
                  <AvatarImage src={(user.Images as any)[0]?.src} />
                  <AvatarFallback>{user?.name?.slice(0, 2)}</AvatarFallback>
                </>)
              : <User className='w-[70px] h-[70px] rounded-full' />}
          </Avatar>
          <div>
            <h2 className='font-semibold text-lg'>{session?.user?.name || session?.user?.email}</h2>
            <p className='text-sm'>{user?.mbti}</p>
          </div>
        </div>
      </Link>
      
      <Button className='w-full mb-10'>프로필 수정</Button>
      <LogoutButton session={session?.user} />
      
      <div className='lg:hidden mt-10'>
        <h2 className='mb-3 text-center font-semibold'>MBTI 리스트</h2>
        <div className='grid gap-1 flex-wrap grid-cols-2 sm:grid-cols-3'>
          <MbtiButtonList mbtiList={mbtiList} />
        </div>
      </div>
    </div>
  )
}