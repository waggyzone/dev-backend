import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StockController } from './stock.controller';
import { Stock, StockSchema } from './stock.model';
import { StockService } from './stock.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Stock.name,
        schema: StockSchema,
      },
    ]),
  ],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
