import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MediaModule } from '../media/media.module';

@Module({
  imports: [MediaModule],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
