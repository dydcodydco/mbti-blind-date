'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import style from './nav.module.css';
import { useSelectedLayoutSegment } from 'next/navigation';
import { BookHeart, BookUser, Calendar, CalendarHeart, Heart, MessageCircle, MessageCircleMore, WalletCards } from 'lucide-react';
import { User } from 'next-auth';
import { IUser } from '@/model/User';

export default function BottomNav({session}: {session: User | undefined}) {
  const segment = useSelectedLayoutSegment();
  
  return (
    <nav className={style.bottomNav}>
      <Link href="/" className="flex items-center justify-end flex-col">
        <svg className='lg:mr-2' fill="currentColor" height="24" width="24" role="img" viewBox="0 0 24 24">
          <path fill={!segment ? '#000' : 'none'} d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span className='text-[9px] mt-[2px]'>홈</span>
      </Link>
      
      {session && (
        <>
          <Link href="/recommend" className="flex items-center justify-end flex-col">
            {segment === 'recommend' ? <BookHeart /> : <BookUser />}
            <span className='text-[9px] mt-[2px]'>추천</span>
          </Link>

          <Link href="/promise" className="flex items-center justify-end flex-col">
            {segment === 'promise' ? <CalendarHeart /> : <Calendar /> }
            <span className='text-[9px] mt-[2px]'>약속</span>
          </Link>
          
          <Link href="/like" className="flex items-center justify-end flex-col">
            <Heart fill={segment === 'like' ? '#000': '#fff'} />
            <span className='text-[9px] mt-[2px]'>좋아요</span>
          </Link>
          
          <Link href="/messages" className="flex items-center justify-end flex-col">
            {segment === 'messages' ? <MessageCircleMore /> : <MessageCircle />}
            <span className='text-[9px] mt-[2px]'>채팅</span>
          </Link>
        
          <Link href="/profile" className="flex items-center justify-end flex-col">
            <Avatar className='w-[25px] h-[25px]'>
            <AvatarImage src={((session as IUser)?.Images as any)[0]?.src ? ((session as IUser)?.Images as any)[0].src : 'https://github.com/shadcn.png'} />
              <AvatarFallback>{session.name?.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <span className='text-[9px] mt-[2px]'>프로필</span>
          </Link>
        </>
      )}

    </nav>
  )
}