import { Inject, Injectable } from '@nestjs/common';
import { Post } from 'src/app/database/entities/post/post.entity';
import { postProvider } from 'src/app/database/entities/post/post.provider';
import { AbstractService } from 'src/core/abstract-service';
import { Repository } from 'typeorm';

@Injectable()
export class PostService extends AbstractService<Post> {
  constructor(
    @Inject(postProvider.provide)
    protected readonly repository: Repository<Post>,
  ) {
    super();
  }
}
