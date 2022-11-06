import { IsNotEmpty,IsNumber } from "class-validator";


export class CreateUserDto {
    @IsNotEmpty()
    firstName:string;
    lastName:string;
    @IsNotEmpty()
    @IsNumber()
    age:number;
}


