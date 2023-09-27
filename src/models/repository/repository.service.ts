import { Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';

@Injectable()
export class RepoService {
  @InjectRepository(Project)
  public readonly projectRepo: Repository<Project>;

  @InjectRepository(Article)
  public readonly articleRepo: Repository<Article>;
}
