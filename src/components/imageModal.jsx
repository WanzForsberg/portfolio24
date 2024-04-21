'use client';
import React, { useEffect } from 'react';

const ImageModal = ({ image, onClose }) => {
  // Prevent scrolling on the background
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = originalStyle);
  }, []);

  // Handle click outside of the modal
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-backdrop') {
      onClose();
    }
  };

  return (
    <div
      id="modal-backdrop"
      className="fixed inset-0 flex justify-center items-center p-4 z-50"
      onClick={handleBackgroundClick}
      style={{ backdropFilter: 'blur(8px)' }}
    >
      <div
        className="bg-gray-400 p-4 rounded-lg shadow-lg flex flex-col md:flex-row max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from closing it
      >
        <img
          src={image.src}
          alt={image.title}
          className="max-w-sm w-full h-auto rounded-lg"
        />
        <div className="text-left p-4">
          <h2 className="text-xl font-bold mb-2">{image.title}</h2>
          <p>{image.description}</p>
          <button
            onClick={onClose}
            className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
