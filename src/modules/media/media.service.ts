import { Injectable } from '@nestjs/common';
import toStream = require('buffer-to-stream');
import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';

@Injectable()
export class MediaService {
  async uploadImage(
    photo: Express.Multer.File,
  ): Promise<UploadApiResponse | UploadApiErrorResponse> {
    return new Promise((resolve, reject) => {
      const uploadPath = 'web-profile';
      const upload = v2.uploader.upload_stream(
        { folder: uploadPath },
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        },
      );

      toStream(photo.buffer).pipe(upload);
    });
  }
}
