import { Vibrant } from 'node-vibrant/node';

import { TMDB_IMAGE_BASE_URL } from '../constants';

export type MoviePosterColors = Awaited<ReturnType<typeof generateMoviePosterColors>>;

export const generateMoviePosterColors = async (posterPath: string) => {
  const v = new Vibrant(`${TMDB_IMAGE_BASE_URL}/w500${posterPath}`);
  const palette = await v.getPalette();

  const hsl = palette.Vibrant?.hsl || [0, 0, 0];

  const h = hsl[0] * 360;
  const s = hsl[1] * 100;
  const l = hsl[2] * 100;

  return {
    hslPrimary: `hsl(${h} ${s}% ${l}%)`,
    hslSecondary: `hsl(${h} ${s * 0.1}% ${l * 0.5}%)`,
    _hsl: [h, s, l],
  };
};
