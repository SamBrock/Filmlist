import { HeaderLinks } from './HeaderLinks';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

export const Header = () => {
  return (
    <header>
      <div className="mx-auto flex items-center px-6 py-4">
        <div className="flex w-1/3 items-center">
          <HeaderLogo />
          <HeaderLinks className="ml-16" />
        </div>
        <div className="flex w-1/3 items-center">
          <HeaderSearch className="w-full" />
        </div>
        <div className="w-1/3"></div>
      </div>
    </header>
  );
};
