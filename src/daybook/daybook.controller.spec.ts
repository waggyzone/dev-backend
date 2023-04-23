import { Test, TestingModule } from '@nestjs/testing';
import { DaybookController } from './daybook.controller';
import { DaybookService } from './daybook.service';

describe('DaybookController', () => {
  let controller: DaybookController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaybookController],
      providers: [DaybookService],
    }).compile();

    controller = module.get<DaybookController>(DaybookController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
