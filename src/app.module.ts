import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './app/models/database/database.module';
import { UserService } from './app/models/services/user/user.service';
import { UserController } from './app/controllers/user/user.controller';
import { userProvider } from './app/models/database/entities/user/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, UserController],
  providers: [AppService, UserService, userProvider],
})
export class AppModule {}
