import { AbstractEntity } from 'src/core/abstract-entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class File extends AbstractEntity {
  @Column({ length: 100 })
  name: string;

  @Column({ length: 50 })
  type: string;

  @Column({ type: 'int' })
  size: number;
}
