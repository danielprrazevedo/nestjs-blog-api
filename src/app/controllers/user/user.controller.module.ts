import { Module } from '@nestjs/common';
import { UserServiceModule } from 'src/app/services/user/user.service.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [UserServiceModule],
})
export class UserControllerModule {}
