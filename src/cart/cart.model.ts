import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type CartDocument = Cart & Document;

@Schema({ timestamps: true, collection: 'cart' })
export class Cart {
  @Prop({ required: true })
  user_id: string;
  @Prop({ required: true })
  product_id: string;
  @Prop({ required: false })
  accessories_id: string;
  @Prop({ required: true })
  count: number;
  @Prop({ required: true })
  status: string;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
