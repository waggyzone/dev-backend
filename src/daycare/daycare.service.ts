import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateDaycareDto, UpdateDaycareDto } from './daycare.dto';
import { Daycare, DaycareDocument } from './daycare.model';

@Injectable()
export class DaycareService {
  findByDayacare(daycare: string) {
    throw new Error('Method not implemented.');
  }

  constructor(
    @InjectModel(Daycare.name)
    private daycareModal: Model<DaycareDocument>,
  ) {}
  findAll() {
    return this.daycareModal.find({}).exec();
  }
  create(daycare: CreateDaycareDto) {
    return this.daycareModal.create(daycare);
  }
  async findByDaycare(daycare: string) {
    return this.daycareModal.find({ name: daycare }).exec();
  }
  async findByLocation(daycare: string) {
    return this.daycareModal.find({ location: daycare }).exec();
  }
  async findByCharge(daycare: number) {
    return this.daycareModal.find({ charge: daycare }).exec();
  }
  async findByServices(daycare: string) {
    return this.daycareModal.find({ services: daycare }).exec();
  }
  async findByIdAndUpdate(Theertha: ObjectId, daycare: UpdateDaycareDto) {
    return await this.daycareModal.findByIdAndUpdate(Theertha, daycare);
  }
  async findByIdAndRemove(Theertha: ObjectId) {
    return await this.daycareModal.findByIdAndRemove(Theertha);
  }
}
