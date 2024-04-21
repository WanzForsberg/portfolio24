'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react'; // Ensure useState is imported from 'react'
import ImageModal from '@/components/ImageModal'; // Assuming ImageModal is in the correct directory

export default function Gallery() {
  const images = [
    {
      src: '/projects/wanzstudios-logo-dark.png',
      title: 'Wanz Studios Logo',
      description: 'A dark theme logo for Wanz Studios.',
    },
    {
      src: '/projects/ats-plåtslageri.png',
      title: 'ATS Plåtslageri',
      description: 'Logo for a metalworking / roofing company.',
    },
    {
      src: '/projects/butterfly-logo.png',
      title: 'Butterfly Logo',
      description: 'A Butterfly Logo.',
    },
    {
      src: '/projects/odd-web-design.png',
      title: 'Odd Web Design',
      description: 'A web design for an interior design company.',
    },
    {
      src: '/projects/wanzstudios-logo-dark.png',
      title: 'Wanz Studios Logo',
      description: 'A dark theme logo for Wanz Studios.',
    },
    {
      src: '/projects/ats-plåtslageri.png',
      title: 'ATS Plåtslageri',
      description: 'Logo for a metalworking / roofing company.',
    },
    {
      src: '/projects/6gymbrahs-logo.png',
      title: '6GymBrahs',
      description: 'Logo for a fitness brand.',
    },
    {
      src: '/projects/odd-web-design.png',
      title: 'Odd Web Design',
      description: 'A web design for an interior design company.',
    },
    {
      src: '/projects/butterfly-logo.png',
      title: 'Butterfly Logo',
      description: 'A Butterfly Logo.',
    },
    {
      src: '/projects/6gymbrahs-logo.png',
      title: '6GymBrahs',
      description: 'Logo for a fitness brand.',
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null); // State to manage the selected image

  const rows = Math.ceil(images.length / 5);

  return (
    <div className={`grid grid-cols-5`} style={{ height: `${rows * 40}vh` }}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="col-span-1 h-[40vh] overflow-hidden relative"
          whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
          transition={{ type: 'spring', stiffness: 300 }}
          initial={{ filter: 'grayscale(80%)' }}
          onClick={() => setSelectedImage(image)}
        >
          <img
            src={image.src}
            alt={image.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
}
