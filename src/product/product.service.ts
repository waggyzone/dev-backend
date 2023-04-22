import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.model';
import { Model, ObjectId, Schema } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  async findById(id: Schema.Types.ObjectId) {
    return await this.productModal.find({ _id: id }).exec();
  }
  async findByIdAndRemove(siya: ObjectId) {
    return await this.productModal.findByIdAndRemove(siya);
  }
  async findByIdAndUpdate(siya: ObjectId, product: UpdateProductDto) {
    return await this.productModal.findByIdAndUpdate(siya, product);
  }
  constructor(
    @InjectModel(Product.name)
    private productModal: Model<ProductDocument>,
  ) {}
  findAll() {
    return this.productModal.find({}).exec();
  }
  async findAllProductByPageAndLimit(page: number, limit: number) {
    const _skip = page * limit;
    return await this.productModal.find({}).skip(_skip).limit(limit).exec();
  }
  create(product: CreateProductDto) {
    return this.productModal.create(product);
  }
  async findByProduct(product: string) {
    return this.productModal
      .find({
        name: {
          $regex: product,
          $options: 'i',
        },
      })
      .exec();
  }

  async findByBrandName(product: string) {
    return this.productModal
      .find({
        brandname: {
          $regex: product,
          $options: 'i',
        },
      })
      .exec();
  }
  async findByPrice(product: number) {
    return this.productModal
      .find({
        price: {
          $regex: product,
          $options: 'i',
        },
      })
      .exec();
  }
}

/// axios.post("usrl",data).then((promise) => succesdsata).catch((error) => reject)
