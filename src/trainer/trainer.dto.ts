import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateTrainerDto {
    @IsNotEmpty()
    name: string;


    @IsNotEmpty()
    location: string;
   
     @IsNumber()
     @IsNotEmpty()
    charge: number;

     @IsNumber()
     @IsNotEmpty()
    contact: number;


     @IsNotEmpty()
    services: string;


    rating: number;
}

    export class UpdateTrainerDto{
    @IsOptional()
    @IsNotEmpty()
    @IsNumber()
    Charge: number;
  
    @IsOptional()
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsOptional()
    @IsNotEmpty()
    @IsString()
    services: string;

    @IsOptional()
    @IsNotEmpty()
    location: string;
}