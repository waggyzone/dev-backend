import { Optional } from '@nestjs/common';
import {
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  isNotEmpty,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateCartDto {
  @IsOptional()
  user_id: string;
  @IsOptional()
  product_id: string;
  @IsOptional()
  accessories_id: string;
  @IsNotEmpty()
  @IsNumberString()
  count: number;
  @Optional()
  status: string;
}

export class UpdateCartDto extends PartialType(CreateCartDto) {}
