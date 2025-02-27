'use client';

import { useContext, useState } from 'react';
import { useEventListener } from 'usehooks-ts';

import { cn } from '@/lib/utils/cn';
import { backdropSrc } from '@/lib/utils/imageSrc';
import { WrapperRefContext } from '../layout/MainWrapper';

type MovieBackdropImageProps = React.ComponentProps<'img'> & {
  backdropPath: string;
};

export const MovieBackdropImage = ({ className, backdropPath, ...props }: MovieBackdropImageProps) => {
  // const [scrollTop, setScrollTop] = useState(0);

  // const wrapperRef = useContext(WrapperRefContext);

  // useEventListener(
  //   'scroll',
  //   (e) => {
  //     const target = e.target as HTMLElement;
  //     console.log(target.scrollTop);
  //     if (target.scrollTop % 2 === 0) {
  //       setScrollTop(target.scrollTop);
  //     }
  //   },
  //   wrapperRef!
  // );

  return (
    <img
      className={cn('backdrop', className)}
      src={backdropSrc(backdropPath, 'tmdb', 'original')}
      {...props}
    />
  );
};
