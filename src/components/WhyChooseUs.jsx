"use client";

import React from 'react';
import Image from 'next/image';

const FeatureItem = ({ icon, title, description }) => (
  <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-300">
    <span className="text-2xl text-cyan-300">{icon}</span>
    <p className="text-lg">
      <span className="font-semibold text-cyan-300">{title}</span> {description}
    </p>
  </div>
);

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expertise in Orthopedics:",
      description: "Over 10 years of experience and more than 500 successful surgeries, specializing in joint replacement, arthroscopy, and advanced orthopedic care.",
    },
    {
      title: "Personalized Treatment Plans:",
      description: "Customized care tailored to each patient's unique needs, ensuring effective recovery and optimal outcomes.",
    },
    {
      title: "State-of-the-Art Technology:",
      description: "Utilizing the latest diagnostic tools and treatment methods for precise and efficient results.",
    },
    {
      title: "Minimally Invasive Techniques:",
      description: "Advanced procedures with smaller incisions, reduced pain, and quicker recovery times.",
    },
    {
      title: "Comprehensive Rehabilitation Support:",
      description: "Dedicated guidance through physical therapy and recovery to help patients return to their daily activities with confidence.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-900 to-cyan-400 py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Content Section */}
          <div className="w-full md:w-7/12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Why Choose<br />Dr. Abhishek Saxena
            </h2>
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-medium mb-6">
                With a patient-first approach, Dr. Abhishek Saxena offers:
              </p>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    icon="▶"
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Section */}
          <div className="w-full md:w-5/12">
            <div className="bg-white p-3 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="relative h-[600px] w-full">
                <Image
                  src="/images/surgery.jpg"
                  alt="Dr. Abhishek Saxena"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;