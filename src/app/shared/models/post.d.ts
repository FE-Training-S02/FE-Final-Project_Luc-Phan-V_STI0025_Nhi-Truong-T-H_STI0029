import { User } from "./user";
export interface Post {
  id: number;
  title: string;
  content: string;
  tags: string[];
  status: string;
  userId: number;
  likes: number;
  comments: number;
  cover: string;
  recommend: boolean;
  user: User;
}
