import { DashboardService } from './dashboard.service';
import { Response } from 'express';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    dashboardTech(res: Response): Promise<Response<any, Record<string, any>>>;
    dashboardArticle(res: Response): Promise<Response<any, Record<string, any>>>;
    dashboardProject(res: Response): Promise<Response<any, Record<string, any>>>;
}
