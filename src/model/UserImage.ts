import { IUser } from './User';

export interface IUserImage {
  link: string;
  base64?: string;
  imageId: string;
  User?: IUser;
}