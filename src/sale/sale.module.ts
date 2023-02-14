import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleController } from './sale.controller';
import { Sale, SaleSchema } from './sale.model';
import { SaleService } from './sale.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Sale.name,
        schema: SaleSchema,
      },
    ]),
  ],
  controllers: [SaleController],
  providers: [SaleService],
})
export class SaleModule {}
