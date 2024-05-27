import { http, HttpResponse } from 'msw';

export const handlers = [
  http.post('/api/login', () => {
    console.log('로그인');

    // return HttpResponse.text(JSON.stringify('user_not_exist'), {
    //   status: 403
    // })

    return HttpResponse.json({
      userId: 1,
      nickname: '찜찜',
      id: 'zzimzzim',
      image: './next.svg'
    }, {
      headers: {
        'Set-Cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/'
      }
    })
  }),
  http.post('/api/logout', () => {
    return new HttpResponse(null, {
      headers: {
        'Set-Cookie': 'connect.sid=;HttpOnly;Path=/;Max-Age=0',
      }
    })
  }),
  http.post('/api/signup', () => {
    console.log('회원가입');
    // return HttpResponse.text(JSON.stringify('user_exist'), {
    //   status: 403
    // })
    return HttpResponse.text(JSON.stringify('ok'), {
      headers: {
        'Set-cookie': 'connect.sid=msw-cookie;HttpOnly;Path=/;Max-Age=0'
      }
    })
  })
];