import { Connection } from 'typeorm';
import { Comment } from './comment.entity';

export const commentProvider = {
  provide: 'COMMENT_REPOSITORY',
  useFactory: (con: Connection) => con.getRepository(Comment),
  inject: ['DATABASE_CONNECTION'],
};
