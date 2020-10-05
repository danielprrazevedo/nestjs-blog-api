import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/app/database/database.module';
import { fileProvider } from 'src/app/database/entities/file/file.provider';
import { FileService } from './file.service';

@Module({
  imports: [DatabaseModule],
  providers: [FileService, fileProvider],
  exports: [FileService, fileProvider],
})
export class FileServiceModule {}
