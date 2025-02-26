import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouter } from '@filmlist/api/app.router';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:8787/trpc',
    }),
  ],
});
