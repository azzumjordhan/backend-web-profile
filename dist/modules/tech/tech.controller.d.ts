import { TechService } from './tech.service';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
import { Response } from 'express';
export declare class TechController {
    private readonly techService;
    constructor(techService: TechService);
    create(body: CreateTechDto, res: Response): Promise<Response<any, Record<string, any>>>;
    findAll(type: string, sort: string, order_by: string, page: number, limit: number, res: Response): Promise<Response<any, Record<string, any>>>;
    findOne(id: string, res: Response): Promise<Response<any, Record<string, any>>>;
    update(id: string, updateTechDto: UpdateTechDto): Promise<import("../../models/entities/tech.entity").Tech>;
    remove(id: string): Promise<string>;
}
