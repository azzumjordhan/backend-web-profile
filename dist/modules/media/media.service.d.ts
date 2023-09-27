/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class MediaService {
    uploadImage(photo: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
}
