import { IUser } from './User';
import { IPostImage } from './postImage';

export interface IPost {
  id: string;
  content: string;
  createdAt: Date;
  Images: IPostImage[];
  User: IUser;
}