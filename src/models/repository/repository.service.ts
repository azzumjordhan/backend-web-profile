import { Injectable } from '@nestjs/common';
import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Article } from '../entities/article.entity';
import { Tech } from '../entities/tech.entity';

@Injectable()
export class RepoService {
  @InjectRepository(Project)
  public readonly projectRepo: Repository<Project>;

  @InjectRepository(Article)
  public readonly articleRepo: Repository<Article>;

  @InjectRepository(Tech)
  public readonly techRepo: Repository<Tech>;
}
