import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DaycareController } from './daycare.controller';
import { Daycare, DaycareSchema } from './daycare.model';
import { DaycareService } from './daycare.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Daycare.name,
        schema: DaycareSchema,
      },
    ]),
  ],
  controllers: [DaycareController],
  providers: [DaycareService],
})
export class DaycareModule {}
