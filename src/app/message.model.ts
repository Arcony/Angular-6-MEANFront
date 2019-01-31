import { UserLikes } from './userlikes.model';

export interface Message {
  id: number;
  title: String;
  content: String;
  attachment: String;
  likes: number;
  userId: number;
  Users: [UserLikes];
}
