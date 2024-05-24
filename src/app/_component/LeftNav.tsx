'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import style from './nav.module.css';
import { Calendar, CalendarHeart, Heart, MessageCircleMore, Settings, WalletCards } from 'lucide-react';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function LeftNavMenu() {
  const segment = useSelectedLayoutSegment();
  return (
    <nav className={style.lefNav}>
      <div>
        <Link href="/" className={style.lefNavLink}>
          <span className="hidden lg:block font-bold text-xl">MBTI<span className='text-sm'>가 어떻게 되세요?</span></span>
          <span className="md:block lg:hidden font-extrabold text-center">What is your MBTI</span>
        </Link>

        <Link href="/" className={style.lefNavLink}>
          <svg className='lg:mr-2' fill="currentColor" height="24" width="24" role="img" viewBox="0 0 24 24">
            <path fill={!segment ? '#000' : 'none'} d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span className='hidden lg:inline-block'>홈</span>
        </Link>
        
        <Link href="/recommend" className={style.lefNavLink}>
          <WalletCards className='lg:mr-2' strokeWidth={segment === 'recommend' ? 2.3 : 2} />
          <span className='hidden lg:inline-block'>추천</span>
        </Link>

        <Link href="/promise" className={style.lefNavLink}>
          {segment === 'promise' ? <CalendarHeart className='lg:mr-2' /> : <Calendar className='lg:mr-2' /> }
          <span className='hidden lg:inline-block'>약속</span>
        </Link>
      
        <Link href="/like" className={style.lefNavLink}>
          <Heart className='lg:mr-2' fill={segment === 'like' ? '#000': '#fff'} />
          <span className='hidden lg:inline-block'>좋아요</span>
        </Link>
        
        <Link href="/messages" className={style.lefNavLink}>
          <MessageCircleMore className='lg:mr-2' strokeWidth={segment === 'messages' ? 2.5 : 2} />
          <span className='hidden lg:inline-block'>채팅</span>
        </Link>
      
        <Link href="/profile" className={style.lefNavLink}>
          <Avatar className='w-[25px] h-[25px] lg:mr-2'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ZZ</AvatarFallback>
          </Avatar>
          <span className='hidden lg:inline-block'>프로필</span>
        </Link>
      </div>

      <Link href="/setting" className={style.lefNavLink}>
        <Settings className='lg:mr-2' fill={segment === 'setting' ? '#000': '#fff'} />
        <span className='hidden lg:inline-block'>세팅</span>
      </Link>
    </nav>
  )
}