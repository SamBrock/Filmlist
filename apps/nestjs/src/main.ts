import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { AppRouter } from './app.router';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  const trpc = app.get(AppRouter);
  trpc.applyMiddleware(app);

  await app.listen(4000);
}
bootstrap();
