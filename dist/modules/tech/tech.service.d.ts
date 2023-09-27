import { CreateTechDto } from './dto/create-tech.dto';
import { UpdateTechDto } from './dto/update-tech.dto';
export declare class TechService {
    create(createTechDto: CreateTechDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTechDto: UpdateTechDto): string;
    remove(id: number): string;
}
