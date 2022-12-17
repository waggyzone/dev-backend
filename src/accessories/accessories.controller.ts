import { Controller, Get } from '@nestjs/common';
import { AccessoriesService } from './accessories.service';

@Controller('accessories')
export class AccessoriesController {
  constructor(private readonly accessoriesService: AccessoriesService) {}

  @Get('/all')
  async findAllaccessories() {
    return await this.accessoriesService.findAll();
  }
}