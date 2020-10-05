import { Module } from '@nestjs/common';
import { PostServiceModule } from 'src/app/services/post/post.service.module';
import { PostController } from './post.controller';

@Module({
  controllers: [PostController],
  imports: [PostServiceModule],
})
export class PostControllerModule {}
