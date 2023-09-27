import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/models/repository/repository.service';

@Injectable()
export class DashboardService {
  public constructor(private readonly repoService: RepoService) {}

  async techStack() {
    return null;
  }

  async article() {
    const articleData = await this.repoService.articleRepo
      .createQueryBuilder('article')
      .limit(3)
      .orderBy('article.created_at', 'DESC')
      .getMany();
    console.log(articleData);

    return articleData;
  }

  async project() {
    const projectData = await this.repoService.projectRepo
      .createQueryBuilder('project')
      .limit(3)
      .orderBy('project.created_at', 'DESC')
      .getMany();
    console.log(projectData);

    return projectData;
  }
}
