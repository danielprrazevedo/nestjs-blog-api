import { IBase } from './base';
import { IComment } from './comment';
import { IFile } from './file';
import { IUser } from './user';

export interface IPost extends IBase {
  title: string;
  text: string;
  user: IUser;
  cover: IFile;
  comments: IComment[];
}
