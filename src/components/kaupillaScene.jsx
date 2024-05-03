// KaupillaScene.jsx
'use client';
import React, { useRef } from 'react';
import { Canvas, useThree, extend } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Suspense } from 'react';

extend({ OrbitControls });

const Controls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

const KaupillaScene = ({ children }) => {
  return (
    <Canvas camera={{ position: [0, 5, 5] }}>
      <Controls />
      <Suspense fallback={null}>{children}</Suspense>
    </Canvas>
  );
};

export default KaupillaScene;
