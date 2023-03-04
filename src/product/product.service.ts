import { Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './product.model';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Injectable()
export class ProductService {
  async findByIdAndRemove(siya: ObjectId) {
    return await this.productModal.findByIdAndRemove(siya);
  }
  async findByIdAndUpdate(siya: ObjectId, product: UpdateProductDto) {
    return await this.productModal.findByIdAndUpdate(siya, product);
  }
  constructor(
    @InjectModel(Product.name)
    private productModal: Model<ProductDocument>,
  ) { }
  findAll() {
    return this.productModal.find({}).exec();
  }
  create(product: CreateProductDto) {
    return this.productModal.create(product);
  }
  async findByProduct(product: string) {
    return this.productModal.find({ name: product }).exec();
  }
  async findByBrandName(product: string) {
    return this.productModal.find({ brandname: product }).exec();
  }
  async findByPrice(product: number) {
    return this.productModal.find({ price: product }).exec();

  }
}







/// axios.post("usrl",data).then((promise) => succesdsata).catch((error) => reject)