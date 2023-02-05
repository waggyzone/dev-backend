import { Body, Controller, Get, Param, Post, Put, UseGuards,Delete } from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { identity, ObjectUnsubscribedError } from 'rxjs';
import { CreateAccessoriesDto, UpdateAccessoriesDto } from './accessories.dto';
import { Accessories } from './accessories.model';
import { AccessoriesService } from './accessories.service';

@Controller('accessories')
export class AccessoriesController {
  constructor(private readonly accessoriesService: AccessoriesService) {}

  @Get('/all')
  async finAllAccessories() {
    return await this.accessoriesService.findAll();
  }
  @Post('/create')
  async createAccessoriesDetails(@Body() Accessories: CreateAccessoriesDto) {
    return await this.accessoriesService.create(Accessories);
  }
  //slug
    @Get('/find/name/:accessories')
    async findAccessoriesByName(@Param('accessories') Accessories: string){
return await this.accessoriesService.findByAccessories(Accessories);
    }

    @Get('/find/size/:size')
   async findAccessoriesBySize(@Param('size') Accessories : string){
    return await this.accessoriesService.findBySize(Accessories);
   }



   @Get('/find/price/:price')
   async findAccessoriesByPrice(@Param('price') Accessories: number){
    return await this.accessoriesService.findByPrice(Accessories);

  }


//update product details by id

@Put('/update/:id')
  async updateAccessoriesById(
    @Param('id') id: ObjectId,
    @Body() Accessories: UpdateAccessoriesDto,
  ) {
    console.log(Accessories);
    return await this.accessoriesService.findByIdAndUpdate(id, Accessories);
  }
  //Remove product by Id
  @Delete('/remove/:id')
  async removeAccessoriesById(@Param('id') id: ObjectId) {
    return await this.accessoriesService.findByIdAndRemove(id);
  }
}









