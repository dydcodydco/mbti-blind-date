import { IUser } from '@/model/User';
import { faker } from '@faker-js/faker';
import { http, HttpResponse } from 'msw';

export const getDummyUser = (): IUser  => {
  // const imageArr = await Promise.allSettled([getBase64(faker.image.urlLoremFlickr({ category: 'cat' })), getBase64(faker.image.urlLoremFlickr({ category: 'cat' })), getBase64(faker.image.urlLoremFlickr({ category: 'cat' }))]) as any;
  // console.log(imageArr[0].value.img.src);
  return {
    id: faker.string.nanoid(10),
    nickname: faker.internet.userName(),
    age: faker.number.int({ min: 20, max: 50 }),
    tall: faker.number.int({ min: 150, max: 165 }),
    distance: faker.number.int({ min: 5, max: 100 }),
    area: faker.location.city(),
    Images: [
      {
        link: faker.image.urlLoremFlickr({ category: 'cat' }),
        imageId: faker.string.nanoid(10),
      },
      {
        link: faker.image.urlLoremFlickr({ category: 'cat' }),
        imageId: faker.string.nanoid(10),
      },
      {
        link: faker.image.urlLoremFlickr({ category: 'cat' }),
        imageId: faker.string.nanoid(10),
      },
    ],
    mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
    school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
    createdAt: faker.date.anytime(),
  }
}

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
  }),
  http.get('/api/userAll', async () => {
    // faker.seed(123);
    console.log('모든 유저');
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ]);
  }),
  http.get('/api/users/mbti/:mbti', async ({request, params}) => {
    // faker.seed(123);
    console.log('특정 mbti의 유저들');
    const { mbti } = params;
    const mbtiArr = [
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ];
    const filteredMbti = mbtiArr.filter(d => d.mbti.mbti === mbti);
    return HttpResponse.json(filteredMbti);
  }),
  http.get('/api/users/:userId', async ({request, params}) => {
    // faker.seed(123);
    console.log('특정 유저');
    // return HttpResponse.json({message: 'no_such_user'}, {
    //   status: 404,
    // })

    const { userId } = params;
    return HttpResponse.json({
      id: faker.string.nanoid(10),
      nickname: faker.internet.userName(),
      age: faker.number.int({ min: 20, max: 50 }),
      tall: faker.number.int({ min: 150, max: 165 }),
      distance: faker.number.int({ min: 5, max: 100 }),
      area: faker.location.city(),
      Images: [
        {
          link: faker.image.urlLoremFlickr({ category: 'cat' }),
          imageId: faker.string.nanoid(10),
        },
        {
          link: faker.image.urlLoremFlickr({ category: 'cat' }),
          imageId: faker.string.nanoid(10),
        },
        {
          link: faker.image.urlLoremFlickr({ category: 'cat' }),
          imageId: faker.string.nanoid(10),
        },
      ],
      mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
      school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
      createdAt: faker.date.anytime(),
    },);
  }),
  http.get('/api/iLikeUsers', async () => {
    // faker.seed(123);
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ]);
  }),
  http.get('/api/usersLikeMe', async () => {
    // faker.seed(123);
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ]);
  }),
  http.get('/api/search/:tag', ({ request, params }) => {
    const { tag } = params;
    console.log('검색', tag);
    // faker.seed(123);
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          }
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName() + `검색결과 ${tag}`,
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ]);
  }),
  http.get('/api/promiseAll', ({request}) => {
    console.log('모든 약속글');
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
    ])
  }),
  http.get('/api/promise/:userId', ({request, params}) => {
    console.log('특정 유저의 약속글');
    const { userId } = params;
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
      {
        id: faker.string.nanoid(10),
        content: faker.lorem.sentences(1),
        createdAt: faker.date.anytime(),
        area: faker.location.city(),
        Images: faker.helpers.arrayElements([
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
          faker.image.urlLoremFlickr({ category: 'cat' }),
        ], { min: 0, max: 3 }),
        User: {
          id: faker.string.nanoid(10),
          nickname: faker.internet.userName(),
          age: faker.number.int({ min: 20, max: 50 }),
          tall: faker.number.int({ min: 150, max: 165 }),
          distance: faker.number.int({ min: 5, max: 100 }),
          area: faker.location.city(),
          image: [
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
            faker.image.urlLoremFlickr({ category: 'cat' }),
          ],
          mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
          school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
          createdAt: faker.date.anytime(),
        }
      },
    ])
  }),
  http.get('/api/userRecommends', () => {
    console.log('유저 추천');
    // faker.seed(123);
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          }
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ]);
  }),
  http.get('/api/userRandomRecommends', () => {
    console.log('랜덤 유저 추천');
    // faker.seed(123);
    return HttpResponse.json([
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          }
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
      {
        id: faker.string.nanoid(10),
        nickname: faker.internet.userName(),
        age: faker.number.int({ min: 20, max: 50 }),
        tall: faker.number.int({ min: 150, max: 165 }),
        distance: faker.number.int({ min: 5, max: 100 }),
        area: faker.location.city(),
        Images: [
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
          {
            link: faker.image.urlLoremFlickr({ category: 'cat' }),
            imageId: faker.string.nanoid(10),
          },
        ],
        mbti: faker.helpers.arrayElement([{ mbti: 'ESFP', score: 100 }, { mbti: 'ESFP', score: 90 }, { mbti: 'ESFP', score: 80 }]),
        school: faker.helpers.arrayElement(['충남대', '서울대', '연세대', '고려대']),
        createdAt: faker.date.anytime(),
      },
    ]);
  }),
];