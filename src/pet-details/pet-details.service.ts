import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreatePetDetailsDto, UpdatePetDetailsDto } from './pet-details.dto';
import { PetaDetailsDocument, PetDetails } from './pet-details.model';

@Injectable()
export class PetDetailsService {
  findByPrice(PetDetails: number) {
    throw new Error('Method not implemented.');
  }
  findByBreed(PetDetails: string) {
    throw new Error('Method not implemented.');
  }
  findByName(PetDetails: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(PetDetails.name)
    private petdetailsModal: Model<PetaDetailsDocument>,
  ) {}
  async finAllPetDetails() {
    return await this.petdetailsModal.find({}).exec();
    // find({Name: "sarga"}) = > select * from petdetails where Name="sarga"
  }
  async create(petdetails: CreatePetDetailsDto) {
    return await this.petdetailsModal.create(petdetails);
  }
  async findByIdAndUpdate(Theertha: ObjectId, petdetails: UpdatePetDetailsDto) {
    return await this.petdetailsModal.findByIdAndUpdate(Theertha, petdetails);
  }
  async findByIdAndRemove(Theertha: ObjectId) {
    return await this.petdetailsModal.findByIdAndRemove(Theertha);
  }
}
