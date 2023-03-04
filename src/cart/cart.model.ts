import { Accessories } from "@/accessories/accessories.model";
import { Product } from "@/product/product.model";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from "mongoose";



@Schema({ timestamps: true, collection: "cart" })
export class Cart {
  @Prop({ required: true, tyep: mongoose.Schema.Types.ObjectId, ref: "user" })
  userId: string;
  @Prop({ required: true, tyep: mongoose.Schema.Types.ObjectId, ref: "accessories" })
  accessories: Accessories[]
  @Prop({ required: true, tyep: mongoose.Schema.Types.ObjectId, ref: "product" })
  product: Product[]
  @Prop({ required: false, default: "cart" })
  status: string;
  @Prop({ required: false, default: 1 })
  qty: number;

}

export const CartSchema = SchemaFactory.createForClass(Cart);