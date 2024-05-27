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
  })
];