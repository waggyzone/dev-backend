import { Injectable } from '@nestjs/common';
import { CreateDaybookDto } from './dto/create-daybook.dto';
import { UpdateDaybookDto } from './dto/update-daybook.dto';

@Injectable()
export class DaybookService {
  create(createDaybookDto: CreateDaybookDto) {
    return 'This action adds a new daybook';
  }

  findAll() {
    return `This action returns all daybook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} daybook`;
  }

  update(id: number, updateDaybookDto: UpdateDaybookDto) {
    return `This action updates a #${id} daybook`;
  }

  remove(id: number) {
    return `This action removes a #${id} daybook`;
  }
}
