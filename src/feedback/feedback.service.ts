import { Injectable } from '@nestjs/common';

import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Feedback, FeedbackDocument } from './feedback.model';
import { CreateFeedbackDto } from './feedback.dto';

@Injectable()
export class FeedbackService {
  async findByIdAndRemove(siya: ObjectId) {
    return await this.feedbackModal.findByIdAndRemove(siya);
  }
 
  constructor(
    @InjectModel(Feedback.name)
    private feedbackModal: Model<FeedbackDocument>,
  ) {}
  
  create(feedback: CreateFeedbackDto) {
    return this.feedbackModal.create(feedback);
  }
 

}







/// axios.post("usrl",data).then((promise) => succesdsata).catch((error) => reject)
