import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CreateDaycareDto, UpdateDaycareDto } from './daycare.dto';
import { Daycare } from './daycare.model';
import { DaycareService } from './daycare.service';

@Controller('daycare')
export class DaycareController {
    constructor(private readonly daycareService: DaycareService){}

    @Get('/all')
    async finAllDaycare()
     {
        
        return await this.daycareService.findAll();
    }

    @Post('/create')
    async createDaycareDetails(@Body() daycare: CreateDaycareDto){
        return await this.daycareService.create(daycare);

    }
   @Get('/find/name/:daycare')
    async findDaycareByName(@Param('daycare') daycare: string) {
        return await this.daycareService.findByDayacare(daycare);
    }
    @Get('/find/location/:place')
    async asyncfindDaycareByLocation(@Param('place') daycare: string) {
        return await this.daycareService.findByLocation(daycare);
    }
    @Get('/find/charge/:cost')
    async findDaycareByCharge(@Param('cost') daycare: number) {
        return await this.daycareService.findByCharge(daycare);
    }
    @Get('/find/services/:service')
    async findDaycareByServices(@Param('service') daycare: string) {
        return await this.daycareService.findByServices(daycare);
    }
    @Put('/update/:id')
    async updateDaycareById(
      @Param('id') id: ObjectId,
      @Body() daycare: UpdateDaycareDto,
    ) {
      console.log(daycare);
      return await this.daycareService.findByIdAndUpdate(id, daycare);
    }
   
    // Remove Groomer Details By Id
    @Delete('/remove/:id')
    async removeDaycareById(@Param('id') id: ObjectId) {
      return await this.daycareService.findByIdAndRemove(id);
   
   }



}