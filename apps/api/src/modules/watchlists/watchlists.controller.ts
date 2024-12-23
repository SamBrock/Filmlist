import { Controller } from '@nestjs/common';

import { WatchlistsService } from './watchlists.service';

@Controller('v1/watchlists')
export class WatchlistsController {
  constructor(private readonly watchlistsService: WatchlistsService) {}
}
