import {
  IsDate,
  IsNotEmpty,
  IsString,
  IsNumber,
  IsOptional,
} from 'class-validator';

export class CreatePetDetailsDto {
  @IsString()
  @IsNotEmpty()
  Name: string;

  @IsString()
  @IsNotEmpty()
  Breed: string;

  @IsNotEmpty()
  @IsNumber()
  Price: number;

  @IsDate()
  @IsNotEmpty()
  DOB: Date;

  @IsString()
  @IsNotEmpty()
  Color: string;

  @IsString()
  @IsNotEmpty()
  Owner_id: string;
}

export class UpdatePetDetailsDto {
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  Price: number;

  @IsString()
  @IsNotEmpty()
  Owner_id: string;
}
