import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { get } from 'http';
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePetDetailsDto, UpdatePetDetailsDto } from './pet-details.dto';
import { PetDetailsService } from './pet-details.service';

@Controller('pet-details')
export class PetDetailsController {
  constructor(private readonly petDetailsService: PetDetailsService) {}

  // List All Pet Details
  @UseGuards(JwtAuthGuard)
  @Get('/Theertha')
  async sudhi() {
    return await this.petDetailsService.finAllPetDetails();
  }

  // Create Pet Details
  @Post('/create')
  async createPetDetails(@Body() petdetails: CreatePetDetailsDto) {
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

  // List All Pet Details By Name

  // List All Pet Details By Bread

  // List All Pet Details By price Rage

  // List All Pet Details By price range and <Bread or Name>
}
