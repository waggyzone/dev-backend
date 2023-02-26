import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateCartDto, UpdateCartDto } from './cart.dto';
import { Cart, CartDocument } from './cart.model';

@Injectable()
export class CartService {

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
