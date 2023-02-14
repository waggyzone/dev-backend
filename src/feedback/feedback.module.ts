import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FeedbackController } from './feedback.controller';
import { Feedback, FeedbackSchema } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Feedback.name,
        schema: FeedbackSchema,
      },
    ]),
  ],
  controllers: [FeedbackController],
  providers: [FeedbackService],
})
export class FeedbackModule {}
