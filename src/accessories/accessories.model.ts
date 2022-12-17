import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type AccessoriesDocument = Accessories & Document;

@Schema({ timestamps: true, collection: 'accessories' })
export class Accessories {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  size: string;
  @Prop({ required: false })
  color: string;
  @Prop({ required: true })
  price: number;
}

export const AccessoriesSchema = SchemaFactory.createForClass(Accessories);
