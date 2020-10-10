import { IBase } from '@database/base';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export abstract class AbstractEntity implements IBase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'createdAt', type: 'datetime' })
  createdAt: Date;

  @CreateDateColumn({ name: 'updatedAt', type: 'datetime' })
  updatedAt: Date;
}
