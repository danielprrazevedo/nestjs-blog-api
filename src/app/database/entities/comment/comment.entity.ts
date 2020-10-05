import { AbstractEntity } from 'src/core/abstract-entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Post } from '../post/post.entity';
import { User } from '../user/user.entity';

@Entity()
export class Comment extends AbstractEntity {
  @Column({ length: 512 })
  text: string;

  @ManyToOne(
    () => Post,
    post => post.comments,
  )
  post: Post;

  @ManyToOne(() => User, { eager: true })
  user: User;
}
