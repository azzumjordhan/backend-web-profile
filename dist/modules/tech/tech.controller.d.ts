import { TechService } from './tech.service';
import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
export declare class TechController {
    private readonly techService;
    constructor(techService: TechService);
    create(createTechDto: CreateTechDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTechDto: UpdateTechDto): string;
    remove(id: string): string;
}
