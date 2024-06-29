import { IUser } from './User';

export interface IUserImage {
  src: string;
  base64?: string;
  id: string;
  User?: IUser;
}