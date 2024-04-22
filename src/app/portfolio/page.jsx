'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Gallery from '@/components/gallery';

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <div className="relative" ref={ref}>
        {/* Adjusted MY CANVAS size for smaller screens */}
        <div className="w-screen h-[calc(80vh-6rem)] flex items-center justify-center text-4xl md:text-6xl lg:text-8xl text-center">
          MY <span className="text-violet-700">CANVAS</span>
        </div>
        <div className="flex flex-col justify-center items-center w-screen pb-10 pt-10 bg-gray-400">
          <Gallery />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
