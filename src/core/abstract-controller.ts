import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { DeepPartial } from 'typeorm';
import { AbstractService } from './abstract-service';

export abstract class AbstractController<T> {
  protected service: AbstractService<T>;

  @Get(':id?')
  async get(@Param('id') id: number) {
    return await this.service.read(id);
  }

  @Post()
  async post(@Body() entity: DeepPartial<T>) {
    return await this.service.create(entity);
  }

  @Put(':id')
  async put(@Param('id') id: number, @Body() user: Partial<T>) {
    return await this.service.update(id, user);
  }

  @Delete(':id')
  async delte(@Param('id') id: number, @Res() res: Response) {
    const result = await this.service.delete(id);
    if (result.success) {
      res.status(HttpStatus.NO_CONTENT).send();
      return;
    }
    res.status(HttpStatus.NOT_FOUND).send();
    return;
  }
}
