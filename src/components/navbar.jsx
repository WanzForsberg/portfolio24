'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/portfolio', title: 'Portfolio' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full w-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* INVISIBLE START ITEM */}
      {/* <div className="hidden w-1/3 md:flex justify-start"></div> */}
      <div className="w-1/3 hidden md:flex justify-start pt-10">
        <Link href="/">
          <Image
            src="/forsbergTag.png"
            alt="github social icon"
            width={220}
            height={220}
          />
        </Link>
      </div>
      {/* LINKS */}
      <div className="hidden w-1/3 md:flex gap-4 w-full justify-center">
        {links.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      {/* SOCIAL */}
      <div className="hidden w-1/3 md:flex gap-8 justify-end">
        <Link href="https://github.com/WanzForsberg">
          <Image
            src="/github.png"
            alt="github social icon"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.instagram.com/wanzstudios/">
          <Image
            src="/instagram.png"
            alt="instagram social icon"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/jacob-forsberg-b4a680225/?originalSubdomain=se">
          <Image
            src="/linkedin.png"
            alt="linkedin social icon"
            width={32}
            height={32}
          />
        </Link>
        <Link href="https://www.wanzstudios.com">
          <Image
            src="/computer.png"
            alt="computer icon"
            width={32}
            height={32}
          />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}>
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"></motion.div>
        </button>
        {/* MENU LIST */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
            {links.map((link) => (
              <motion.div
                variants={listItemVariants}
                className=""
                key={link.title}>
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
