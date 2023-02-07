import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateStockDto, UpdateStockDto } from './stock.dto';
import { Stock, StockDocument } from './stock.model';

@Injectable()
export class StockService {
 constructor(
        @InjectModel(Stock.name)
        private stockModal: Model<StockDocument>,
      ) {}
      findAll() {
        return this.stockModal.find({}).exec();
      }
      create(stock: CreateStockDto) {
        return this.stockModal.create(stock);
      }
      async findById(stock: string){
        return this.stockModal.find({item_name: stock}).exec();
      }
        async findByitem(stock: string){
            return this.stockModal.find({item_id: stock}).exec();
        }
        async findByIdAndRemove(siya: ObjectId) {
          return await this.stockModal.findByIdAndRemove(siya);
        }
        async findByIdAndUpdate(siya: ObjectId, stock: UpdateStockDto) {
          return await this.stockModal.findByIdAndUpdate(siya, stock);
        }



    }