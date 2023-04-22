import {
  BadRequestException,
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CloudinaryService } from './cloudinary.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('file')
export class CloudinaryController {
  constructor(private readonly cloudinaryService: CloudinaryService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async Upload(@UploadedFile() file: Express.Multer.File) {
    return await this.cloudinaryService.ImageUpload(file).catch((error) => {
      throw new BadRequestException(`${error}`);
    });
  }

  @Delete(':id')
  async Destory(@Param('id') id: string) {
    return await this.cloudinaryService
      .ImageDelete('images/'.concat(id))
      .catch((error) => {
        throw new BadRequestException(`${error}`);
      });
  }
}
