import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    create(body: CreateArticleDto): Promise<import("../../models/entities/article.entity").Article>;
    findAll(keyword: string, page?: number, limit?: number): Promise<{
        data: import("nestjs-typeorm-paginate").Pagination<import("../../models/entities/article.entity").Article, import("nestjs-typeorm-paginate").IPaginationMeta>;
        message: string;
    }>;
    findOne(id: string): Promise<import("../../models/entities/article.entity").Article>;
    update(id: string, body: UpdateArticleDto): Promise<import("../../models/entities/article.entity").Article>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
