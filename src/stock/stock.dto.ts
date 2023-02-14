import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty()
  item_name: string;
 

  @IsNumber()
  @IsNotEmpty()
  quantity: string;

  @IsNotEmpty()
 item_id: number;

 @IsNumber()
 @IsNotEmpty()
 purchase_price: number;

 @IsNumber()
 @IsNotEmpty()
 sale_price: number;


}
export class UpdateStockDto{
  @IsNotEmpty()
  item_name: string;
  @IsNumber()
  @IsNotEmpty()
  quandity: string;
  @IsNotEmpty()
  item_id: number;
  @IsNumber()
  @IsNotEmpty()
  purchase_price: number;
  @IsNumber()
  @IsNotEmpty()
  sale_price: number;


}