/// <reference types="multer" />
import { MediaService } from './media.service';
import { Response } from 'express';
export declare class MediaController {
    private readonly mediaService;
    constructor(mediaService: MediaService);
    uploadImage(photo: Express.Multer.File, res: Response): Promise<Response<any, Record<string, any>>>;
}
