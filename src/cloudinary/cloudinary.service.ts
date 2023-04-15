import { Injectable } from '@nestjs/common';
import toStream = require('buffer-to-stream');
import { v2 } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  async ImageUpload(file: Express.Multer.File) {
    return await new Promise((resolve, reject) => {
      const _ImageUpload = v2.uploader.upload_stream(
        {
          folder: '/images',
          return_delete_token: true,
        },
        (error, result) => {
          if (error) {
            console.log('eer', error);
            return reject(error);
          }
          console.log('re', result);
          resolve(result);
        },
      );
      toStream(file.buffer).pipe(_ImageUpload);
    });
  }
  async ImageDelete(publicId: string) {
    return await v2.uploader.destroy(publicId);
  }
}
