import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  firstName: string;
  lastName: string;
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
  @IsOptional()
  role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
export class LoginDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}

export class ChangePasswordDto {
  @IsNotEmpty()
  currentpassword: string;
  @IsNotEmpty()
  changepassword: string;
}
