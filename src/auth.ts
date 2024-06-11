import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { cookies } from 'next/headers';
import cookie from 'cookie';
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  pages: {
    signIn: '/login',
    newUser: '/signup',
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        id: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          // 백엔드서버로 요청보낼 때 토큰을 쿠키에 넣어서 보내주고 있다.
          const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            }
          );
          
          // 프론트서버에서 백엔드서버의 로그인 토큰을 받아온것. 토큰은 문자열이라서
          // cookie라이브러리로 객체로 만들어준다.
          let setCookie = authResponse.headers.get('Set-Cookie');
          console.log('set-cookie', setCookie);
          if (setCookie) {
            const parsed = cookie.parse(setCookie);
            // 브론트서버에서 브라우저에 쿠키를 심어준다.
            // 프론트서버에 쿠키를 심으면 안된다! 왜냐하면 프론트서버는 서버라서 공용이다.
            // 여러 브라우저가 전부 프론트서버르 바라본다. 개인정보 유출 문제 발생할 수 있다.
            cookies().set('connect.sid', parsed['connect.sid'], parsed); // parsed = 나머지 옵션들
          }

          if (!authResponse.ok) {
            return null;
          }

          let user = await authResponse.json();
          // return user object with the their profile data
          console.log(user, '--------------------------------'); 
          return {
            ...user,
            email: user.id,
            name: user.nickname,
            image: user.image,
          }
        } catch (err) {
          console.error('로그인 에러', err);
        }
      },
    }),
  ],
})