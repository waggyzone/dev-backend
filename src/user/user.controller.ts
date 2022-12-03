import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';

import * as bcrypt from 'bcrypt';

import { CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // List all users
  @Get('/all')
  async getAllUser() {
    return await this.userService.findAllUser();
  }
  // Create User
  @Post('/create')
  async createUser(@Body() user: CreateUserDto) {
    const saltOrRound = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltOrRound);
    user.password = hashedPassword;
    return await this.userService
      .create(user)
      .then((promise) => promise)
      .catch((error) => error);
  }

  @Put('/update/:id')
  async updateUserById(@Param('id') id: ObjectId, @Body() user: UpdateUserDto) {
    return await this.userService
      .findByIdAndUpdate(id, user)
      .then((promise) => promise)
      .catch((error) => error);
  }

  @Delete('/remove/:id')
  async removeUserById(@Param('id') id: ObjectId) {
    return await this.userService
      .findByIdAndRemove(id)
      .then((promise) => promise)
      .catch((error) => error);
  }
}
