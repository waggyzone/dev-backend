import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessoriesController } from './accessories.controller';
import { Accessories, AccessoriesSchema } from './accessories.model';
import { AccessoriesService } from './accessories.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Accessories.name,
        schema: AccessoriesSchema,
      },
    ]),
  ],
  controllers: [AccessoriesController],
  providers: [AccessoriesService],
})
export class AccessoriesModule {}
