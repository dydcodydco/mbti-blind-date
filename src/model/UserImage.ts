import { IUser } from './User';

export interface IUserImage {
  link: string;
  imageId: string;
  User?: IUser;
}