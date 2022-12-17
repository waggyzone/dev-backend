import { Module } from '@nestjs/common';
import { PetDetailsService } from './pet-details.service';
import { PetDetailsController } from './pet-details.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PetDetails, PetDetailsSchema } from './pet-details.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PetDetails.name,
        schema: PetDetailsSchema,
      },
    ]),
  ],
  controllers: [PetDetailsController],
  providers: [PetDetailsService],
})
export class PetDetailsModule {}

