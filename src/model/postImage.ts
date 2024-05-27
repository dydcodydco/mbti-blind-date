import { IPost } from './Post';

export interface IPostImage {
  link: string;
  imageId: string;
  base64?: string;
  Post?: IPost;
}