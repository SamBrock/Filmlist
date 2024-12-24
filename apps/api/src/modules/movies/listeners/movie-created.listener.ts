import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

export class MovieCreatedEvent {
  movieId: number;
}

@Injectable()
export class MovieCreatedListener {
  @OnEvent('movie.created')
  handleMovieCreatedEvent(event: MovieCreatedEvent) {
    // handle and process "OrderCreatedEvent" event
    console.log(event);
  }
}
