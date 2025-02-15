import Dexie, { type EntityTable } from 'dexie';

interface LikedMovie {
  id: number;
}

export const db = new Dexie('FriendsDatabase') as Dexie & {
  likedMovies: EntityTable<
    LikedMovie,
    'id' // primary key "id" (for the typings only)
  >;
};

// Schema declaration:
db.version(1).stores({
  likedMovies: 'id, liked', // primary key "id" (for the runtime!)
});

// listen for changes in the database
