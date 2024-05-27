import { IPost } from './Post';

export interface IPostImage {
  link: string;
  imageId: string;
  Post?: IPost;
}