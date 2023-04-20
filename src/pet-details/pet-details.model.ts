// @ts-check

import { User } from '@/user/user.model';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

export type PetaDetailsDocument = PetDetails & Document;

@Schema({ timestamps: true, collection: 'petdetails' })
export class PetDetails {
  @Prop({ required: true })
  Name: string;
  @Prop({ required: true, unique: true })
  Breed: string;
  @Prop({ required: true })
  Price: number;
  @Prop({ required: true })
  DOB: Date;
  @Prop({ required: true })
  Color: string;
  @Prop({
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  Owner_id: string;
}

export const PetDetailsSchema = SchemaFactory.createForClass(PetDetails);
