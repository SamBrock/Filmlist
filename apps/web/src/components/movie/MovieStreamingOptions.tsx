import Image from 'next/image';

import { trpc } from '@/lib/trpc';

import { Icon } from '../common/Icon';

const FILTER_OUT = [
  'Max Amazon Channel',
  'HBO Max Amazon Channel',
  'Netflix basic with Ads',
  'Amazon Prime Video with Ads',
];

type MovieStreamingOptionProps = {
  movieId: number;
};

export const MovieStreamingOptions = async ({ movieId }: MovieStreamingOptionProps) => {
  const movieStreamingOptionsData = await trpc.movies.streamingOptions.query({ movieId, countryCode: 'US' });

  if (!movieStreamingOptionsData) {
    return null;
  }
  return (
    <div className="flex flex-col gap-2">
      {movieStreamingOptionsData
        .filter((option) => !FILTER_OUT.includes(option.name))
        .map((option) => (
          <div
            key={option.id}
            className="group bg-text/5 hover:bg-text/10 flex cursor-pointer items-center rounded-lg px-4 py-2"
          >
            <div className="mr-3 -ml-2 overflow-clip rounded-md">
              <Image
                src={`/${option.name.replaceAll(' ', '-').toLowerCase()}.png`}
                width={40}
                height={40}
                alt={option.name}
              />
            </div>
            <div className="flex flex-col">
              <div className="text-text/80 max-w-[120px] overflow-hidden text-sm font-medium text-ellipsis whitespace-nowrap">
                {option.name}
              </div>
              <span className="text-text/40 text-xs">Now Streaming</span>
            </div>
            <Icon name="launch" className="-mr-1 ml-auto size-5 stroke-neutral-600" />
          </div>
        ))}
    </div>
  );
};
