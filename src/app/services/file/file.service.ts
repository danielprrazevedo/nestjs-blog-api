import { Inject, Injectable } from '@nestjs/common';
import { writeFileSync } from 'fs';
import { File } from 'src/app/database/entities/file/file.entity';
import { fileProvider } from 'src/app/database/entities/file/file.provider';
import { AbstractService } from 'src/core/abstract-service';
import { Repository } from 'typeorm';

@Injectable()
export class FileService extends AbstractService<File> {
  constructor(
    @Inject(fileProvider.provide)
    protected readonly repository: Repository<File>,
  ) {
    super();
  }

  async save(file: Express.Multer.File) {
    const entity = await this.create({
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
    });
    writeFileSync(`files/${entity.id}`, file.buffer);
    return entity;
  }
}
