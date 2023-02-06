import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchaseController } from './purchase.controller';
import { Purchase, PurchaseSchema } from './purchase.model';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Purchase.name,
        schema: PurchaseSchema,
      },
    ]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}