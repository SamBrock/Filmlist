import { MovieSearchInput } from './MovieSearchInput';
import { MovieSearchStoreProvider } from './MovieSearchProvider';
import { MovieSearchResults } from './MovieSearchResults';

export const MovieSearch = () => {
  return (
    <MovieSearchStoreProvider>
      <MovieSearchInput />
      <MovieSearchResults />
    </MovieSearchStoreProvider>
  );
};
