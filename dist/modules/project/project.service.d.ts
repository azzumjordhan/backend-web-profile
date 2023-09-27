/// <reference types="multer" />
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { RepoService } from 'src/models/repository/repository.service';
import { IPaginationOptions } from 'nestjs-typeorm-paginate';
import { Project } from 'src/models/entities/project.entity';
import { MediaService } from '../media/media.service';
export declare class ProjectService {
    private readonly repoService;
    private readonly mediaService;
    constructor(repoService: RepoService, mediaService: MediaService);
    uploadImageToCloudinary(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse | import("cloudinary").UploadApiErrorResponse>;
    create(payload: CreateProjectDto): Promise<Project>;
    findAll(options: IPaginationOptions, filter: any): Promise<import("nestjs-typeorm-paginate").Pagination<Project, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<Project>;
    update(id: string, payload: UpdateProjectDto): Promise<Project>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
