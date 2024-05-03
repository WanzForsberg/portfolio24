'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const Character = () => {
  const character = useRef();
  const [keys, setKeys] = useState({});
  const { camera } = useThree();
  const [zoomLevel, setZoomLevel] = useState(10); // Initial zoom level
  const minZoomLevel = 1; // Minimum zoom level (first-person trigger)
  const maxZoomLevel = 20; // Maximum zoom level

  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeys((prevKeys) => ({ ...prevKeys, [event.key]: true }));
    };

    const handleKeyUp = (event) => {
      setKeys((prevKeys) => ({ ...prevKeys, [event.key]: false }));
    };

    const handleWheel = (event) => {
      // Prevent default scrolling behavior
      event.preventDefault();

      // Zoom in/out based on wheel movement
      const zoomSpeed = 0.1;
      setZoomLevel((prevZoomLevel) =>
        Math.max(
          minZoomLevel,
          Math.min(
            prevZoomLevel + (event.deltaY < 0 ? -zoomSpeed : zoomSpeed),
            maxZoomLevel
          )
        )
      );
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    document.addEventListener('wheel', handleWheel); // Listen for wheel event

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
      document.removeEventListener('wheel', handleWheel); // Remove event listeners
    };
  }, []); // No dependency array, update on every render

  useFrame(({ clock, mouse }) => {
    const speed = 0.1;
    const direction = new THREE.Vector3();

    if (keys['ArrowUp'] || keys['w']) {
      direction.z -= 1;
    }
    if (keys['ArrowDown'] || keys['s']) {
      direction.z += 1;
    }
    if (keys['ArrowLeft'] || keys['a']) {
      direction.x -= 1;
    }
    if (keys['ArrowRight'] || keys['d']) {
      direction.x += 1;
    }

    // Normalize direction vector
    if (direction.length() > 0) {
      direction.normalize();
    }

    // Update character position based on direction and camera mode
    character.current.position.add(direction.multiplyScalar(speed));

    // Update camera position based on zoom level
    const characterPosition = character.current.position.clone();
    if (zoomLevel <= minZoomLevel) {
      // First-person mode
      const cameraPosition = characterPosition.clone().add(
        new THREE.Vector3(0, 2, 1).applyQuaternion(
          // Adjust eye height
          character.current.quaternion
        )
      );
      camera.position.copy(cameraPosition);
      camera.lookAt(characterPosition.add(new THREE.Vector3(0, 0, -1))); // Look slightly forward
    } else {
      // Third-person mode
      camera.position.copy(
        characterPosition
          .clone()
          .add(new THREE.Vector3(0, zoomLevel, zoomLevel))
      );
      camera.lookAt(characterPosition);
    }
  });

  return (
    <group ref={character} position={[0, 0.5, 0]}>
      <mesh>
        <cylinderGeometry args={[0.5, 0.5, 2, 32]} />
        <meshStandardMaterial color={0x9b30ff} />
      </mesh>
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={0x9b30ff} />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={0x9b30ff} />
      </mesh>
    </group>
  );
};

export default Character;
