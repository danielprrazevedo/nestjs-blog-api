import { Module } from '@nestjs/common';
import { CommentServiceModule } from 'src/app/services/comment/comment.service.module';
import { CommentController } from './comment.controller';

@Module({
  controllers: [CommentController],
  imports: [CommentServiceModule],
})
export class CommentControllerModule {}
