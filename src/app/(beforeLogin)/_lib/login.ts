'use server';

import { redirect } from 'next/navigation';
// 서버 컴포넌트에서 로그인할 때 @/auth, 클라이언트 컴포넌트에서 로그인할 때 'next-auth/react'
import { signIn } from '@/auth';

const login = async (prevState: any, formData: FormData) => {
  // 'use server';
  console.log(formData.get('id'));
  
  if (!formData.get('id') || !(formData.get('id') as string)?.trim()) {
    return {message: 'no_id'};
  }
  if (!formData.get('password') || !(formData.get('password') as string)?.trim()) {
    return {message: 'no_password'};
  }
  
  let shouldRedirect = false;
  try {
    // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
    //   method: 'post',
    //   body: formData,
    //   credentials: 'include', // 이게 있어야 쿠키전달된다.
    // });
    // // console.log(response.status);
    // console.log(response.status, await response.json());
    // if (response.status === 403) {
    //   return { message: 'user_no_exists' };
    // }
    const response = await signIn("credentials", {
      id: formData.get("id"),
      password: formData.get("password"),
      redirect: false,
    });
    
    shouldRedirect = true;
  } catch (err) {
    return { message: 'user_no_exists' };
  }

  if (shouldRedirect) {
    redirect('/'); // redirect는 try catch문에 있으면 안된다.
  }
}

export default login