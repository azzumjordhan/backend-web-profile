import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Res,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller()
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  @Post('upload-image')
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        photo: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @UseInterceptors(FileInterceptor('photo'))
  async uploadImage(
    @UploadedFile() photo: Express.Multer.File,
    @Res() res: Response,
  ) {
    let photos = null;
    try {
      photos = await this.mediaService.uploadImage(photo).catch(() => {
        throw new BadRequestException('Invalid File Type.');
      });
    } catch (error) {}

    if (photos) {
      photos = photos.secure_url;
    }

    return res.status(HttpStatus.OK).send({
      message: 'SUCCESS',
      data: photos,
    });
  }
}
