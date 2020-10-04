import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/app/services/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/app/models/database/entities/user/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && (await compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: Partial<User>) {
    const entity = await this.validateUser(user.username, user.password);
    if (!entity) {
      throw new UnauthorizedException();
    }
    return {
      access_token: this.jwtService.sign({
        username: entity.username,
        id: entity.id,
      }),
    };
  }
}
