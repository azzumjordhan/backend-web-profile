import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
import { RepoService } from 'src/models/repository/repository.service';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { Tech } from 'src/models/entities/tech.entity';

@Injectable()
export class TechService {
  constructor(private readonly repoService: RepoService) {}

  async create(payload: CreateTechDto) {
    const newTech = await this.repoService.techRepo.create({
      name_tech: payload.name_tech,
      type: payload.type,
      picture: payload.picture,
      priority: payload.priority,
    });
    const saveTech = await this.repoService.techRepo.save(newTech);
    return saveTech;
  }

  async findAll(options: IPaginationOptions, filter, order_by) {
    const { type, sort } = filter;

    switch (order_by) {
      case 'priority':
        order_by = 'tech.priority';
        break;
      default:
        order_by = { 'tech.created_at': 'ASC' };
        break;
    }

    let queryTech = await this.repoService.techRepo
      .createQueryBuilder('tech')
      .orderBy(order_by, sort.toUpperCase() === 'ASC' ? 'ASC' : 'DESC');

    if (type && type != '') {
      queryTech = queryTech.andWhere('tech.type LIKE :filterType', {
        filterType: `%${type}%`,
      });
    }
    return paginate<Tech>(queryTech, options);
  }

  async findTechCategory() {
    const techCategory = await this.repoService.techRepo
      .createQueryBuilder('tech')
      .orderBy('tech.priority')
      .getMany();

    const backend = [];
    const frontend = [];
    const database = [];
    const another_tools = [];
    const current_learning = [];
    techCategory.forEach((data) => {
      if (data.type == 'backend') {
        backend.push(data);
      } else if (data.type == 'frontend') {
        frontend.push(data);
      } else if (data.type == 'database') {
        database.push(data);
      } else if (data.type == 'another') {
        another_tools.push(data);
      } else {
        current_learning.push(data);
      }
    });

    return { backend, frontend, database, another_tools, current_learning };
  }

  async findOne(id: string) {
    const techData = await this.repoService.techRepo.findOne({
      where: { id },
    });
    if (!techData) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          message: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    return techData;
  }

  async update(id: string, payload: UpdateTechDto) {
    const tech = await this.repoService.techRepo.findOne({
      where: { id },
    });

    if (!tech) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          message: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.repoService.techRepo.update(id, payload);
    return await this.repoService.techRepo.findOne({
      where: { id },
    });
  }

  async remove(id: string) {
    const tech = await this.repoService.techRepo.findOne({
      where: { id },
    });

    if (!tech) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error_code: 'DATA_NOT_FOUND',
          message: 'Data Not Found on System',
        },
        HttpStatus.NOT_FOUND,
      );
    }
    await this.repoService.techRepo.softDelete(id);
    return 'DELETED SUCCESSFULLY';
  }
}
