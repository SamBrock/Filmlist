import { Button } from '@/components/common/Button';

import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

export const Header = (props: React.ComponentProps<'header'>) => {
  return (
    <header {...props}>
      <div className="mx-auto flex items-center px-6 py-4">
        <div className="flex w-1/3 items-center">
          <HeaderLogo />
        </div>

        <Button className="ml-auto min-w-20">Log</Button>
        {/* <div className="flex w-1/3 items-center">
          <HeaderSearch className="w-full" />
        </div>
        <div className="w-1/3"></div> */}
      </div>
    </header>
  );
};
