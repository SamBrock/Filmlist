import { trpc } from '@/lib/trpc';

type MovieWhereToWatchProps = {
  movieId: number;
};

export const MovieWhereToWatch = async ({ movieId }: MovieWhereToWatchProps) => {
  const data = await trpc.movies.watchProviders.query({ movieId, countryCode: 'GB' });

  return (
    <div>
      {data.providers.map((provider) => (
        <div key={provider.id}>
          <div>{provider.name}</div>
          {provider.options.map((providerOption) => (
            <div>{providerOption.type}</div>
          ))}
        </div>
      ))}
    </div>
  );
};
