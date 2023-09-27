import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
import { RepoService } from 'src/models/repository/repository.service';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Tech } from 'src/models/entities/tech.entity';
export declare class TechService {
    private readonly repoService;
    constructor(repoService: RepoService);
    create(payload: CreateTechDto): Promise<Tech>;
    findAll(options: IPaginationOptions, filter: any, order_by: any): Promise<import("nestjs-typeorm-paginate").Pagination<Tech, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<Tech>;
    update(id: string, payload: UpdateTechDto): Promise<Tech>;
    remove(id: string): Promise<string>;
}
