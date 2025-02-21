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
    <div className="w-full bg-gradient-to-r from-blue-900 to-blue-400 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-center"
            >
              <div className="mb-4">
                <img 
                  src={stat.image} 
                  alt={stat.label}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="text-4xl font-bold text-indigo-600 mb-2">
                {stat.value}
              </h2>
              <p className="text-gray-600 text-center">
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