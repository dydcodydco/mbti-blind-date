'use server';

import { redirect } from 'next/navigation';

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
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
      method: 'post',
      body: formData,
      credentials: 'include', // 이게 있어야 쿠키전달된다.
    });
    // console.log(response.status);
    console.log(response.status, await response.json());
    if (response.status === 403) {
      return { message: 'user_no_exists' };
    }
    shouldRedirect = true;
  } catch (err) {
    console.error(err);
    return;
  }

  if (shouldRedirect) {
    redirect('/'); // redirect는 try catch문에 있으면 안된다.
  }
}

export default login