import { Test, TestingModule } from '@nestjs/testing';
import { WatchlistsService } from './watchlists.service';

describe('WatchlistsService', () => {
  let service: WatchlistsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WatchlistsService],
    }).compile();

    service = module.get<WatchlistsService>(WatchlistsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
