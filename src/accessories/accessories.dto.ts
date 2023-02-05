import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccessoriesDto {
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  size: string;
  color: string;

}
export class UpdateAccessoriesDto{
  @IsNotEmpty()
  name: string;
  @IsNumber()
  @IsNotEmpty()
  price: number;
  @IsNotEmpty()
  size: string;
  color: string;
}