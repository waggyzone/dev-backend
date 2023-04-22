import { Accessories } from '@/accessories/accessories.model';
import { Product } from '@/product/product.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type CartDocument = Cart & Document;

@Schema({ timestamps: true, collection: 'cart' })
export class Cart {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user_id: string;
  @Prop({
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: Product.name,
  })
  product_id: string;
  @Prop({
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: Accessories.name,
  })
  accessories_id: string;
  @Prop({ required: true })
  count: number;
  @Prop({ required: true, default: 'cart' })
  status: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
