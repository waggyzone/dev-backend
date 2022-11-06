// @ts-check
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model , ObjectId } from 'mongoose';
import { CreateUserDto ,UpdateUserDto} from './user.dto';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  async findAllUser() {
    return await this.userModal.find({}).exec();
  }
  async create(user: CreateUserDto) {
    return await this.userModal.create(user);
  }

  async findByIdAndUpdate(id: ObjectId, user: UpdateUserDto) {
    return await this.userModal.findByIdAndUpdate(id, user);
  }

  async findByIdAndRemove(id: ObjectId) {
    return await this.userModal.findByIdAndRemove(id);
  }
}
