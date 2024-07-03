import { IPost } from './Post';
import { IUserImage } from './UserImage';

interface UserID {
  id: string,
}

interface FollowsID {
  FollowingId?: string,
  FollowerId?: string,
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
  Follows?: FollowsID;
  Posts: IPost[];
  _count: {
    Followers: number;
    Followings: number;
  }
  isFollowEachother?: boolean;
}