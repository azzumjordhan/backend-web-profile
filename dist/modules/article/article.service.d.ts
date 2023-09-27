import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { RepoService } from 'src/models/repository/repository.service';
import { Article } from 'src/models/entities/article.entity';
export declare class ArticleService {
    private readonly repoService;
    constructor(repoService: RepoService);
    create(payload: CreateArticleDto): Promise<Article>;
    findAll(options: IPaginationOptions, filter: any): Promise<import("nestjs-typeorm-paginate").Pagination<Article, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<Article>;
    update(id: string, payload: UpdateArticleDto): Promise<Article>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
