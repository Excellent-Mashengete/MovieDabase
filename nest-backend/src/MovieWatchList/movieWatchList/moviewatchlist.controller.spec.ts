import { Test, TestingModule } from '@nestjs/testing';
import { MoviewatchlistController } from './moviewatchlist.controller';

describe('MoviewatchlistController', () => {
  let controller: MoviewatchlistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviewatchlistController],
    }).compile();

    controller = module.get<MoviewatchlistController>(MoviewatchlistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
