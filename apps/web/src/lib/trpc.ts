import { AppRouterType } from '@filmlist/api/app.router';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const trpc = createTRPCProxyClient<AppRouterType>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4000/trpc',
    }),
  ],
});
