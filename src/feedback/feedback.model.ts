// @ts-check

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema({ timestamps: true, collection: 'feedback' })
export class Feedback {
  @Prop({ required: true })
  user_id: string;
  @Prop({ required: true, unique: true })
  username: string;
  @Prop({ required: true })
  comment: string;
  @Prop({ required: true })
  rating: number;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
