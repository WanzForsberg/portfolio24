'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Character from '@/components/character';
import KaupillaScene from '@/components/kaupillaScene';

const KaupillaPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}>
      <KaupillaScene>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Ground plane */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry attach="geometry" args={[20, 20]} />
          <meshStandardMaterial attach="material" color="lightblue" />
        </mesh>

        {/* Add the cube here */}
        <mesh position={[2, 1, 2]}>
          {' '}
          {/* Adjust position as needed */}
          <boxGeometry attach="geometry" args={[2, 2, 2]} />{' '}
          {/* Adjust size as needed */}
          <meshStandardMaterial attach="material" color="blue" />{' '}
          {/* Change color as desired */}
        </mesh>

        <Character />
      </KaupillaScene>
    </motion.div>
  );
};

export default KaupillaPage;
