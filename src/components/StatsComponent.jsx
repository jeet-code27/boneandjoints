import React from 'react';

const StatsComponent = () => {
  const stats = [
    {
      image: "/images/doctor.png", 
      value: "10+",
      label: "Years of Experience"
    },
    {
      image: "/images/love.png", 
      value: "2000+",
      label: "Happy Patients"
    },
    {
      image: "/images/stretcher.png", 
      value: "500+",
      label: "Successful Surgeries"
    },
    {
      image: "/images/trophy.png", 
      value: "50+",
      label: "Winning Awards"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <div className="mb-5">
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  width={56}
                  height={56}
                  className="w-14 h-14 object-contain"
                />
              </div>
              <h2 className="text-5xl font-bold text-indigo-600 mb-3">
                {stat.value}
              </h2>
              <p className="text-gray-600 text-center text-lg">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsComponent;