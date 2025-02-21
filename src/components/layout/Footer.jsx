import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <div className="footer-wrapper bg-gray-50">
      {/* Image above footer with border */}
      <div className="w-full flex justify-center border-t border-gray-300">
        <div className="container">
          <div className="flex justify-center">
            {/* Replace with your actual image path and dimensions */}
            <Image 
              src="/images/footer-bg.png" 
              alt="Footer decorative image"
              width={1200}
              height={200}
              className="w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="w-full bg-[#ECF1FA] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo and Description Column */}
            <div className="flex flex-col">
              <div className="mb-6">
                {/* Significantly increased logo size */}
                <Image 
                  src="/images/logoo.png" 
                  alt="Dr. Abhishek Saxena Logo"
                  width={320}
                  height={100}
                  className="h-32 w-auto"
                />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dr. Abhishek Saxena, a distinguished orthopedic surgeon, brings over 10 years of experience and 500+ successful surgeries.
              </p>
              
              {/* Social Icons */}
              <div className="mt-6 flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                  <Facebook size={28} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors duration-300">
                  <Instagram size={28} />
                </a>
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="flex flex-col">
              {/* Attractive heading with underline */}
              <h3 className="font-bold text-xl mb-5 text-gray-800 relative inline-block">
                Quick Links
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-3 mt-2">
                <li className="group">
                  <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    <ChevronRight size={16} className="mr-2 text-blue-500" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    <ChevronRight size={16} className="mr-2 text-blue-500" />
                    <span>About Us</span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    <ChevronRight size={16} className="mr-2 text-blue-500" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li className="group">
                  <Link href="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 flex items-center group-hover:translate-x-1 transition-transform duration-300">
                    <ChevronRight size={16} className="mr-2 text-blue-500" />
                    <span>Blogs</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info Column */}
            <div className="flex flex-col">
              {/* Attractive heading with underline */}
              <h3 className="font-bold text-xl mb-5 text-gray-800 relative inline-block">
                Contact Us
                <span className="absolute bottom-0 left-0 w-16 h-1 bg-blue-500 rounded-full"></span>
              </h3>
              <ul className="space-y-4 mt-2">
                <li className="flex items-start group">
                  <Phone size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <a href="tel:+918618243967" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 group-hover:translate-x-1 transition-transform duration-300">
                    +91 86182 43967
                  </a>
                </li>
                <li className="flex items-start group">
                  <Mail size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <a href="mailto:abhishek.saxena1120@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 break-words group-hover:translate-x-1 transition-transform duration-300">
                    abhishek.saxena1120@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <MapPin size={20} className="text-blue-500 mr-3 mt-1 flex-shrink-0" />
                  <address className="text-gray-700 not-italic font-normal text-sm leading-relaxed">
                    Jeevan Jyoti Hospital<br />
                    19, 26B, Beawar Rd, Nai Basti,<br />
                    Ramganj, Ajmer<br />
                    Rajasthan 305001
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-600">
            <p>Copyright © 2024 | Powered by <a href="https://seocialmedia.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SEOcial Media Solutions</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;