import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StockDocument = Stock & Document;

@Schema({ timestamps: true, collection: 'product' })
export class Stock {
  @Prop({ required: true })
  item_name: string;
  @Prop({ required: true })
  quantity: string;
  @Prop({ required: true })
  purchase_price: number;
  @Prop({ required: true })
  sale_price: number;
  @Prop({ required: true })
  item_id: number;
}
export const StockSchema = SchemaFactory.createForClass(Stock);
