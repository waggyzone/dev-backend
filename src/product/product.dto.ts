import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  brandname: string;
  @IsNotEmpty()
  quantity: string;
  @IsNotEmpty()
  product_id: string;
}
export class UpdateProductDto {
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  brandname: string;
}
