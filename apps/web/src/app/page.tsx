import { MovieSearch } from '@/components/movie/MovieSearch';

export default async function Home() {
  return (
    <div className="container mx-auto my-12">
      <div className="max-w-lg">
        <MovieSearch />
      </div>
    </div>
  );
}
