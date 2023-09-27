import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { RepoService } from 'src/models/repository/repository.service';
import { Article } from 'src/models/entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(private readonly repoService: RepoService) {}

  async create(payload: CreateArticleDto) {
    const addArticle = await this.repoService.articleRepo.create({
      title: payload.title,
      description: payload.description,
      keyword: payload.keyword,
      image: payload.image,
    });

    const saveArticle = await this.repoService.articleRepo.save(addArticle);
    return saveArticle;
  }

  async findAll(options: IPaginationOptions, filter) {
    const { keyword } = filter;
    let queryArticle = await this.repoService.articleRepo.createQueryBuilder(
      'article',
    );

    if (keyword && keyword != '') {
      queryArticle = queryArticle.andWhere('article.title LIKE :filter', {
        filter: `%${keyword}%`,
      });
    }

    return paginate<Article>(queryArticle, options);
  }

  async findOne(id: string) {
    const getArticleById = await this.repoService.articleRepo.findOne({
      where: { id },
    });

    if (!getArticleById) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          mesaage: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return getArticleById;
  }

  async update(id: string, payload: UpdateArticleDto) {
    const getArticleById = await this.repoService.articleRepo.findOne({
      where: { id },
    });

    if (!getArticleById) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          mesaage: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.repoService.articleRepo.update(id, payload);

    return await this.repoService.articleRepo.findOne({ where: { id } });
  }

  async remove(id: string) {
    const getArticleById = await this.repoService.articleRepo.findOne({
      where: { id },
    });

    if (!getArticleById) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          mesaage: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.repoService.articleRepo.softDelete(id);

    return {
      message: 'DELETED SUCCESSFULLY',
    };
  }
}
