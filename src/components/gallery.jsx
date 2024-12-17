'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import ImageModal from '@/components/imageModal';

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

  const [selectedImage, setSelectedImage] = useState(null); // State to manage the selected image (modal)
  const [activeIndex, setActiveIndex] = useState(null); // State to manage active image on mobile

  // Function to handle click on mobile
  const handleMobileClick = (index) => {
    // Toggle active state on mobile
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xxl:grid-cols-10 gap-4"
      style={{ padding: '20px' }}
    >
      {images.map((image, index) => {
        // Determine styles based on screen size and state
        // On medium and larger screens (md:), we use whileHover for the effect.
        // On smaller screens, we use activeIndex to control style.
        const isActiveOnMobile = activeIndex === index;

        return (
          <motion.div
            key={index}
            className="col-span-1 overflow-hidden relative cursor-pointer"
            // WhileHover only applies on medium and larger screens due to Tailwind responsive classes.
            // On small screens, this won't have an effect.
            whileHover={{ scale: 1.1, filter: 'grayscale(0%)' }}
            transition={{ type: 'spring', stiffness: 300 }}
            initial={{ filter: 'grayscale(80%)' }}
            // Commenting out the modal onClick event:
            // onClick={() => setSelectedImage(image)}

            // On mobile, use onClick to toggle the hover effect
            onClick={() => handleMobileClick(index)}
            // Apply styles conditionally for small screens:
            style={
              isActiveOnMobile
                ? { transform: 'scale(1.1)', filter: 'grayscale(0%)' }
                : {}
            }
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
      {/* Modal rendering is commented out or left as is.
          If you want to remove modal entirely, just remove this block.
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )} */}
    </div>
  );
}
