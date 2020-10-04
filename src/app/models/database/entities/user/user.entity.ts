import { HttpException, HttpStatus } from '@nestjs/common';
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  Entity,
  getConnection,
  Not,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 200, unique: true })
  username: string;

  @Column({ length: 500 })
  password: string;

  @CreateDateColumn({ name: 'createdAt', type: 'datetime' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updatedAt', type: 'datetime' })
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  async validateUsername() {
    const repository = getConnection().getRepository(User);
    const result = await repository.findOne({
      where: {
        username: this.username,
        id: Not(this.id),
      },
    });
    if (result) {
      throw new HttpException(
        {
          status: HttpStatus.CONFLICT,
          message: 'This username exists in database',
        },
        HttpStatus.CONFLICT,
      );
    }
    return;
  }
}
