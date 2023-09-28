import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  HttpStatus,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
} from '@nestjs/common';
import { TechService } from './tech.service';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('tech')
@ApiTags('Tech Stack')
export class TechController {
  constructor(private readonly techService: TechService) {}

  @Post()
  async create(@Body() body: CreateTechDto, @Res() res: Response) {
    const addTech = await this.techService.create(body);
    return res.status(HttpStatus.CREATED).send({
      message: 'SUCCESS',
      data: addTech,
    });
  }

  @Get()
  @ApiQuery({
    name: 'type',
    required: false,
  })
  @ApiQuery({
    name: 'sort',
    required: false,
  })
  @ApiQuery({
    name: 'order_by',
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
    @Query('type') type: string,
    @Query('sort', new DefaultValuePipe('ASC')) sort: string,
    @Query('order_by', new DefaultValuePipe('')) order_by: string,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Res() res: Response,
  ) {
    const result = await this.techService.findAll(
      {
        page,
        limit,
      },
      { type, sort },
      order_by,
    );
    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Get('category')
  async getTechByCategory(@Res() res: Response) {
    const result = await this.techService.findTechCategory();
    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.techService.findOne(id);
    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTechDto: UpdateTechDto) {
    return this.techService.update(id, updateTechDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const deleteTech = await this.techService.remove(id);
    return deleteTech;
  }
}
