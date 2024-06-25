import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { cookies } from 'next/headers';
import cookie from 'cookie';
import { JWT } from '@auth/core/jwt';
import { Session } from 'inspector';
import { AdapterUser } from '@auth/core/adapters';
 
export const { handlers, signIn, signOut, auth, unstable_update, } = NextAuth({
  pages: {
    signIn: '/login',
    newUser: '/signup',
  },
  debug: true, // 디버그 모드 활성화
  callbacks: {
    async jwt(params: any) {
      /* Step 1: update the token based on the user object */
      let { token, user, trigger, session } = params;
      // console.log(params, '--------------------------update the token based on the user object--------------------------');

      if (user?.accessToken) {
        token.accessToken = user.accessToken
      }
      if (trigger === 'update' && session) {
        token = { ...token, ...session.user }
      }

      if (user) {
        // console.log(user, '--------------------auth callback jwt user');
        token.age = user.age;
        token.mbti = user.mbti;
        token.gender = user.gender;
        token.nickname = user.nickname;
        token.region = user.region;
        token.religion = user.religion;
        token.drink = user.drink;
        token.smoke = user.smoke;
        token.school = user.school;
        token.job = user.job;
        token.age = user.age;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }: {session: any, token: any}) {
      /* Step 2: update the session.user based on the token object */
      if (token && session.user) {
        // console.log(token, '---------------------auth callback session token');
        session.user.age = token.age;
        session.user.mbti = token.mbti;
        session.user.gender = token.gender;
        session.user.nickname = token.nickname;
        session.user.region = token.region;
        session.user.religion = token.religion;
        session.user.drink = token.drink;
        session.user.smoke = token.smoke;
        session.user.school = token.school;
        session.user.job = token.job;
        session.user.age = token.age;
        session.user.id = token.id;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          // 백엔드서버로 요청보낼 때 토큰을 쿠키에 넣어서 보내주고 있다.
          console.log(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login ---------------------login api`);
          const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/login`, 
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...credentials
              }),
            }
          );
          
          // 프론트서버에서 백엔드서버의 로그인 토큰을 받아온것. 토큰은 문자열이라서
          // cookie라이브러리로 객체로 만들어준다.
          let setCookie = authResponse.headers.get('Set-Cookie');

          console.log(authResponse, '---------------------------------------------------authResponse');
          console.log(setCookie, '---------------------------------------------------set-cookie');
          if (setCookie) {
            const parsed = cookie.parse(setCookie);
            console.log(parsed, '---------------parsed cookie');
            // 브론트서버에서 브라우저에 쿠키를 심어준다.
            // 프론트서버에 쿠키를 심으면 안된다! 왜냐하면 프론트서버는 서버라서 공용이다.
            // 여러 브라우저가 전부 프론트서버르 바라본다. 개인정보 유출 문제 발생할 수 있다.

            // 쿠키 설정을 위해 필요한 속성을 소문자로 변경
            const cookieOptions = {
              ...parsed,
              httpOnly: true,
              secure: process.env.NEXT_PUBLIC_MODE === 'production',
            } as any;
            if (process.env.NEXT_PUBLIC_MODE === 'production') {
              cookieOptions.domain = '.zzimzzim.com';
            }

            console.log(cookieOptions, '----------------------------------------------cookieOptions');

            cookies().set('connect.sid', parsed['connect.sid'], cookieOptions); // parsed = 나머지 옵션들
          }
          
          console.log(authResponse, '--------------------------------authResponse');
          let user = await authResponse.json();
          console.log(user, '--------------------------------user'); 
          // console.lo(authResponse);
          if (!authResponse.ok) {
            return null;
          }

          // return user object with the their profile data
          return {
            ...user,
            email: user.email,
            name: user.nickname,
            image: user.image,
            id: user.id,
          }
        } catch (err) {
          console.error('로그인 에러', err);
        }
      },
    }),
  ],
})