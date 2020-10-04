import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/app/database/database.module';
import { userProvider } from 'src/app/database/entities/user/user.provider';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule],
  providers: [UserService, userProvider],
  exports: [UserService, userProvider],
})
export class UserServiceModule {}
