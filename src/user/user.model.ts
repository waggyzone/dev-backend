// @ts-check
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({timestamps:true, collection: 'user'})
export class User {
    @Prop({required: true})
    firstName: string;
    @Prop({required: false})
    lastName: string;
    @Prop({required: true})
    age: Number;
}

export const UserSchema = SchemaFactory.createForClass(User);


