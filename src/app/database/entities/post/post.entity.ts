import { AbstractEntity } from 'src/core/abstract-entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { Comment } from '../comment/comment.entity';
import { File } from '../file/file.entity';
import { User } from '../user/user.entity';

@Entity()
export class Post extends AbstractEntity {
  @Column({ length: 256 })
  title: string;

  @Column({ length: 40000 })
  text: string;

  @ManyToOne(
    () => User,
    user => user.posts,
    { eager: true },
  )
  user: User;

  @ManyToOne(() => File, { eager: true })
  cover: File;

  @OneToMany(
    () => Comment,
    comment => comment.post,
    { eager: true },
  )
  comments: Comment[];
}
