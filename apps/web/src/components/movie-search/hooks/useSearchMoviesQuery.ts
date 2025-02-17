// import { SearchMoviesInput } from '@repo/api/app.schemas';
// import useSWR from 'swr';

// import { trpc } from '@/lib/trpc';

// const fetcher = async (query: SearchMoviesInput) => {
//   if (!query.query) {
//     return [];
//   }
//   return trpc.movies.search.query(query);
// };

// export const useSearchMoviesQuery = (query: SearchMoviesInput) => {
//   return useSWR(['search-movies', query.query], async () => await fetcher(query));
// };
