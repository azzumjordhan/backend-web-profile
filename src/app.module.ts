import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TechModule } from './modules/tech/tech.module';
import { ArticleModule } from './modules/article/article.module';
import { ProjectModule } from './modules/project/project.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from './ormconfig';
import { RepoModule } from './models/repository/repository.module';
import { MediaModule } from './modules/media/media.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    ProjectModule,
    ArticleModule,
    TechModule,
    RepoModule,
    MediaModule,
    DashboardModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
