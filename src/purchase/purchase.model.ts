import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";


export type PurchaseDocument = Purchase & Document;

@Schema({ timestamps: true, collection: 'sale' })
export class Purchase {
    @Prop({required: true })
    sale_id: string;
    @Prop({ required: true })
    user_id: string;
    @Prop({ required: true })
    item: string;
    @Prop({ required: true })
    quantity: string;
    @Prop({ required: true })
    price: number;
    
}
export const PurchaseSchema = SchemaFactory.createForClass(Purchase);