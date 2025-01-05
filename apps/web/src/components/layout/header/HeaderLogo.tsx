import Image from 'next/image';
import Link from 'next/link';

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="logo" width="30" height="30" />
    </Link>
  );
};
