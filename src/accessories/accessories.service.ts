import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateAccessoriesDto, UpdateAccessoriesDto } from './accessories.dto';
import { Accessories, AccessoriesDocument } from './accessories.model';

@Injectable()
export class AccessoriesService {
  findAccessoriesById(id: string) {
    return this.accessoriesModal.find({ _id: id }).exec();
  }

  async findByIdAndRemove(siya: ObjectId) {
    return await this.accessoriesModal.findByIdAndRemove(siya);
  }
  async findByIdAndUpdate(siya: ObjectId, accessories: UpdateAccessoriesDto) {
    return await this.accessoriesModal.findByIdAndUpdate(siya, accessories);
  }

  findAll() {
    return this.accessoriesModal.find({}).exec();
  }
  async findAllAccessoriesByPageAndLimit(page: number, limit: number) {
    const _skip = page * limit;
    return await this.accessoriesModal.find({}).skip(_skip).limit(limit).exec();
  }
  create(accessories: CreateAccessoriesDto) {
    return this.accessoriesModal.create(accessories);
  }
  async findByAccessories(accessories: string) {
    return this.accessoriesModal
      .find({
        name: {
          $regex: accessories,
          $options: 'i',
        },
      })
      .exec();
  }
  async findBySize(accessories: string) {
    return this.accessoriesModal
      .find({
        size: {
          $regex: accessories,
          $options: 'i',
        },
      })
      .exec();
  }
  async findByPrice(accessories: number) {
    return this.accessoriesModal
      .find({
        price: {
          $regex: accessories,
          $options: 'i',
        },
      })
      .exec();
  }
  constructor(
    @InjectModel(Accessories.name)
    private accessoriesModal: Model<AccessoriesDocument>,
  ) {}
}

/// axios.post("usrl",data).then((promise) => succesdsata).catch((error) => reject)
