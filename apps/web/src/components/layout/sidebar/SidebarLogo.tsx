import Image from 'next/image';
import Link from 'next/link';

export const SidebarLogo = (props: React.ComponentProps<'a'>) => {
  return (
    <Link href="/" {...props}>
      <Image src="/logo.svg" alt="logo" width="30" height="30" />
    </Link>
  );
};
