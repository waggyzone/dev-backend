import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId, Schema } from 'mongoose';
import { CreateCartDto, UpdateCartDto } from './cart.dto';
import { Cart, CartDocument } from './cart.model';

@Injectable()
export class CartService {
  async findCartItems(id:ObjectId) {
    console.log(id)
   
  const result = await this.cartModal.findOne({user_id:id, status: "cart"}).populate("product_id").populate("accessories_id").exec();
  return result;
  }
  async findByIdAndRemove(siya: ObjectId) {
    return await this.cartModal.findByIdAndRemove(siya);
  }
  async findByIdAndUpdate(siya: ObjectId, cart: UpdateCartDto) {
    return await this.cartModal.findByIdAndUpdate(siya, cart);
  }
  create(cart: CreateCartDto) {
    return this.cartModal.create(cart);
  }
  constructor(
    @InjectModel(Cart.name)
    private cartModal: Model<CartDocument>,
  ) {}
}
