import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { type } from 'os';

export type SaleDocument = Sale & Document;

@Schema({ timestamps: true, collection: 'sale' })
export class Sale {
  @Prop({ required: true, tyep: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user_id: string;
  @Prop({ required: true })
  item: string;
  @Prop({ required: true })
  quantity: string;
  @Prop({ required: true })
  price: number;
}
export const SaleSchema = SchemaFactory.createForClass(Sale);
