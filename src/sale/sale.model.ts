import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { type } from "os";


export type SaleDocument = Sale & Document;

@Schema({ timestamps: true, collection: 'sale' })
export class Sale {
    @Prop({required: true })
    sale_id: string;
    @Prop({ required: true })
    user_id: string;
    @Prop({ required: true })
    item: string;
    @Prop({ required: true })
    quantity: number;
    @Prop({ required: true })
    price: number;
    
}
export const SaleSchema = SchemaFactory.createForClass(Sale);