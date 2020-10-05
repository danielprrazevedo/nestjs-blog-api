import { Controller, UseGuards } from '@nestjs/common';
import { Comment } from 'src/app/database/entities/comment/comment.entity';
import { CommentService } from 'src/app/services/comment/comment.service';
import { JwtAuthGuard } from 'src/app/utils/auth/jwt-auth.guard';
import { AbstractController } from 'src/core/abstract-controller';

@UseGuards(JwtAuthGuard)
@Controller('comment')
export class CommentController extends AbstractController<Comment> {
  constructor(protected readonly service: CommentService) {
    super();
  }
}
