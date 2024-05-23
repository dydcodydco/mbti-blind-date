import Link from 'next/link';
import style from './nav.module.css';
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from 'lucide-react';

export default function TopNav() {
  return (
    <nav className={style.topNav}>
      <Link href={'/'}>
        <h1>MBTI</h1>
        <span>가 어떻게 되세요?</span>
      </Link>
      
      

      <div className='flex items-center gap-1'>
        <Link href="#">
          <SlidersHorizontal />
        </Link>

        {/* <Button asChild variant='outline'>
          <Link href={'/login'}>
            로그인
          </Link>
        </Button>

        <Button asChild variant='outline'>
          <Link href={'/signup'}>
            회원가입
          </Link>
        </Button> */}
      </div>
    </nav>
  )
}