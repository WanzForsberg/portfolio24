'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`rounded pl-2 pr-2 p-1 ${
        pathName === link.url &&
        ' line-through underline-offset-8 decoration-2 decoration-blue-600 text-blue-600'
      }`}
      href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLink;
