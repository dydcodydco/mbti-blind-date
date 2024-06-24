// auth로 로그인 유무알 수 있다.
import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = await auth();
  console.log('------------------------middleware');
  console.log(session, '---------------------middleware session');
  console.log(session?.user, '---------------------middleware session user');
  console.log('request.nextUrl.pathname', request.nextUrl.pathname);
  console.log('--------------------------------------------------------');
  
  const path = request.nextUrl.pathname;

  // 로그인되지 않은 사용자는 로그인 페이지로 리디렉션
  if (!session && path !== '/login' && path !== '/signup') {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // 가입은 했지만 유저 정보 세팅 하지 않았을 때,
  if (session && !(session?.user as any)?.age && ['/recommend', '/promise', '/promise/form', '/messages', '/like', '/login', '/signup', '/', '/mbti', '/user', '/home'].includes(path)) {
    return NextResponse.redirect(new URL('/makeinfo', request.url));
  }

  // 유저 정보 세팅되어있는데 유저세팅 화면에으로 갈 때
  if (session && (session?.user as any)?.age && path === '/makeinfo') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // 로그인 페이지로 접근 시
  if (session && (path === '/login' || path === '/signup')) {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  if (path === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  console.log(path, '---------------------------------------4');
  // return NextResponse.redirect('http://localhost:3000/signup');
  return NextResponse.next();
}

// 미들웨어를 적용할 라우트
export const config = {
  matcher: ['/recommend', '/promise', '/promise/form', '/profile', '/messages', '/like', '/login', '/signup', '/usersetting', '/', '/mbti', '/user', '/makeinfo', '/home'],
}