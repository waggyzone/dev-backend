import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PurchaseDocument = Purchase & Document;

@Schema({ timestamps: true, collection: 'sale' })
export class Purchase {
  @Prop({ required: true, tyep: mongoose.Schema.Types.ObjectId, ref: 'user' })
  user_id: string;
  @Prop({ required: true })
  item: string;
  @Prop({ required: true })
  quantity: string;
  @Prop({ required: true })
  price: number;
}
export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
