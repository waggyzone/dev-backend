import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  user_id: string;

  @IsNumber()
  @IsNotEmpty()
  username: number;

  @IsNotEmpty()
  comment: string;
  @IsNotEmpty()
  rating: number;


}

