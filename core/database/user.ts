import { IBase } from './base';
import { IPost } from './post';

export interface IUser extends IBase {
  name: string;
  username: string;
  password: string;
  posts: IPost[];
}
