// @ts-check
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './user.dto';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal:Model<UserDocument>){}
  
    async findAllUser() {
    return await this.userModal.find({}).exec();
  }
  async create(user:CreateUserDto){
      return await this.userModal.create(user);
  }

}
