import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePurchaseDto {
    @IsNotEmpty()
   sale_id: string;


    @IsNotEmpty()
    user_id: string;
   
     
     @IsNotEmpty()
    item: string;

     @IsNumber()
     @IsNotEmpty()
    quantity: string;

    @IsNumber()
     @IsNotEmpty()
    price: number;


   
}

    export class UpdatePurchaseDto{
    @IsOptional()
    @IsNotEmpty()

    item: string;
  
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    sale_id: string;

   
}