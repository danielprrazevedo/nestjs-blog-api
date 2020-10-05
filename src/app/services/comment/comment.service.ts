import { Inject, Injectable } from '@nestjs/common';
import { Comment } from 'src/app/database/entities/comment/comment.entity';
import { commentProvider } from 'src/app/database/entities/comment/comment.provider';
import { AbstractService } from 'src/core/abstract-service';
import { Repository } from 'typeorm';

@Injectable()
export class CommentService extends AbstractService<Comment> {
  constructor(
    @Inject(commentProvider.provide)
    protected readonly repository: Repository<Comment>,
  ) {
    super();
  }
}
