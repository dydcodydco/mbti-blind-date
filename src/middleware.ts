// auth로 로그인 유무알 수 있다.
import { auth } from '@/auth';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const session = await auth();
  console.log('------------------------middleware');
  console.log('session', session);
  console.log('request.nextUrl.pathname', request.nextUrl.pathname);
  if (!session && request.nextUrl.pathname !== '/login' && request.nextUrl.pathname !== '/signup') {
    return NextResponse.redirect('http://localhost:3000/login');
  }

  // 로그인 페이지로 접근 시
  if (session && (request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/signup')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  // return NextResponse.redirect('http://localhost:3000/signup');
  return NextResponse.next();
}

// 미들웨어를 적용할 라우트
export const config = {
  matcher: ['/recommend', '/promise', '/promise/form', '/profile', '/messages', '/like', '/login', '/signup'],
}