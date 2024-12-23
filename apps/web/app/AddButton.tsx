'use client';

import { createLogAction } from '../actions/createLogAction';

type Props = {
  movieId: number;
};

export const AddButton = (props: Props) => {
  return (
    <button
      onClick={() => {
        createLogAction({
          movieId: props.movieId,
          liked: true,
          rating: 4,
        });
      }}
    >
      Log film!
    </button>
  );
};
