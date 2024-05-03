'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER - hidden on screens smaller than lg */}
        <div className="lg:h-full lg:w-1/2 relative hidden lg:block">
          <Image
            src="/baby-jake-glitch.png"
            alt="Image of Jacob"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="flex flex-col items-center justify-center h-full lg:w-1/2 gap-8">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-center lg:text-left">
            <span className="pr-2">Creativity Ignites Dreams In A</span>
            <span className="relative inline-block">
              <span className="text-yellow-500">Glitchy</span>
              <span className="absolute top-neg-05 left-neg-03 text-red-500">
                Glitchy
              </span>
              <span className="absolute top-pos-03 left-pos-03 text-blue-500">
                Glitchy
              </span>
              <span className="absolute top-neg-02 left-neg-05 text-green-500">
                Glitchy
              </span>
              <span className="absolute top-pos-04 left-neg-02 text-violet-700">
                Glitchy
              </span>
            </span>
            World.
          </h1>
          {/* DESCRIPTION */}
          <p className="text-lg md:text-xl text-center lg:text-left">
            Welcome to my digital canvas, where innovation and creativity
            converge & give you an insight into my beautiful world as a UX
            Developer, Marketing Associate & Creative Entrepreneur.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
            {/* <Link
              href="/kaupilla"
              className="p-4 rounded-lg ring-1 ring-violet-950 bg-violet-950 text-white w-full lg:w-auto">
              EXPLORE MY WORLD
            </Link> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
