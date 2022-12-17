// @ts-check
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User, UserDocument } from './user.model';

@Injectable()
export class UserService {
  async findUserByUserName(username: string) {
    return await this.userModal.find({ username: username }).exec();
<<<<<<< HEAD
=======
    // find({price:"casjdfkldjsfla"}) -> select * from per-detat where price = "sdkfhjkasdhfkjasd"
>>>>>>> ecf2d3bd28c49de4238c34e78538584de944162f
  }
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
