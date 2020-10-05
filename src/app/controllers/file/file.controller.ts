import {
  Controller,
  Get,
  Param,
  Post,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from 'src/app/services/file/file.service';
import { readFileSync } from 'fs';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/app/utils/auth/jwt-auth.guard';

@Controller('file')
export class FileController {
  constructor(private service: FileService) {}

  @Get(':id')
  async get(@Param('id') id: string, @Res() res: Response) {
    const file = readFileSync(`files/${id}`);

    const entity = await this.service.read(id);

    res
      .contentType(entity.type)
      .append('Content-Disposition', `filename="${entity.name}"`)
      .send(file);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.service.save(file);
  }
}
