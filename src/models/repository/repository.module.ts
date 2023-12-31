import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from '../entities/project.entity';
import { Article } from '../entities/article.entity';
import { RepoService } from './repository.service';
import { Tech } from '../entities/tech.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Project, Article, Tech])],
  providers: [RepoService],
  exports: [RepoService],
})
export class RepoModule {}
