'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Homepage = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="h-full flex items-center justify-center"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      {/* Centered Image Container */}
      <div className="relative w-1/2 h-1/2 flex items-center justify-center">
        <Image
          src="/Wanz-banner.png"
          alt="wanz banner"
          fill
          className="object-contain"
        />
        {/* Dark-colored Box */}
        <div
          className={`absolute transform translate-x-3/4 translate-y-2 p-8 bg-gray-800 text-white w-3/4 md:w-2/3 lg:w-1/2 h-80 rounded-lg transition-all duration-500 ${
            !hovered ? 'opacity-50' : 'opacity-100'
          }`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}>
          {hovered ? (
            // Real Text with Ripple Effect
            <motion.div
              className="text-left tracking-widest leading-relaxed text-slate-100"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}>
              <h1 className="text-2xl md:text-4xl font-bold">
                Creativity Ignites Dreams.
              </h1>
              <p className="text-sm md:text-lg mt-4">
                Welcome to my digital canvas, where innovation and creativity
                converge & give you an insight into my beautiful world as a UX
                Developer, Marketing Associate & Creative Entrepreneur.
              </p>
            </motion.div>
          ) : (
            // Mockup Lines
            <div className="space-y-6 items-center justify-center opacity-50 p-8">
              <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6 mx-auto"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
