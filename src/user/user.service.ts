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
  }
  constructor(@InjectModel(User.name) private userModal: Model<UserDocument>) {}

  async findUserById(id: ObjectId) {
    return await this.userModal.find({ _id: id }).exec();
  }

  async findAllUser() {
    return await this.userModal.find({}).select('-password').exec();
  }
  async findAllUserByPageAndLimit(page: number, limit: number) {
    const _skip = page * limit;

    return this.userModal.aggregate([
      {
        $facet: {
          data: [{ $skip: _skip }, { $limit: Number(limit) }],
          pagination: [{ $count: 'total' }],
        },
      },
    ]);
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
