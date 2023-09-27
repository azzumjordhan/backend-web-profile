import { Project } from '../entities/project.entity';
import { Repository } from 'typeorm';
import { Article } from '../entities/article.entity';
export declare class RepoService {
    readonly projectRepo: Repository<Project>;
    readonly articleRepo: Repository<Article>;
}
