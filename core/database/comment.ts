import { IBase } from './base';
import { IPost } from './post';
import { IUser } from './user';

export interface IComment extends IBase {
  text: string;
  post: IPost;
  user: IUser;
}
