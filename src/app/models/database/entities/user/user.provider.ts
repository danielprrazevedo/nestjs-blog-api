import { Connection } from 'typeorm';
import { User } from './user.entity';

export const userProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (con: Connection) => con.getRepository(User),
  inject: ['DATABASE_CONNECTION'],
};
