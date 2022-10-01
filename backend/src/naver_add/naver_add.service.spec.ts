import { Test, TestingModule } from '@nestjs/testing';
import { NaverAddService } from './naver_add.service';

describe('NaverAddService', () => {
  let service: NaverAddService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NaverAddService],
    }).compile();

    service = module.get<NaverAddService>(NaverAddService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
