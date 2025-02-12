import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/', (c) => {
  return c.json({ message: 'Hello Hono!' });
});

app.get('/test', (c) => {
  return c.json({ message: 'This is a test!' });
});

const route = app.get('/posts', (c) => {
  return c.json({
    data: 'hello',
    page: 1,
  });
});

export default app;

export type HonoAppType = typeof route;
