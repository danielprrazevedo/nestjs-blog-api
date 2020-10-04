import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/app/models/database/entities/user/user.entity';
import { userProvider } from 'src/app/models/database/entities/user/user.provider';
import { AbstractService } from 'src/core/abstract-service';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends AbstractService<User> {
  constructor(
    @Inject(userProvider.provide)
    protected repository: Repository<User>,
  ) {
    super();
  }

  async findByUsername(username: string) {
    return await this.repository.findOne({
      where: {
        username: username,
      },
    });
  }
}
