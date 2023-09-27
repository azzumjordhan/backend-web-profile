import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  Res,
  HttpStatus,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiBody, ApiConsumes, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('project')
@ApiTags('Project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        subtitle: { type: 'string' },
        description: { type: 'string' },
        keyword: { type: 'string' },
        photo: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('photo'))
  async create(
    @UploadedFile() photo: Express.Multer.File,
    @Body() body,
    @Res() res: Response,
  ) {
    let photos = null;
    try {
      photos = await this.projectService.uploadImageToCloudinary(photo);
    } catch (error) {}

    if (photos) {
      body['photo'] = photos.secure_url;
    }

    const project = await this.projectService.create(body);
    return res.status(HttpStatus.CREATED).send({
      message: 'SUCCESS',
      data: project,
    });
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
    @Res() res: Response,
  ) {
    const result = await this.projectService.findAll(
      {
        page,
        limit,
      },
      {
        keyword,
      },
    );
    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: Response) {
    const result = await this.projectService.findOne(id);
    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateProjectDto,
    @Res() res: Response,
  ) {
    const update = await this.projectService.update(id, body);
    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: update,
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const result = await this.projectService.remove(id);
    return result;
  }
}
