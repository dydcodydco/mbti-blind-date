import { IUserImage } from './UserImage';

interface UserID {
  id: string,
}

export interface IUser {
  id: number | string;
  nickname: string;
  age: number;
  tall: number
  distance: number
  area: string;
  Images: IUserImage[];
  mbti: string;
  region: string;
  school: string;
  createdAt: Date;
  email: number | string;
  Followers: UserID[];
  Followings: UserID[];
  _count: {
    Followers: number;
    Followings: number;
  }
}