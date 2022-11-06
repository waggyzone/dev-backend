import { Controller, Get,Body,Post } from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/all')
  async getAllUser() {
    return await this.userService.findAllUser();
  }

  @Post('/create')
  async createUser(@Body() user:CreateUserDto) {
    return await this.userService.create(user).then((promise) => promise).catch((error) => error )
  }

}
