import { Connection } from 'typeorm';
import { File } from './file.entity';

export const fileProvider = {
  provide: 'FILE_REPOSITORY',
  useFactory: (con: Connection) => con.getRepository(File),
  inject: ['DATABASE_CONNECTION'],
};
