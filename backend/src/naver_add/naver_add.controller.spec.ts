import { Test, TestingModule } from '@nestjs/testing';
import { NaverAddController } from './naver_add.controller';

describe('NaverAddController', () => {
  let controller: NaverAddController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NaverAddController],
    }).compile();

    controller = module.get<NaverAddController>(NaverAddController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
