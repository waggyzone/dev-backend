import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId} from 'mongoose';
import { CreateGroomerDto, UpdateGroomerDto } from './groomer.dto';
import { Groomer, GroomerDocument } from './groomer.model';

@Injectable()
export class GroomerService {
   
    constructor(
        @InjectModel(Groomer.name)
        private groomerModal: Model<GroomerDocument>,
    ){}
    findAll() {
        return this.groomerModal.find({}).exec();
    }
    create(groomer: CreateGroomerDto) {
        return this.groomerModal.create(groomer);
    }
    async findByGroomer(groomer: string) {
        return this.groomerModal.find({name: groomer }).exec();
    }
    async findByLocation(groomer: string) {
        return this.groomerModal.find({ location:groomer }).exec();
    }
    async findByCharge(groomer: number) {
        return this.groomerModal.find({charge: groomer}).exec();
    }
    async findByServices(groomer: string) {
        return this.groomerModal.find({services: groomer}).exec();
    }
    async findByIdAndUpdate(Theertha: ObjectId, groomer: UpdateGroomerDto) {
        return await this.groomerModal.findByIdAndUpdate(Theertha, groomer);
    }
    async findByIdAndRemove(Theertha: ObjectId) {
        return await this.groomerModal.findByIdAndRemove(Theertha);
    }
}