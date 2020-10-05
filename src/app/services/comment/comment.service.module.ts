import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/app/database/database.module';
import { commentProvider } from 'src/app/database/entities/comment/comment.provider';
import { CommentService } from './comment.service';

@Module({
  imports: [DatabaseModule],
  providers: [CommentService, commentProvider],
  exports: [CommentService, commentProvider],
})
export class CommentServiceModule {}
