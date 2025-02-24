'use client';

import React from 'react';
import { Star, Calendar, Award, Phone } from 'lucide-react';
import Image from 'next/image';
import AboutHero from '@/components/AboutHero';

const KneeArthroscopy = () => {
  return (
    <>
     <AboutHero
          bannerImage="/images/aboutus-banner.jpg"
          title="Dr. Abhishek Saxena"
          subtitle="Transforming Lives with Advanced Orthopedic Solutions"
          breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Arthoscopy', path: '/arthroscopy' }
         ]}
      />
    <div className="max-w-8xl mx-auto p-6 bg-gray-50">
      <div className="space-y-8">
        {/* Doctor Info Section */}
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="h-28 w-24 rounded-full bg-[#C3E1F2] flex items-center justify-center">
                 <div className="relative h-28 w-24">
                                   <Image
                                     src="/images/abhishek.png"
                                     alt="Dr. Abhishek Saxena"
                                     fill
                                     className="rounded-full object-cover"
                                   />
                                 </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Dr. Abhishek Saxena</h2>
                  <p className="text-gray-600">Senior Orthopedic Surgeon</p>
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
                <p className="text-sm text-gray-600">Surgeries</p>
                <p className="font-bold">1000+</p>
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
              Knee Arthroscopy Surgery
            </h1>

            {/* Image Section */}
            <div className="mb-8">
              <div className="relative aspect-square w-full max-w-2xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
                               <Image
                                  src="/images/knee-arthroscopy.webp"
                                  alt="Knee Arthroscopy Procedure"
                                  fill
                                  className="object-cover"
                                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <p className="text-white text-sm">Knee Arthroscopy</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  What is Knee Arthroscopy?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Knee arthroscopy is a minimally invasive surgical procedure that uses a tiny camera (arthroscope) to diagnose and treat various knee conditions. This modern technique allows surgeons to view the knee joint on a high-definition screen through small incisions, enabling precise treatment with minimal tissue disruption. The procedure is particularly effective for treating sports injuries and degenerative conditions of the knee.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Advanced Surgical Techniques
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Dr. Abhishek Saxena utilizes cutting-edge arthroscopic equipment and techniques to perform precise knee procedures through tiny incisions. Our advanced imaging systems provide crystal-clear visualization of the knee joint, allowing for accurate diagnosis and treatment. Most procedures are performed under regional anesthesia, and patients typically return home the same day.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Conditions Treated
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Meniscus tears and repairs</li>
                  <li>ACL (Anterior Cruciate Ligament) injuries</li>
                  <li>Cartilage damage and repairs</li>
                  <li>Synovitis and inflammation</li>
                  <li>Patella (kneecap) problems</li>
                  <li>Loose bodies in the knee joint</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Comprehensive Care Approach
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our knee arthroscopy program includes:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-600">
                  <li>Advanced MRI and diagnostic imaging</li>
                  <li>Personalized surgical planning</li>
                  <li>Sports-specific rehabilitation protocols</li>
                  <li>Progressive physical therapy program</li>
                  <li>Return-to-activity assessment</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Recovery and Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Recovery from knee arthroscopy is typically faster than traditional open surgery. Most patients can bear weight on the operated leg within a few days and return to normal activities within 4-6 weeks. Athletes can usually return to sports between 1-3 months, depending on the procedure performed. Our success rates are excellent, with over 90% of patients reporting significant improvement in knee function and reduced pain following arthroscopic treatment.
                </p>
              </section>

              <section className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Schedule a Consultation
                </h3>
                <p className="text-gray-600 mb-4">
                  Experiencing knee pain or limited mobility? Schedule a comprehensive evaluation with Dr. Abhishek Saxena to discuss if knee arthroscopy is right for you.
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

export default KneeArthroscopy;