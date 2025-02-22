import React from 'react';
import { Calendar } from 'lucide-react';

const AppointmentSection = () => {
  const benefits = [
    "Personalized care tailored to your specific needs",
    "Advanced treatment options for bone and joint concerns",
    "Customized recovery plans for lasting health",
    "Flexible payment plans available",
    "Expert care for sports injuries and arthritis"
  ];
  
  return (
    <section className="w-full bg-gradient-to-r from-blue-900 to-cyan-400 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header - Reduced vertical spacing */}
        <div className="text-center space-y-2 mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            Book Your Consultation with
            <span className="block mt-1">Dr. Abhishek Saxena</span>
          </h2>
          <p className="text-xl font-semibold text-cyan-100">
            Orthopedic Surgeon
          </p>
          <p className="text-base md:text-lg text-cyan-50 max-w-2xl mx-auto">
            Ready to restore your active, pain-free lifestyle? Schedule your appointment today.
          </p>
        </div>
        
        {/* Benefits - Tighter grid with larger text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-blue-800/20 transition-all duration-300"
            >
              <span className="text-cyan-300 text-xl">▶</span>
              <p className="text-cyan-50 text-base md:text-lg">{benefit}</p>
            </div>
          ))}
        </div>
        
        {/* Info Section - More compact */}
        <div className="text-center mb-6 bg-blue-800/20 py-2 px-4 rounded-lg">
          <p className="text-base md:text-lg text-cyan-100">
            Available Monday-Saturday | Emergency services 24/7
          </p>
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          <button 
            className="inline-flex items-center px-6 py-2 text-base md:text-lg font-semibold text-blue-900
                      bg-white rounded-lg hover:bg-cyan-50 transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;