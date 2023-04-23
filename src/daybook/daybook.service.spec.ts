import { Test, TestingModule } from '@nestjs/testing';
import { DaybookService } from './daybook.service';

describe('DaybookService', () => {
  let service: DaybookService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaybookService],
    }).compile();

    service = module.get<DaybookService>(DaybookService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
