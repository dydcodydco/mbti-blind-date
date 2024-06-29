import { Cigarette, FileHeart, GraduationCap, Handshake, MapPin, Pickaxe, Ruler, Wine } from 'lucide-react';
import UserCaousel from './UsrCarousel';
import { IUser } from '@/model/User';
import { mbtiCompatibility } from '@/app/(afterLogin)/_constants/constants';
import { Session } from 'next-auth';

type Props = { user: IUser, session: Session | null };

export default function UserInfo({ user, session }: Props) {
  const mbtiData = mbtiCompatibility[(session?.user as IUser)?.mbti.toUpperCase()][user?.mbti.toUpperCase()];
  return (
    <div className='pb-[80px]'>
      <div>
        <UserCaousel user={user} />
      </div>
      <h1 className='font-bold text-xl sm:text-2xl mt-2 break-all'>
        {user.nickname}, {user?.age}
      </h1>
      <p className='flex items-center mt-2'>
      <FileHeart className='mr-1' size={20} /> {user?.mbti?.toUpperCase()}, 궁합: {mbtiData}%
      </p>
      <p className='flex items-center mt-2'>
        <MapPin className='mr-1' size={20} /> {user?.region}
      </p>
      <div className='grid grid-cols-2'>
        <span className='flex items-center mt-2'>
          <Ruler className='mr-1' size={20} /> {user?.tall}cm
        </span>
        <span className='flex items-center mt-2'>
          <GraduationCap className='mr-1' size={20} /> {user?.school}
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
    </div>
  )
}