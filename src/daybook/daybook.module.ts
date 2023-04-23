import { Module } from '@nestjs/common';
import { DaybookService } from './daybook.service';
import { DaybookController } from './daybook.controller';

@Module({
  controllers: [DaybookController],
  providers: [DaybookService]
})
export class DaybookModule {}
