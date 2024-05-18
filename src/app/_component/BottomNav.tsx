import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import style from './nav.module.css';

export default function BottomNav() {
  return (
    <nav className={style.bottomNav}>
      <Link href="#" className="flex items-center justify-center">
          <svg className='lg:mr-2' fill="currentColor" height="24" width="24" role="img" viewBox="0 0 24 24">
            <path d="M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
          <span className='hidden lg:inline-block'>Home</span>
        </Link>
        
        <Link href="#" className="flex items-center justify-center">
          <svg className='lg:mr-2' width="24" height="24" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <rect className='-rotate-6' x="60" y="160" width="700" height="1100" rx="20" ry="20" fill="white" stroke="black" strokeWidth="40" />
            <rect x="300" y="300" width="700" height="1100" rx="20" ry="20" fill="white" stroke="black" strokeWidth="40" />
          </svg>
          <span className='hidden lg:inline-block'>cards</span>
        </Link>
      
        <Link href="#" className="flex items-center justify-center">
          <svg className='lg:mr-2' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
          <span className='hidden lg:inline-block'>people</span>
        </Link>
        
        <Link href="#" className="flex items-center justify-center">
          <svg className='lg:mr-2' width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"/></svg>
          <span className='hidden lg:inline-block'>messages</span>
        </Link>
      
        <Link href="#" className="flex items-center justify-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>ZZ</AvatarFallback>
          </Avatar>
        </Link>
    </nav>
  )
}