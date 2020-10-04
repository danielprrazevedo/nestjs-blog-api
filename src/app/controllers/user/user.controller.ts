import { Controller } from '@nestjs/common';
import { User } from 'src/app/models/database/entities/user/user.entity';
import { UserService } from 'src/app/services/user/user.service';
import { AbstractController } from 'src/core/abstract-controller';

@Controller('user')
export class UserController extends AbstractController<User> {
  constructor(protected service: UserService) {
    super();
  }
}
