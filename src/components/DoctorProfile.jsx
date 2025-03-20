import React from 'react';
import Image from 'next/image';

const DoctorProfile = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Image Section */}
          <div className="lg:ml-10 lg:w-[30%] w-full">
            <div className="rounded-full bg-[#C3E1F2] overflow-hidden">
              <div className="relative w-full" style={{ maxHeight: '650px' }}>
                <Image
                  src="/images/abhishek.png"
                  alt="Dr. Abhishek Saxena"
                  width={650}
                  height={650}
                  priority
                  className="w-full h-auto max-h-[650px]"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-3/5 space-y-6 sm:mt-20">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] inline-block text-transparent bg-clip-text">
              Dr. Abhishek Saxena
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
              Orthopedic Surgeon In Ajmer
            </h2>
            <h3 className="text-2xl text-gray-600 font-medium">
              Senior Consultant - Shoulder, Knee & Sport Injuries
            </h3>

            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed text-lg text-justify">
                Welcome to the practice of Dr. Abhishek Saxena, Senior Consultant 
                specializing in shoulder, knee, and sports injuries. Dr. Abhishek Saxena's 
                academic journey reflects his commitment to excellence, starting 
                with an MBBS from the prestigious MS Ramaiah Medical College, 
                Bangalore, ranked 3rd in Bangalore by India Today in 2024. He 
                further enhanced his expertise with a Diploma in Orthopedics from 
                BMCRI, consistently ranked among the top 15 institutions in India 
                and affiliated with the historic Victoria Hospital, and a DNB in 
                Orthopedics from Tejasvini Hospital & SSCOT, one of Karnataka's 
                premier orthopedic centers. Dr. Saxena is dedicated to providing 
                world-class orthopedic care tailored to individual needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;