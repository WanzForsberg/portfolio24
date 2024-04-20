'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded pl-2 pr-2 p-1 ${
        pathName === link.url && ' underline decoration-violet-950'
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
