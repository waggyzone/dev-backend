import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateTrainerDto, UpdateTrainerDto } from './trainer.dto';
import { Trainer, TrainerDocument } from './trainer.model';

@Injectable()
export class TrainerService {
  constructor(
    @InjectModel(Trainer.name)
    private trainerModal: Model<TrainerDocument>,
  ) {}
  create(trainer: CreateTrainerDto) {
    return this.trainerModal.create(trainer);
  }
  findAll() {
    return this.trainerModal.find({}).exec();
  }
  async findAllTrainerByPageAndLimit(page: number, limit: number) {
    const _skip = page * limit;

    return this.trainerModal.aggregate([
      {
        $facet: {
          data: [{ $skip: _skip }, { $limit: Number(limit) }],
          pagination: [{ $count: 'total' }],
        },
      },
    ]);
  }
  async findByTriner(trainer: string) {
    return this.trainerModal.find({ name: trainer }).exec();
  }
  async findByLocation(trainer: string) {
    return this.trainerModal.find({ location: trainer }).exec();
  }
  async findByCharge(trainer: number) {
    return this.trainerModal.find({ charge: trainer }).exec();
  }
  async findByServices(trainer: string) {
    return this.trainerModal.find({ services: trainer }).exec();
  }
  async findByIdAndUpdate(Theertha: ObjectId, trainer: UpdateTrainerDto) {
    return await this.trainerModal.findByIdAndUpdate(Theertha, trainer);
  }
  async findByIdAndRemove(Theertha: ObjectId) {
    return await this.trainerModal.findByIdAndRemove(Theertha);
  }
}
