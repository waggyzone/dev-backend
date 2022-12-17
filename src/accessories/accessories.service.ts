import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accessories, AccessoriesDocument } from './accessories.model';

@Injectable()
export class AccessoriesService {
  constructor(
    @InjectModel(Accessories.name)
    private accessoriesModal: Model<AccessoriesDocument>,
  ) {}
  findAll() {
    return this.accessoriesModal.find({}).exec();
  }
}