import { MovieSearch } from '@/components/movie/MovieSearch/MovieSearch';

export default async function Home() {
  return (
    <div className="mx-auto my-12">
      <div className="max-w-lg">
        <MovieSearch />
      </div>
    </div>
  );
}
