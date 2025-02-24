'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';

const SprainInjury = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Sports Injury', path: '/sports-injury' }
         ]}
      />
    <div className="max-w-8xl mx-auto p-6 bg-gray-50">
      <div className="space-y-8">
        {/* Doctor Info Section */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative h-28 rounded-full bg-[#C3E1F2] w-24">
                  <Image
                    src="/images/abhishek.png"
                    alt="Dr. Abhishek Saxena"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Dr. Abhishek Saxena</h2>
                  <p className="text-gray-600">Sports Medicine & Joint Specialist</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 hidden sm:inline text-gray-600">(500+ reviews)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0">
                <button className="px-6 py-2 bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white rounded-lg transition-colors">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Experience</p>
                <p className="font-bold">10 Years</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Award className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Sprains Treated</p>
                <p className="font-bold">500+</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">24/7 Support</p>
                <p className="font-bold">Available</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Sprain Injury Treatment & Recovery
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto rounded-lg overflow-hidden">
                <Image
                  src="/images/sprains.webp"
                  alt="Sprain Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Sprain Treatment & Rehabilitation</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Understanding Sprains
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A sprain occurs when ligaments - the tough bands of fibrous tissue that connect bones together - are stretched or torn. Sprains can happen during sports, accidents, or everyday activities. The severity can range from mild stretching to complete tears, requiring different treatment approaches.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Common Types of Sprains
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Ankle sprains (most common)</li>
                  <li>Wrist sprains</li>
                  <li>Knee sprains</li>
                  <li>Thumb sprains</li>
                  <li>Elbow sprains</li>
                  <li>Shoulder sprains</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our comprehensive treatment follows the RICE protocol and beyond:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Immediate assessment and grading of the sprain</li>
                  <li>Custom treatment plan development</li>
                  <li>Advanced imaging when necessary</li>
                  <li>Pain management techniques</li>
                  <li>Progressive rehabilitation program</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Treatment Methods
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We offer a range of treatment options including:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Professional taping and bracing</li>
                  <li>Manual therapy techniques</li>
                  <li>Therapeutic exercises</li>
                  <li>Ultrasound and electrical stimulation</li>
                  <li>Joint mobilization</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery Process
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our rehabilitation program focuses on:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Restoration of range of motion</li>
                  <li>Progressive strength building</li>
                  <li>Balance and proprioception training</li>
                  <li>Sport-specific movement patterns</li>
                  <li>Prevention of re-injury</li>
                </ul>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Early treatment of sprains is crucial for optimal recovery. Contact Dr. Abhishek Saxena for expert diagnosis and treatment of your sprain injury.
                </p>
                <button className="px-6 py-2 bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white rounded-lg transition-colors">
                  Book Consultation
                </button>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SprainInjury;