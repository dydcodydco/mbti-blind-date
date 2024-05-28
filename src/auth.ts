import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
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
          console.log(credentials, '-------------------credentials');
          const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          })
          
          console.log(authResponse.ok, '-----------------------------authResponse.ok');
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