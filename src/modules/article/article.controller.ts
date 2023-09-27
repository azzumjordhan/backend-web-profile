import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  DefaultValuePipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller('article')
@ApiTags('Article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post()
  async create(@Body() body: CreateArticleDto) {
    const create = await this.articleService.create(body);
    return create;
  }

  @Get()
  @ApiQuery({
    name: 'keyword',
    required: false,
  })
  @ApiQuery({
    name: 'page',
    required: false,
  })
  @ApiQuery({
    name: 'limit',
    required: false,
  })
  async findAll(
    @Query('keyword') keyword: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    const result = await this.articleService.findAll(
      {
        page,
        limit,
      },
      {
        keyword,
      },
    );
    return {
      data: result,
      message: 'SUCCESS',
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = this.articleService.findOne(id);
    return result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body: UpdateArticleDto) {
    const update = await this.articleService.update(id, body);
    return update;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.articleService.remove(id);
    return result;
  }
}
