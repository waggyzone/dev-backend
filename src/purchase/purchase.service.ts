import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreatePurchaseDto, UpdatePurchaseDto } from './purchase.dto';
import { Purchase, PurchaseDocument } from './purchase.model';

@Injectable()
export class PurchaseService {
  constructor(
    @InjectModel(Purchase.name)
    private purchaseModal: Model<PurchaseDocument>,
  ) {}
  create(purchase: CreatePurchaseDto) {
    return this.purchaseModal.create(purchase);
  }
  findAll() {
    return this.purchaseModal.find({}).exec();
  }

  async findByIdAndUpdate(Theertha: ObjectId, purchase: UpdatePurchaseDto) {
    return await this.purchaseModal.findByIdAndUpdate(Theertha, purchase);
  }
  async findByIdAndRemove(Theertha: ObjectId) {
    return await this.purchaseModal.findByIdAndRemove(Theertha);
  }
}
