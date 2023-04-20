// @ts-check
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true, collection: 'user' })
export class User {
  @Prop({ required: true })
  firstName: string;
  @Prop({ required: false })
  lastName: string;
  @Prop({ required: true })
  age: number;
  @Prop({ required: true })
  username: string;
  @Prop({ required: true, select: false })
  password: string;
  @Prop({ required: true, default: 'user' })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
