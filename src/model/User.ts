import { IUserImage } from './UserImage';

export interface IUser {
  id: number | string;
  nickname: string;
  age: number;
  tall: number
  distance: number
  area: string;
  Images: IUserImage[];
  mbti: {[key: string]: string | number};
  school: string;
  createdAt: Date;
  email: number | string;
}