import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroomerController } from './groomer.controller';
import { Groomer, GroomerSchema } from './groomer.model';
import { GroomerService } from './groomer.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Groomer.name,
        schema: GroomerSchema,
      },
    ]),
  ],
  controllers: [GroomerController],
  providers: [GroomerService],
})
export class GroomerModule {}
