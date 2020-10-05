import { AbstractEntity } from 'src/core/abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Comment extends AbstractEntity {
  @Column({ length: 512 })
  text: string;
}
