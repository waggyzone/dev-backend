import {
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RefreshTokenGuard } from './auth/refresh-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @UseGuards(RefreshTokenGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @UseGuards(JwtAuthGuard)
  @Get('/siya')
  getHelloSiya(): string {
    return this.appService.getHelloSiya();
  }
  @Post('/create')
  create(@Req() request, @Res() response) {
    const body = request.body;
    return response.send(body);
  }
}
