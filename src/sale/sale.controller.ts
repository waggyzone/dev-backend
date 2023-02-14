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
import { CreateSaleDto, UpdateSaleDto } from './sale.dto';
import { SaleService } from './sale.service';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Get('/all')
  async finAllSale() {
    return await this.saleService.findAll();
  }

  @Post('/create')
  async createSaleDetails(@Body() sale: CreateSaleDto) {
    return await this.saleService.create(sale);
  }

  @Put('/update/:id')
  async updateSaleById(@Param('id') id: ObjectId, @Body() sale: UpdateSaleDto) {
    console.log(sale);
    return await this.saleService.findByIdAndUpdate(id, sale);
  }

  // Remove Trainer Details By Id
  @Delete('/remove/:id')
  async removeSaleById(@Param('id') id: ObjectId) {
    return await this.saleService.findByIdAndRemove(id);
  }
}
