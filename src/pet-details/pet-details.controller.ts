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
import { ObjectId } from 'mongoose';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreatePetDetailsDto, UpdatePetDetailsDto } from './pet-details.dto';
import { PetDetailsService } from './pet-details.service';

@Controller('pet-details')
export class PetDetailsController {
  constructor(private readonly petDetailsService: PetDetailsService) {}

  // List All Pet Details
  // @UseGuards(JwtAuthGuard)
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
@Get('/find/name/:name')
async findPetDetailsByName(@Param('name') name:string) {
  return await this.petDetailsService.findByName(name);
}


@Get("/find/breed/:siya") 
async findPetDetailsByBread(@Param('siya') name:string) {
  return await this.petDetailsService.findByBread(name);
}
@Get("/find/price/:sarga")
async findPetDetailsByPrice(@Param('sarga') name:number) {
  return await this.petDetailsService.findByPrice(name);
}


/// http://localhost:8080/user/create
// find/:sdufdh -> parameter 
// dfind?user=adjfajf -> que


// @Get('/find/:name')
// async Name(@Param('Name')Name:string) {
//   return await this.petDetailsService.findByName(Name);
// }


  // List All Pet Details By Name

  //@Get() ->  POST,DELETE ,PATH,

  // List All Pet Details By Bread

  // List All Pet Details By price Rage

  // List All Pet Details By price range and <Bread or Name>
}
