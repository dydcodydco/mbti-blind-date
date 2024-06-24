import { setUserInfo } from '@/app/(beforeLogin)/makeinfo/_lib/setUserInfo';
import { NextResponse } from 'next/server';

export async function PATCH(req: any, res: any) {
  try {
      const body = await req.json();
      console.log(body, '--------------------------------------------------api/user/update req.body');
      // const userSettingObj = req.body;
      // console.log(userSettingObj, '--------------------userSettingObj');
      const response = await setUserInfo(body);
      if (!response) {
        return NextResponse.json({ error: 'setUserInfo를호출하는 /api/update에서 에러가 발생했습니다.' }, { status: 500 });
      }
      console.log(response, '--------------------------------------------------api/user/update response');
      // const data = await response.json();
      return NextResponse.json(response, { status: 200 });
    } catch (error) {
      console.error('Error updating session:', error);
      return NextResponse.json({ error: 'Failed to update session' }, { status: 500 });
    }
}