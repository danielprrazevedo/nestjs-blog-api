import { Controller, UseGuards } from '@nestjs/common';
import { Post } from 'src/app/database/entities/post/post.entity';
import { PostService } from 'src/app/services/post/post.service';
import { JwtAuthGuard } from 'src/app/utils/auth/jwt-auth.guard';
import { AbstractController } from 'src/core/abstract-controller';

@UseGuards(JwtAuthGuard)
@Controller('post')
export class PostController extends AbstractController<Post> {
  constructor(protected service: PostService) {
    super();
  }
}
