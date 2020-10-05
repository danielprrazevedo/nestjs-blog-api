import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/app/database/database.module';
import { postProvider } from 'src/app/database/entities/post/post.provider';
import { PostService } from './post.service';

@Module({
  imports: [DatabaseModule],
  providers: [PostService, postProvider],
  exports: [PostService, postProvider],
})
export class PostServiceModule {}
