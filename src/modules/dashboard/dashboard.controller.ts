import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { DashboardService } from './dashboard.service';
import { Response } from 'express';

@Controller('dashboard')
@ApiTags('Dashboard Controller')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService) {}

  @Get('/tech')
  async dashboardTech(@Res() res: Response) {
    const result = await this.dashboardService.techStack();

    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Get('/article')
  async dashboardArticle(@Res() res: Response) {
    const result = await this.dashboardService.article();

    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }

  @Get('/project')
  async dashboardProject(@Res() res: Response) {
    const result = await this.dashboardService.project();

    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: result,
    });
  }
}
