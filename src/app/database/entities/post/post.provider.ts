import { Connection } from 'typeorm';
import { Post } from './post.entity';

export const postProvider = {
  provide: 'POST_REPOSITORY',
  useFactory: (con: Connection) => con.getRepository(Post),
  inject: ['DATABASE_CONNECTION'],
};
