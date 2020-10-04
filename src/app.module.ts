import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserControllerModule } from './app/controllers/user/user.controller.module';
import { DatabaseModule } from './app/database/database.module';
import { UserServiceModule } from './app/services/user/user.service.module';
import { AuthModule } from './app/utils/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    UserControllerModule,
    UserServiceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
