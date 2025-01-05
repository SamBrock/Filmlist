import { MovieSearchInput } from './MovieSearchInput';
import { MovieSearchStoreProvider } from './MovieSearchProvider';
import { MovieSearchResults } from './MovieSearchResults';

export const MovieSearch = () => {
  return (
    <MovieSearchStoreProvider>
      <div className="bg-foreground border-border overflow-clip rounded-lg border">
        <MovieSearchInput />
        <MovieSearchResults />
      </div>
    </MovieSearchStoreProvider>
  );
};
