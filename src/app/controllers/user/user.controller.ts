import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { User } from 'src/app/database/entities/user/user.entity';
import { UserService } from 'src/app/services/user/user.service';
import { JwtAuthGuard } from 'src/app/utils/auth/jwt-auth.guard';
import { AbstractController } from 'src/core/abstract-controller';

@Controller('user')
export class UserController extends AbstractController<User> {
  constructor(protected service: UserService) {
    super();
  }

  @Get('username-exists/:username')
  async checkUsernameExists(@Param('username') username: string) {
    const user = await this.service.findByUsername(username);
    if (user) {
      return { exists: true };
    }
    return { exists: false };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id?')
  get(@Param('id') id?: string) {
    return super.get(id);
  }

  @Post()
  post(@Body() entity: Partial<User>) {
    return super.post(entity);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  put(@Param('id') id: string, @Body() entity: Partial<User>) {
    return super.put(id, entity);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string, @Res() res: Response) {
    return super.delete(id, res);
  }
}
