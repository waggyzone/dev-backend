import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCartDto {

  @IsString()
  @IsNotEmpty()
  user_id: string;
    
  
  @IsString()
  @IsNotEmpty()
  product_id: string;
    
  
  @IsString()
  @IsNotEmpty()
  accessories_id: string;
    
  @IsNotEmpty()
  @IsNumber()
  count: number;
   
   @IsNotEmpty()
   @IsString()
   status: string;


    
    


}
export class UpdateCartDto {
  @IsString()
  @IsNotEmpty()
  user_id: string;
    
  
  @IsString()
  @IsNotEmpty()
  product_id: string;
    
  
  @IsString()
  @IsNotEmpty()
  accessories_id: string;
    
  @IsNotEmpty()
  @IsNumber()
  count: number;
   
   @IsNotEmpty()
   @IsString()
   status: string;

}