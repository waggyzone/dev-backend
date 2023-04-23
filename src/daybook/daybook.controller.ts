import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DaybookService } from './daybook.service';
import { CreateDaybookDto } from './dto/create-daybook.dto';
import { UpdateDaybookDto } from './dto/update-daybook.dto';

@Controller('daybook')
export class DaybookController {
  constructor(private readonly daybookService: DaybookService) {}

  @Post()
  create(@Body() createDaybookDto: CreateDaybookDto) {
    return this.daybookService.create(createDaybookDto);
  }

  @Get()
  findAll() {
    return this.daybookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.daybookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDaybookDto: UpdateDaybookDto) {
    return this.daybookService.update(+id, updateDaybookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.daybookService.remove(+id);
  }
}
