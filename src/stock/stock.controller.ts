import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { SaleService } from 'src/sale/sale.service';
import { CreateStockDto, UpdateStockDto } from './stock.dto';
import { StockService } from './stock.service';

@Controller('stock')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get('/all')
  async findAllStock() {
    return await this.stockService.findAll();
  }

  @Post('/create')
  async createStockDetails(@Body() stock: CreateStockDto) {
    return await this.stockService.create(stock);
  }

  @Put('/update/:id')
  async updateStockById(
    @Param('id') id: ObjectId,
    @Body() stock: UpdateStockDto,
  ) {
    console.log(stock);
    return await this.stockService.findByIdAndUpdate(id, stock);
  }

  // Remove Trainer Details By Id
  @Delete('/remove/:id')
  async removeStockById(@Param('id') id: ObjectId) {
    return await this.stockService.findByIdAndRemove(id);
  }
}
