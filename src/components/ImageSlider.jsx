"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const slides = [
  {
    image: "/images/slide1.jpg",
    title: "Dr. Abhishek Saxena",
    subtitle: "Transforming Lives Through Specialized Orthopedic Care",
    alt: "Dr. Saxena performing orthopedic examination"
  },
  {
    image: "/images/slide2.jpg",
    title: "Dr. Abhishek Saxena",
    subtitle: "Your Path To Recovery Starts Here, With Our Expertise",
    alt: "Modern orthopedic facility"
  },
  {
    image: "/images/slide3.jpg",
    title: "Dr. Abhishek Saxena",
    subtitle: "Shoulder, Knee & Sports Injury Treatment",
    alt: "Sports injury treatment session"
  }
];

const NavigationButton = React.memo(({ direction, onClick }) => (
  <button
    onClick={onClick}
    className="bg-white/10 p-2 rounded-full backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
    aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} slide`}
  >
    <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
      <polyline points={direction === 'prev' ? "15 18 9 12 15 6" : "9 18 15 12 9 6"}></polyline>
    </svg>
  </button>
));

NavigationButton.displayName = 'NavigationButton';

const SlideContent = React.memo(({ title, subtitle }) => (
  <div className="max-w-xl lg:max-w-2xl space-y-4 md:space-y-6 text-left px-4 sm:px-6 md:px-8">
    <div className="space-y-3 md:space-y-4 opacity-0 animate-slide-fade-in">
      <div className="inline-block rounded-full bg-blue-600/20 px-3 py-1 backdrop-blur-sm">
        <span className="text-xs sm:text-sm font-medium text-blue-200">
          Orthopedic Specialist
        </span>
      </div>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {title}
      </h2>
      
      <div className="h-1 w-12 md:w-16 lg:w-20 bg-blue-500" />
      
      <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        {subtitle}
      </p>
    </div>
  </div>
));

SlideContent.displayName = 'SlideContent';

const AppointmentButton = React.memo(({ onClick, isAnimating }) => (
  <button 
    onClick={onClick}
    className={`
      group relative rounded-full overflow-hidden
      ${isAnimating ? 'animate-button-press' : ''}
      bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 md:px-8 md:py-4
      text-sm md:text-base font-medium text-white
      transition-all duration-300
      hover:bg-blue-700 active:bg-blue-800
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
      disabled:opacity-70 disabled:cursor-not-allowed
    `}
    disabled={isAnimating}
  >
    <span className="relative z-10 block">
      {isAnimating ? (
        <span className="inline-flex items-center">
          <span className="mr-2">Processing</span>
          <span className="animate-pulse">...</span>
        </span>
      ) : (
        "Book an Appointment"
      )}
    </span>
    <span className="absolute bottom-0 left-0 h-0 w-full bg-blue-800 transition-all duration-300 group-hover:h-full" />
  </button>
));

AppointmentButton.displayName = 'AppointmentButton';

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isButtonAnimating, setIsButtonAnimating] = useState(false);
  const slideRef = useRef(null);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileNav(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAppointmentClick = () => {
    setIsButtonAnimating(true);
    setTimeout(() => {
      setIsButtonAnimating(false);
      document.getElementById('appointment-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 600);
  };

  const properties = {
    duration: 3000,
    transitionDuration: 800,
    infinite: true,
    indicators: false,
    arrows: !showMobileNav,
    autoplay: true,
    pauseOnHover: true,
    onChange: (_, newIndex) => setActiveIndex(newIndex),
    easing: "ease",
    prevArrow: <NavigationButton direction="prev" />,
    nextArrow: <NavigationButton direction="next" />
  };

  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 h-32 w-32 md:h-64 md:w-64 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-40 w-40 md:h-80 md:w-80 rounded-full bg-blue-600/10 blur-3xl" />
      
      <Slide {...properties} ref={slideRef}>
        {slides.map((slide, index) => (
          <div key={index} className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-transparent z-10" />
            
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              quality={85}
              className="object-cover"
            />
            
            <div className="absolute inset-0 flex flex-col justify-center items-start z-20">
              <SlideContent title={slide.title} subtitle={slide.subtitle} />
              <div className="px-4 sm:px-6 md:px-8 pt-4 md:pt-6">
                <AppointmentButton 
                  onClick={handleAppointmentClick}
                  isAnimating={isButtonAnimating}
                />
              </div>
            </div>
          </div>
        ))}
      </Slide>
      
      {/* Mobile navigation */}
      {showMobileNav && (
        <div className="absolute inset-0 z-30 flex pointer-events-none">
          <div className="h-full w-1/4 flex items-center justify-start pl-2 pointer-events-auto">
            <NavigationButton 
              direction="prev" 
              onClick={() => slideRef.current?.goBack()}
            />
          </div>
          <div className="h-full w-2/4" />
          <div className="h-full w-1/4 flex items-center justify-end pr-2 pointer-events-auto">
            <NavigationButton 
              direction="next" 
              onClick={() => slideRef.current?.goNext()}
            />
          </div>
        </div>
      )}
      
      {/* Slide indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => slideRef.current?.goTo(index)}
            className="p-2 focus:outline-none touch-action-manipulation"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div 
              className={`
                relative h-2 w-2 rounded-full transition-all duration-300
                ${activeIndex === index 
                  ? 'bg-blue-500 scale-125' 
                  : 'bg-white/40 hover:bg-white/60'
                }
              `}
            >
              {activeIndex === index && (
                <span className="absolute -inset-1 rounded-full bg-blue-500/30 animate-ping" />
              )}
            </div>
          </button>
        ))}
      </div>

      <style jsx global>{`
        @keyframes slide-fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-slide-fade-in {
          animation: slide-fade-in 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
          animation-delay: 0.2s;
        }
        
        @keyframes button-press {
          0% { transform: scale(1); }
          50% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
        
        .animate-button-press {
          animation: button-press 0.6s ease-in-out;
        }

        .react-slideshow-container .nav {
          z-index: 40;
        }

        .react-slideshow-container .nav:first-of-type {
          margin-left: 16px;
        }

        .react-slideshow-container .nav:last-of-type {
          margin-right: 16px;
        }

        @media (max-width: 768px) {
          .react-slideshow-container .nav {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;