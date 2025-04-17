import React from 'react';

const AboutDoctor = ({ 
  doctorImage = '/images/abhishek.png'  // Default placeholder image
}) => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Content Column - Now on Left */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text">
              Dr. Abhishek Saxena
            </h2>
            <h1 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text">
              Senior Consultant - Shoulder, Knee & Sport Injuries
            </h1>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                Welcome to the practice of Dr. Abhishek Saxena, a distinguished orthopedic surgeon dedicated to providing exceptional care in the field of orthopedics. Dr. Saxena's academic foundation is built on an MBBS degree from the prestigious MS Ramaiah Medical College, Bangalore. He further honed his expertise by completing his D. Ortho at BMCRI, one of Bangalore's premier institutions, associated with the historic Victoria Hospital.
              </p>

              <p>
                Dr. Saxena holds a DNB Ortho from Tejasvini Hospital & SSCOT, Mangalore, where he deepened his knowledge in advanced orthopedic techniques. His commitment to excellence led him to complete a fellowship in joint replacement and arthroscopy under the Indian Orthopaedic Association, guided by the renowned Dr. S.S. Babhulkar.
              </p>

              <p>
                With over a decade of experience and more than 500 successful surgeries, Dr. Saxena has earned a reputation for his surgical precision and compassionate patient care. He is currently serving as a consultant orthopedic surgeon at Jeevan Jyoti Hospital, Ajmer, where he continues to transform lives with his expertise in joint replacement and arthroscopic procedures.
              </p>

              <p>
                Dr. Abhishek Saxena is dedicated to improving mobility and enhancing the quality of life for his patients through personalized care and advanced treatment options.
              </p>
            </div>
          </div>

          {/* Image Column - Now on Right */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <div className="rounded-lg overflow-hidden shadow-lg bg-[#C3E1F2]">
              <img
                src={doctorImage}
                alt="Dr. Abhishek Saxena"
                className="w-full h-auto object-fit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDoctor;