/// <reference types="multer" />
import { ProjectService } from './project.service';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Response } from 'express';
export declare class ProjectController {
    private readonly projectService;
    constructor(projectService: ProjectService);
    create(photo: Express.Multer.File, body: any, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(keyword: string, page: number, limit: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findOne(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, body: UpdateProjectDto, res: Response): Promise<Response<any, Record<string, any>>>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
