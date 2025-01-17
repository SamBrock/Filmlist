import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

import { AppRouterType } from '@filmlist/api/app.router';

export const trpc = createTRPCProxyClient<AppRouterType>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
});
