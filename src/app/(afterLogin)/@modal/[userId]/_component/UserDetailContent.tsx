'use client';

import { Cigarette, FileHeart, GraduationCap, Handshake, MapPin, Pickaxe, Ruler, UserPlus, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserDetailTop from './UserDetailTop';
import UserCaousel from './UsrCarousel';
import { useQuery } from '@tanstack/react-query';
import { getAUser } from '../_lib/getAUser';
import { IUser } from '@/model/User';

type Props = {
  userId: string
}

export default function UserDetailContent({userId}: {userId: string}) {
  const { data: user } = useQuery<IUser, Object, IUser, [_1: string, userId: string]>({
    queryKey: ['users', userId],
    queryFn: getAUser,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  })
  if (!user) return null;

  return (
    <div className='flex flex-col w-full md:w-[600px] xl:w-[800px] md:h-[100dvh] overflow-y-auto overscroll-none'>
        <UserDetailTop user={user} />
        <div className='pb-[80px]'>
          <div>
            <UserCaousel user={user} />
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
        </div>
        <div className='w-full md:w-[600px] lg:max-w-[800px]'>
          <Button variant={'default'} className='fixed bottom-2 w-[95%] md:w-[600px] xl:w-[800px] bg-black'>
            <UserPlus color='#ffffff' />
            <span className='ml-2 text-white font-extrabold'>친구신청</span>
          </Button>
        </div>
      </div>
  )
}