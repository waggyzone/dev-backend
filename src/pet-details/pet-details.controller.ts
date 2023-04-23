import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { get } from 'http';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePetDetailsDto, UpdatePetDetailsDto } from './pet-details.dto';
import { PetDetails } from './pet-details.model';
import { PetDetailsService } from './pet-details.service';
import { Request } from 'express';
@Controller('pet-details')
@UseGuards(JwtAuthGuard)
export class PetDetailsController {
  constructor(private readonly petDetailsService: PetDetailsService) {}

  // List All Pet Details
  // @UseGuards(JwtAuthGuard)
  @Get('/all')
  async findAll() {
    return await this.petDetailsService.finAllPetDetails();
  }

  // Create Pet Details
  @Post('/create')
  async createPetDetails(
    @Body() petdetails: CreatePetDetailsDto,
    @Req() request: Request,
  ) {
    const user: Express.User = request.user;
    //@ts-ignore
    const userId = user.id;
    petdetails.owner_id = userId;
    return await this.petDetailsService.create(petdetails);
  }

  // Update Pet Details By Id
  @Put('/update/:id')
  async updatePetDetailsById(
    @Param('id') id: ObjectId,
    @Body() petdetails: UpdatePetDetailsDto,
  ) {
    console.log(petdetails);
    return await this.petDetailsService.findByIdAndUpdate(id, petdetails);
  }

  // Remove Pet Details By Id
  @Delete('/remove/:id')
  async removePetDetailsById(@Param('id') id: ObjectId) {
    return await this.petDetailsService.findByIdAndRemove(id);
  }

  @Get('/find/name/:name')
  async findPetDetailsByName(@Param('name') name: string) {
    return await this.petDetailsService.findByName(name);
  }

  @Get('/find/breed/:siya')
  async findPetDetailsByBreed(@Param('siya') name: string) {
    return await this.petDetailsService.findByBreed(name);
  }
  @Get('/find/price/:sarga')
  async findPetDetailsByPrice(@Param('sarga') name: number) {
    return this.petDetailsService.findByPrice(name);
  }
}
