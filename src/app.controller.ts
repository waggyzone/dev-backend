import { Controller, Get,Post,Req,Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
   @Get('/siya')
  getHelloSiya(): string {
    return this.appService.getHelloSiya();
  }
  @Post('/create')
  create(@Req() request,@Res() response)  {
    const body = request.body;
    return  response.send(body);
  }
}