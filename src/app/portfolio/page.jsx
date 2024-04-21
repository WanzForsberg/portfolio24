'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import Gallery from '@/components/gallery';

const items = [
  {
    id: 1,
    color: 'from-gray-500 to-slate-600',
    title: 'Project 1',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/projects/wanzstudios-logo-dark.png',
    link: 'https://wanzstudios.com',
  },
  {
    id: 2,
    color: 'from-slate-600 to-slate-700',
    title: 'Project 2',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/projects/wanzstudios-logo-dark.png',
    link: 'https://wanzstudios.com',
  },
  {
    id: 3,
    color: 'from-slate-700 to-slate-900',
    title: 'Project 3',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/projects/wanzstudios-logo-dark.png',
    link: 'https://wanzstudios.com',
  },
  {
    id: 4,
    color: 'from-slate-900 to-slate-950',
    title: 'Project 4',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.',
    img: '/projects/wanzstudios-logo-dark.png',
    link: 'https://wanzstudios.com',
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-60%']);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(80vh-6rem)] flex items-center justify-center text-8xl text-center">
          MY <span className="text-violet-700">CANVAS</span>
        </div>
        <div className="flex flex-col justify-center items-center w-screen pb-10 pt-10 bg-gray-400">
          <Gallery />
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-gray-400 to-gray-500" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-slate-800">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image
                      className="w-full h-full object-cover"
                      src={item.img}
                      alt=""
                      fill
                    />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px] text-gray-200">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-slate-800 text-gray-100 font-semibold m-4 rounded">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
