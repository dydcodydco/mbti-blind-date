import {IUser} from "@/model/User";
import { IUserImage } from './UserImage';

export interface Room {
  room: string,
  content: string,
  id: number;
  Sender: string;
  Receiver: string;
  RoomSender: IUser;
  RoomReceiver: IUser;
}