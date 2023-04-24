import {
  Controller,
  Get,
  Body,
  Post,
  Put,
  Param,
  Delete,
  Req,
  UseGuards,
  NotFoundException,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { Request } from 'express';

import * as bcrypt from 'bcrypt';

import { ChangePasswordDto, CreateUserDto, UpdateUserDto } from './user.dto';
import { UserService } from './user.service';
import { JwtAuthGuard } from '@/auth/jwt-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  // List all users
  @Get('/all')
  @UseGuards(JwtAuthGuard)
  async getAllUser() {
    return await this.userService.findAllUser();
  }
  @Get('/')
  @UseGuards(JwtAuthGuard)
  async findUserById(@Req() request: Request) {
    const user: Express.User = request.user;

    //@ts-ignore
    return await this.userService.findUserById(user.id);
  }
  @Get('/all/:page/:limit')
  async getAllUserBySize(
    @Param('page') page: number,
    @Param('limit') limit: number,
  ) {
    return await this.userService.findAllUserByPageAndLimit(page, limit);
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

  @Put('/changepassword')
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Req() request: Request,
    @Body() changePassword: ChangePasswordDto,
  ) {
    const saltOrRound = 10;
    const user: Express.User = request.user;
    // @ts-ignore
    const result = await this.userService.findUserById(user.id);
    if (result) {
      const hasValidPassword = await bcrypt.compare(
        changePassword.currentpassword,
        result[0].password,
      );
      if (hasValidPassword) {
        const hashedPassword = await bcrypt.hash(
          changePassword.changepassword,
          saltOrRound,
        );
        const body = { password: hashedPassword };
        // @ts-ignore
        return await this.userService.findByIdAndUpdate(user.id, body);
      }
    }
    return new NotFoundException();
  }
  @Put('/update')
  @UseGuards(JwtAuthGuard)
  async updateUserById(@Req() request: Request, @Body() user: UpdateUserDto) {
    const _user: Express.User = request.user;
    return await this.userService
      //@ts-ignore
      .findByIdAndUpdate(_user.id, user)
      .then((promise) => promise)
      .catch((error) => error);
  }
  @Put('/update/:id')
  @UseGuards(JwtAuthGuard)
  async modifieUserById(
    @Param('id') id: ObjectId,
    @Body() user: UpdateUserDto,
  ) {
    return await this.userService
      .findByIdAndUpdate(id, user)
      .then((promise) => promise)
      .catch((error) => error);
  }

  @Delete('/remove/:id')
  @UseGuards(JwtAuthGuard)
  async removeUserById(@Param('id') id: ObjectId) {
    return await this.userService
      .findByIdAndRemove(id)
      .then((promise) => promise)
      .catch((error) => error);
  }
}
