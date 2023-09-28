import { Injectable } from '@nestjs/common';
import { RepoService } from 'src/models/repository/repository.service';

@Injectable()
export class DashboardService {
  public constructor(private readonly repoService: RepoService) {}

  async techStack() {
    const techData = await this.repoService.techRepo
      .createQueryBuilder('tech')
      .where('tech.type = :type', { type: 'backend' })
      .limit(4)
      .orderBy('tech.priority', 'ASC')
      .getMany();
    return techData;
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
      .limit(4)
      .orderBy('project.created_at', 'DESC')
      .getMany();
    console.log(projectData);

    return projectData;
  }
}
