import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema({ timestamps: true, collection: 'product' })
export class Product {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  brandname: string;
  @Prop({ required: true })
  quantity: string;
  @Prop({ required: true })
  product_id: string;
}
export const ProductSchema = SchemaFactory.createForClass(Product);
