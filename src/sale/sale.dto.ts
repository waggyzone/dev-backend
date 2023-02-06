import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateSaleDto {
    @IsNotEmpty()
   sale_id: string;


    @IsNotEmpty()
    user_id: string;
   
     
     @IsNotEmpty()
    item: string;

     @IsNumber()
     @IsNotEmpty()
    quantity: number;

    @IsNumber()
     @IsNotEmpty()
    price: number;


   
}

    export class UpdateSaleDto{
    @IsOptional()
    @IsNotEmpty()

    item: string;
  
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    sale_id: string;

   
}