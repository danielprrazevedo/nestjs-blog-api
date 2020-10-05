import { AbstractEntity } from 'src/core/abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Post extends AbstractEntity {
  @Column({ length: 256 })
  title: string;

  @Column({ length: 40000 })
  text: string;
}
