import { Test, TestingModule } from '@nestjs/testing';
import { MoviewatchlistService } from './moviewatchlist.service';

describe('MoviewatchlistService', () => {
  let service: MoviewatchlistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviewatchlistService],
    }).compile();

    service = module.get<MoviewatchlistService>(MoviewatchlistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
