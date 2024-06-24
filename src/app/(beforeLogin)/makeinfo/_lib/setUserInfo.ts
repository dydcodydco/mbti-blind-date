import { cookies } from 'next/headers';

export const setUserInfo = async (userSettingObj: any) => {
  try {
    const cookieStore = cookies();
    const cookieHeader = cookieStore.getAll().map(cookie => `${cookie.name}=${cookie.value}`).join('; ');
    
    console.log(cookieHeader, '-----------------------------------setUserInfo cookieHeader');
    console.log(userSettingObj, '-----------------------------------setUserInfo userSettingObj');
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/setting`, {
      method: 'PATCH',
      credentials: 'include', // 쿠키 포함
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader // 쿠키를 헤더에 직접 포함
      },
      body: JSON.stringify(userSettingObj),
    });
    
    console.log(response, '-----------------------------------setUserInfo response');
    return response;
  } catch (error) {
    console.error(error);
  }
}