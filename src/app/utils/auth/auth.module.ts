import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserServiceModule } from 'src/app/services/user/user.service.module';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
  imports: [
    UserServiceModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      verifyOptions: { ignoreExpiration: true },
    }),
  ],
})
export class AuthModule {}
