// @ts-check

import { User } from '@/user/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PetaDetailsDocument = PetDetails & Document;

@Schema({ timestamps: true, collection: 'petdetails' })
export class PetDetails {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true, unique: true })
  breed: string;
  @Prop({ required: true })
  price: number;
  @Prop({ required: true })
  dob: Date;
  @Prop({ required: true })
  color: string;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  owner_id: string;
  @Prop({ required: false })
  image: string;
  @Prop({ required: false })
  public_id: string;
}

export const PetDetailsSchema = SchemaFactory.createForClass(PetDetails);
