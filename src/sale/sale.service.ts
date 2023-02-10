import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateSaleDto, UpdateSaleDto } from './sale.dto';
import { Sale, SaleDocument } from './sale.model';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name)
    private saleModal: Model<SaleDocument>,
  ) {}
  create(sale: CreateSaleDto) {
    return this.saleModal.create(sale);
  }
  findAll() {
    return this.saleModal.find({}).exec();
  }

  async findByIdAndUpdate(Theertha: ObjectId, sale: UpdateSaleDto) {
    return await this.saleModal.findByIdAndUpdate(Theertha, sale);
  }
  async findByIdAndRemove(Theertha: ObjectId) {
    return await this.saleModal.findByIdAndRemove(Theertha);
  }
}
