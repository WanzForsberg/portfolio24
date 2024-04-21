'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/baby-jake-glitch.png"
            alt="Image of jacob"
            fill
            className="object-contain"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold relative">
            Creativity Ignites Dreams In A
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
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge & give you an insight into my beautiful world as a UX
            Developer, Marketing Associate & Creative Entrepreneur.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button
              href="/portfolio"
              className="p-4 rounded-lg ring-1 ring-violet-950	 bg-violet-950	 text-white"
            >
              EXPLORE MY WORLD
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
