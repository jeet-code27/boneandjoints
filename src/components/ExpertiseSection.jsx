"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Animations configuration
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

// Card Component
const ExpertiseCard = ({ title, description, imageSrc, linkUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col items-center max-w-sm mx-auto">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-105"
          priority={false}
        />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-center mb-4">{description}</p>
      
      <Link href={linkUrl}>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-shadow"
        >
          Read More
        </motion.button>
      </Link>
    </div>
  );
};

// Main Component
const ExpertiseSection = () => {
  const expertiseData = [
    {
      title: "Shoulder Arthroscopy",
      description: "Minimally invasive surgical procedure to diagnose and treat shoulder conditions including rotator cuff tears, impingement syndrome, labral tears, and shoulder instability.",
      imageSrc: "/images/shoulderinjury.jpg",
      linkUrl: "/arthroscopy/shoulder-arthroscopy"
    },
    {
      title: "Knee Injury",
      description: "Don't let knee pain hold you back. Our specialized care targets a range of knee injuries, including ACL, PCL, MCL, MPFL, LCL tears, meniscus tears, and fractures.",
      imageSrc: "/images/kneeinjury.jpg",
      linkUrl: "/sports-injury/knee-injury"
    },
    {
      title: "Sports Injury",
      description: "Whether it's your hip, ankle, elbow, or wrist, our dedicated team at our clinic is here to help you overcome sports-related injuries and get you back in the game.",
      imageSrc: "/images/sportsinjury.jpg",
      linkUrl: "/sports-injury/"
    }
  ];


  return (
    <section className="py-16 px-4 bg-gray-50">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInDown}
        className="text-center mb-12"
      >
        <h2 className="text-2xl font-bold text-black mb-4">Our Expertise</h2>
        <h3 className="text-5xl font-bold">
          <span className="text-black">
            Treatment for Your
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] inline-block text-transparent bg-clip-text">
            Orthopedic Needs
          </span>
        </h3>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {expertiseData.map((item, index) => (
          <motion.div
            key={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ExpertiseCard {...item} />
          </motion.div>
        ))}
      </div>
      
      
    </section>
  );
};

export default ExpertiseSection;