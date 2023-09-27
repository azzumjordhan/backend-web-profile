import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { RepoService } from 'src/models/repository/repository.service';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Project } from 'src/models/entities/project.entity';
import { MediaService } from '../media/media.service';

@Injectable()
export class ProjectService {
  public constructor(
    private readonly repoService: RepoService,
    private readonly mediaService: MediaService,
  ) {}

  async uploadImageToCloudinary(file: Express.Multer.File) {
    return await this.mediaService.uploadImage(file).catch(() => {
      throw new BadRequestException('Invalid file type.');
    });
  }

  async create(payload: CreateProjectDto) {
    const addProject = await this.repoService.projectRepo.create({
      title: payload.title,
      subtitle: payload.subtitle,
      description: payload.description,
      keyword: payload.keyword,
      image: payload.photo,
    });
    const saveProject = await this.repoService.projectRepo.save(addProject);
    return saveProject;
  }

  async findAll(options: IPaginationOptions, filter) {
    const { keyword } = filter;
    let queryProject = await this.repoService.projectRepo.createQueryBuilder(
      'project',
    );

    if (keyword && keyword != '') {
      queryProject = queryProject.andWhere('project.title LIKE :filter', {
        filter: `%${keyword}%`,
      });
    }

    return paginate<Project>(queryProject, options);
  }

  async findOne(id: string) {
    const getProject = await this.repoService.projectRepo.findOne({
      where: { id },
    });

    if (!getProject) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          message: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    return getProject;
  }

  async update(id: string, payload: UpdateProjectDto) {
    const updateProject = await this.repoService.projectRepo.findOne({
      where: { id },
    });

    if (!updateProject) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          message: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.repoService.projectRepo.update(id, payload);

    return await this.repoService.projectRepo.findOne({ where: { id } });
  }

  async remove(id: string) {
    const deleteProject = await this.repoService.projectRepo.findOne({
      where: { id },
    });

    if (!deleteProject) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          message: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }

    await this.repoService.projectRepo.softDelete(id);

    return {
      message: 'DELETE SUCCESSFULLY',
    };
  }
}
