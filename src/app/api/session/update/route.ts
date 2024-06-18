import { NextResponse } from 'next/server';
import { unstable_update } from '@/auth';

export async function POST(req: any) {
  try {
    const body = await req.json();
    console.log(body, '--------------------------------------------------req.body');

    // `unstable_update`를 사용하여 사용자 정보를 업데이트합니다.
    const response = await unstable_update({ user: body.user });
    console.log(response, '----------------------result');
    if (!response) {
      return NextResponse.json({ error: 'Failed to update user in database' }, { status: 500 });
    }

    return NextResponse.json(response.user, { status: 200 });

  } catch (error) {
    console.error('Error updating session:', error);
    return NextResponse.json({ error: 'Failed to update session' }, { status: 500 });
  }
}
