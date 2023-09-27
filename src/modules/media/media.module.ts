import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MediaProvider } from './media.provider';

@Module({
  controllers: [MediaController],
  providers: [MediaProvider, MediaService],
  exports: [MediaService],
})
export class MediaModule {}
