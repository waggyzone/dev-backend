import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { type } from 'os';

export type TrainerDocument = Trainer & Document;

@Schema({ timestamps: true, collection: 'trainer' })
export class Trainer {
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
export const TrainerSchema = SchemaFactory.createForClass(Trainer);
