import { IBase } from './base';

export interface IFile extends IBase {
  name: string;
  type: string;
  size: number;
}
