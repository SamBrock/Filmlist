'use client';

import { createContext, useRef } from 'react';

export const WrapperRefContext = createContext<React.RefObject<HTMLDivElement> | null>(null);

export const MainWrapper = (props: React.PropsWithChildren<{}>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <WrapperRefContext.Provider value={wrapperRef}>
      <div ref={wrapperRef} className="bg-bg-subtle w-full overflow-y-scroll rounded-lg">
        {props.children}
      </div>
    </WrapperRefContext.Provider>
  );
};
