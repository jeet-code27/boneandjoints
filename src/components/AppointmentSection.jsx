import React from 'react';
import { Calendar } from 'lucide-react';

const AppointmentSection = () => {
  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-cyan-400 py-20">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header Section with improved spacing */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Book Your Consultation with
            <span className="block mt-2">Dr. Abhishek Saxena</span>
          </h2>
          <p className="text-2xl font-semibold text-cyan-100 animate-fade-in">
            Orthopedic Surgeon
          </p>
          <p className="text-lg text-cyan-50 max-w-2xl mx-auto leading-relaxed">
            Ready to restore your active, pain-free lifestyle? Schedule your appointment today with Dr. Abhishek Saxena, an expert orthopedic surgeon.
          </p>
        </div>

        {/* Key Benefits with enhanced grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-800/20 transition-all duration-300 cursor-default"
            >
              <div className="flex-shrink-0">
                <div className="text-cyan-300 font-bold text-2xl">▶</div>
              </div>
              <p className="text-cyan-50 text-lg leading-relaxed">{benefit}</p>
            </div>
          ))}
        </div>

        {/* Additional Info with improved visibility */}
        <div className="text-center space-y-4 mb-12 bg-blue-800/20 p-6 rounded-lg">
          <p className="text-xl text-cyan-100">
            Available for consultations Monday through Saturday
          </p>
          <p className="text-xl text-cyan-100 font-semibold">
            Emergency services available 24/7
          </p>
        </div>

        {/* Call-to-action button with enhanced styling */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 bg-white rounded-lg 
            hover:bg-cyan-50 focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 
            focus:ring-offset-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <Calendar className="w-6 h-6 mr-3" />
            Book Your Consultation Now
          </button>
        </div>
      </div>
    </div>
  );
};

// Benefits array for cleaner rendering
const benefits = [
  "Receive personalized care tailored to your specific needs",
  "Access advanced treatment options for bone, joint, and muscle concerns",
  "Benefit from customized recovery plans for lasting health",
  "Affordable rates with flexible payment plans",
  "Comprehensive consultations to address your overall well-being",
  "Trusted expertise in managing sports injuries, arthritis, fractures, and more"
];

export default AppointmentSection;