"use client";
import React, { useState, useCallback } from 'react';
import Carousel from 'react-multi-carousel';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import 'react-multi-carousel/lib/styles.css';
const ImageGallerySlider = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const images = [
    {
      id: 1,
      url: '/images/first.jpg',
      title: '',
      description: ''
    },
    {
      id: 2,
      url: '/images/second.jpeg',
      title: '',
      description: ''
    },
    {
      id: 3,
      url: '/images/third.jpeg',
      title: '',
      description: ''
    },
    {
      id: 4,
      url: '/images/forth.jpg',
      title: '',
      description: ''
    },
    // {
    //   id: 5,
    //   url: '/images/kneeinjury.jpg',
    //   title: 'Recovery Programs',
    //   description: 'Comprehensive recovery and rehabilitation'
    // }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const openLightbox = useCallback((image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    setIsLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback((e) => {
    if (e) {
      e.stopPropagation();
    }
    setSelectedImage(null);
    setIsLightboxOpen(false);
  }, []);

  const navigateImage = useCallback((direction) => (e) => {
    e.stopPropagation();
    const newIndex = direction === 'next' 
      ? (selectedIndex + 1) % images.length 
      : (selectedIndex - 1 + images.length) % images.length;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  }, [selectedIndex, images]);

  const handleKeyDown = useCallback((e) => {
    if (!isLightboxOpen) return;
    
    switch (e.key) {
      case 'ArrowLeft':
        navigateImage('prev')(e);
        break;
      case 'ArrowRight':
        navigateImage('next')(e);
        break;
      case 'Escape':
        closeLightbox();
        break;
      default:
        break;
    }
  }, [isLightboxOpen, navigateImage, closeLightbox]);

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-5xl font-bold mb-8  text-center  bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] inline-block text-transparent bg-clip-text">
      Let’s See Our Latest Gallery
      </h2>

      <div className="bg-white rounded-xl shadow-xl p-8 relative">
        {/* Add a wrapper div with relative positioning */}
        <div className="relative z-10">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="transform 700ms ease-in-out"
            transitionDuration={700}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="px-3"
          >
            {images.map((image, index) => (
              <div
                key={image.id}
                className="cursor-pointer transform transition-all duration-300 hover:scale-105"
                onClick={() => openLightbox(image, index)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-72 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Navigation Controls */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300"
            onClick={navigateImage('prev')}
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300"
            onClick={navigateImage('next')}
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-white bg-opacity-10 hover:bg-opacity-20 p-2 rounded-full transition-all duration-300"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          {/* Image Container */}
          <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
            <div className="text-white text-center mt-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg text-gray-300">{selectedImage.description}</p>
              <p className="text-sm text-gray-400 mt-2">
                Image {selectedIndex + 1} of {images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallerySlider;