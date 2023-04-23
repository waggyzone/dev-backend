import { PartialType } from '@nestjs/swagger';
import { CreateDaybookDto } from './create-daybook.dto';

export class UpdateDaybookDto extends PartialType(CreateDaybookDto) {}
