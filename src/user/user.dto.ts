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
  role:string;
}

export class UpdateUserDto {

  @IsNotEmpty()
  @IsOptional()
  firstName: string;
  @IsOptional()
  lastName: string;
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  age: number;
  @IsOptional()
  role:string;
}
export class LoginDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  password: string;
}
