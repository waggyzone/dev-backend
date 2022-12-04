import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { UserService } from 'src/user/user.service';
import { CreatePetDetailsDto, UpdatePetDetailsDto } from './pet-details.dto';
import { PetaDetailsDocument, PetDetails } from './pet-details.model';

@Injectable()
export class PetDetailsService {
  constructor(
    @InjectModel(PetDetails.name)
    private petdetailsModal: Model<PetaDetailsDocument>,
  ) {}
  async finAllPetDetails() {
    return await this.petdetailsModal.find({}).exec();
   
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
  async findByName(name: string) {
    return await this.petdetailsModal.find({Name: name}).exec();
    
  }
  async findByBread(name: string) {
    return await this.petdetailsModal.find({Breed: name}).exec();
  
  }
  async findByPrice(name: number) {
    return await this.petdetailsModal.find({Price: name}).exec();
  } 
}
