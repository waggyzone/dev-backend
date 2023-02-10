import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateFeedbackDto } from './feedback.dto';

import { Feedback } from './feedback.model';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post('/create')
  async createFeedback(@Body() Feedback: CreateFeedbackDto) {
    return await this.feedbackService.create(Feedback);
  }

  //Remove product by Id
  @Delete('/remove/:id')
  async removeFeedbackById(@Param('id') id: ObjectId) {
    return await this.feedbackService.findByIdAndRemove(id);
  }
}
