/* 'use client';
import { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

export default function HorizontalScroller({ items }) {
  const controls = useAnimation();
  const scrollRef = useRef(null);

  // Function to scroll left
  const scrollLeft = async () => {
    await controls.start({
      x: '+300px',
      transition: { type: 'spring', stiffness: 100 },
    });
  };

  // Function to scroll right
  const scrollRight = async () => {
    await controls.start({
      x: '-300px',
      transition: { type: 'spring', stiffness: 100 },
    });
  };

  return (
    <div className="flex items-center">
      <button onClick={scrollLeft} className="p-4 bg-gray-300 rounded-full">
        &#8592;
      </button>
      <motion.div
        ref={scrollRef}
        className="flex overflow-hidden w-full h-full"
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          animate={controls}
        >
          {items.map((item, index) => (
            <div key={index} className="min-w-[300px] flex-shrink-0 relative">
              {item.type === 'video' ? (
                <video src={item.src} controls className="w-full h-auto" />
              ) : (
                <Image
                  src={item.src}
                  alt={`Card ${index + 1}`}
                  className="w-full h-auto"
                />
              )}
              <button className="absolute bottom-4 left-4 bg-blue-500 text-white py-2 px-4 rounded">
                See Details
              </button>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <button onClick={scrollRight} className="p-4 bg-gray-300 rounded-full">
        &#8594;
      </button>
    </div>
  );
}
 */
