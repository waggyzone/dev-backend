import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaycareDocument = Daycare & Document;

@Schema({ timestamps: true, collection: 'daycare' })
export class Daycare {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  location: string;
  @Prop({ required: true })
  charge: number;
  @Prop({ required: true })
  contact: number;
  @Prop({ required: true })
  services: string;
  @Prop({ required: false })
  rating: number;
}
export const DaycareSchema = SchemaFactory.createForClass(Daycare);