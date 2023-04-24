import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateTrainerDto, UpdateTrainerDto } from './trainer.dto';
import { TrainerService } from './trainer.service';

@Controller('trainer')
export class TrainerController {
  constructor(private readonly trainerService: TrainerService) {}

  @Get('/all')
  async finAllTrainer() {
    return await this.trainerService.findAll();
  }
@Get('/all/:page/:limit')
  async getAllTrainerBySize(
    @Param('page') page: number,
    @Param('limit') limit: number,
  ) {
    return await this.trainerService.findAllTrainerByPageAndLimit(page, limit);
  }
  @Post('/create')
  async createGroomerDetails(@Body() trainer: CreateTrainerDto) {
    return await this.trainerService.create(trainer);
  }
  @Get('/find/name/:trainer')
  async findGroomerByName(@Param('trainer') trainer: string) {
    return await this.trainerService.findByTriner(trainer);
  }
  @Get('/find/location/:place')
  async asyncfindTrainerByLocation(@Param('place') trainer: string) {
    return await this.trainerService.findByLocation(trainer);
  }
  @Get('/find/charge/:cost')
  async findrainerByCharge(@Param('cost') trainer: number) {
    return await this.trainerService.findByCharge(trainer);
  }
  @Get('/find/services/:service')
  async findTrainerByServices(@Param('service') trainer: string) {
    return await this.trainerService.findByServices(trainer);
  }
  @Put('/update/:id')
  async updateTrainerById(
    @Param('id') id: ObjectId,
    @Body() trainer: UpdateTrainerDto,
  ) {
    console.log(trainer);
    return await this.trainerService.findByIdAndUpdate(id, trainer);
  }

  // Remove Trainer Details By Id
  @Delete('/remove/:id')
  async removeTrainerById(@Param('id') id: ObjectId) {
    return await this.trainerService.findByIdAndRemove(id);
  }
}
