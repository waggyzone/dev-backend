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
  name: string;

  @IsString()
  @IsNotEmpty()
  breed: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsDate()
  @IsNotEmpty()
  dob: Date;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsString()
  @IsNotEmpty()
  owner_id: string;
  @IsOptional()
  image: string;
  @IsOptional()
  public_id: string;
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
