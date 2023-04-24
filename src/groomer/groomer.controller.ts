import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateGroomerDto, UpdateGroomerDto } from './groomer.dto';
import { Groomer } from './groomer.model';
import { GroomerService } from './groomer.service';

@Controller('groomer')
export class GroomerController {
  constructor(private readonly groomerService: GroomerService) {}

  @Get('/all')
  async finAllGroomer() {
    return await this.groomerService.findAll();
  }

  @Get('/all/:page/:limit')
  async getAllGroomerBySize(
    @Param('page') page: number,
    @Param('limit') limit: number,
  ) {
    return await this.groomerService.findAllGroomerByPageAndLimit(page, limit);
  }

  @Post('/create')
  async createGroomerDetails(@Body() groomer: CreateGroomerDto) {
    return await this.groomerService.create(groomer);
  }
  @Get('/find/name/:groomer')
  async findGroomerByName(@Param('groomer') groomer: string) {
    return await this.groomerService.findByGroomer(groomer);
  }
  @Get('/find/location/:place')
  async asyncfindGroomerByLocation(@Param('place') groomer: string) {
    return await this.groomerService.findByLocation(groomer);
  }
  @Get('/find/charge/:cost')
  async findGoomerByCharge(@Param('cost') groomer: number) {
    return await this.groomerService.findByCharge(groomer);
  }
  @Get('/find/services/:service')
  async findGoomerByServices(@Param('service') groomer: string) {
    return await this.groomerService.findByServices(groomer);
  }
  @Put('/update/:id')
  async updateGroomerById(
    @Param('id') id: ObjectId,
    @Body() groomer: UpdateGroomerDto,
  ) {
    console.log(groomer);
    return await this.groomerService.findByIdAndUpdate(id, groomer);
  }

  // Remove Groomer Details By Id
  @Delete('/remove/:id')
  async removeGroomerById(@Param('id') id: ObjectId) {
    return await this.groomerService.findByIdAndRemove(id);
  }
}
