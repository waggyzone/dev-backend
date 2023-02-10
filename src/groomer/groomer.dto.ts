import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateGroomerDto {
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
export class UpdateGroomerDto {
  @IsOptional()
  @IsNumber()
  Charge: number;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  services: string;

  @IsOptional()
  location: string;
}
