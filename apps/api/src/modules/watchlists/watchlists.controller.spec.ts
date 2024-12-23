import { Test, TestingModule } from '@nestjs/testing';
import { WatchlistsController } from './watchlists.controller';
import { WatchlistsService } from './watchlists.service';

describe('WatchlistsController', () => {
  let controller: WatchlistsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WatchlistsController],
      providers: [WatchlistsService],
    }).compile();

    controller = module.get<WatchlistsController>(WatchlistsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
