import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFeedbackDto {
  @IsNotEmpty()
  user_id: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  comment: string;
  @IsNotEmpty()
  rating: number;
}
