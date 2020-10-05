import { Module } from '@nestjs/common';
import { FileServiceModule } from 'src/app/services/file/file.service.module';
import { FileController } from './file.controller';

@Module({
  controllers: [FileController],
  imports: [FileServiceModule],
})
export class FileControllerModule {}
