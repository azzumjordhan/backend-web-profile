import { RepoService } from 'src/models/repository/repository.service';
export declare class DashboardService {
    private readonly repoService;
    constructor(repoService: RepoService);
    techStack(): Promise<any>;
    article(): Promise<import("../../models/entities/article.entity").Article[]>;
    project(): Promise<import("../../models/entities/project.entity").Project[]>;
}
