"use client";
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, Menu, X, Facebook, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [activeSubmenu, setActiveSubmenu] = useState('');
  const menuTimeoutRef = useRef(null);
  const submenuTimeoutRef = useRef(null);

  const services = {
    'Replacement': {
      submenus: ['Hip Replacement', 'Knee Replacement']
    },
    'Anthroscopy': {
      submenus: ['Knee Anthroscopy', 'Hip Anthroscopy']
    },
    'Sports Injury': {
      submenus: ['Knee Injury', 'Back Injury', 'Sprains']
    }
  };

  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
      if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    };
  }, []);

  const handleMenuHover = useCallback((menu, isEntering) => {
    if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    
    if (isEntering) {
      setActiveMenu(menu);
    } else {
      menuTimeoutRef.current = setTimeout(() => {
        setActiveMenu('');
      }, 300);
    }
  }, []);

  const handleSubmenuHover = useCallback((submenu, isEntering) => {
    if (submenuTimeoutRef.current) clearTimeout(submenuTimeoutRef.current);
    
    if (isEntering) {
      setActiveSubmenu(submenu);
    } else {
      submenuTimeoutRef.current = setTimeout(() => {
        setActiveSubmenu('');
      }, 300);
    }
  }, []);

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
    setActiveMenu('');
    setActiveSubmenu('');
  }, []);

  const handleMobileMenuClick = useCallback((menu) => {
    setActiveMenu(prev => prev === menu ? '' : menu);
    setActiveSubmenu('');
  }, []);

  const handleMobileSubmenuClick = useCallback((submenu) => {
    setActiveSubmenu(prev => prev === submenu ? '' : submenu);
  }, []);

  const contactButtonClasses = "bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white px-6 py-2 rounded-md hover:shadow-lg transition-all duration-300 shadow-md shadow-blue-500/50 hover:shadow-blue-500/70";

  return (
    <>
    <div className="h-[100px]"></div> 
    
    <header className="w-full fixed top-0 left-0 z-50 bg-white">
      <div className="w-full bg-gradient-to-r from-[#1E0B9B] to-[#07CCEC] text-white py-2">
        <div className="container mx-auto px-4 flex justify-end items-center space-x-6">
          <div className="flex items-center space-x-6">
            <a href="mailto:abhishek.saxena1120@gmail.com" className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors">
              <Mail size={16} />
              <span className="hidden sm:inline"> abhishek.saxena1120@gmail.com</span>
            </a>
            <a href="tel:+918618243967" className="flex items-center space-x-2 text-sm hover:text-gray-200 transition-colors">
              <Phone size={16} />
              <span className="hidden sm:inline">+91 8618243967</span>
            </a>
            <div className="h-4 w-[1px] bg-white/30"></div>
            <div className="flex items-center space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-200 transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <div className="relative mt-4">
              <Image 
  src="/images/logo.png"
  alt="Dentist clinic"
  width={200}
  height={150}
  style={{ height: 'auto' }}  
  className="rounded object-contain"
  priority
/>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              
              <div 
                className="relative group"
                onMouseEnter={() => handleMenuHover('services', true)}
                onMouseLeave={() => handleMenuHover('services', false)}
              >
                <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  Services
                  <ChevronDown size={16} className="ml-1" />
                </button>
                
                {activeMenu === 'services' && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"
                    style={{ marginTop: '0.5rem' }}
                  >
                    {Object.entries(services).map(([service, { submenus }]) => (
                      <div 
                        key={service}
                        className="relative group"
                        onMouseEnter={() => handleSubmenuHover(service, true)}
                        onMouseLeave={() => handleSubmenuHover(service, false)}
                      >
                        <div className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors">
                          {service}
                          <ChevronDown size={16} className="inline ml-2" />
                        </div>

                        {activeSubmenu === service && (
                          <div 
                            className="absolute left-full top-0 w-48 bg-white rounded-md shadow-lg"
                            style={{ marginLeft: '0.5rem' }}
                          >
                            {submenus.map((submenu) => (
                              <Link
                                key={submenu}
                                href={`/services/${service.toLowerCase()}/${submenu.toLowerCase().replace(/\s+/g, '-')}`}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              >
                                {submenu}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/conditions" className="text-gray-700 hover:text-blue-600 transition-colors">
                All Conditions
              </Link>
              <Link href="/nutrition-fitness" className="text-gray-700 hover:text-blue-600 transition-colors">
                Nutrition & Fitness
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              
              <Link 
                href="/contact"
                className={contactButtonClasses}
              >
                Contact Us
              </Link>
            </div>

            <button 
              onClick={handleMobileMenuToggle}
              className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white"
            >
              <div className="container mx-auto px-4 pb-4">
                <Link 
                  href="/"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Home
                </Link>
                <Link 
                  href="/about"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  About Us
                </Link>

                <div className="border-b">
                  <button
                    onClick={() => handleMobileMenuClick('services')}
                    className="w-full py-2 text-left text-gray-700 hover:text-blue-600 flex justify-between items-center transition-colors"
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform duration-300 ${
                        activeMenu === 'services' ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeMenu === 'services' && (
                    <div className="pl-4">
                      {Object.entries(services).map(([service, { submenus }]) => (
                        <div key={service}>
                          <button
                            onClick={() => handleMobileSubmenuClick(service)}
                            className="w-full py-2 text-left text-gray-700 hover:text-blue-600 flex justify-between items-center transition-colors"
                          >
                            {service}
                            <ChevronDown
                              size={16}
                              className={`transform transition-transform duration-300 ${
                                activeSubmenu === service ? 'rotate-180' : ''
                              }`}
                            />
                          </button>

                          {activeSubmenu === service && (
                            <div className="pl-4">
                              {submenus.map((submenu) => (
                                <Link
                                  key={submenu}
                                  href={`/services/${service.toLowerCase()}/${submenu.toLowerCase().replace(/\s+/g, '-')}`}
                                  className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                                  onClick={handleMobileMenuToggle}
                                >
                                  {submenu}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  href="/conditions"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  All Conditions
                </Link>
                <Link 
                  href="/nutrition-fitness"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Nutrition & Fitness
                </Link>
                <Link 
                  href="/blog"
                  className="block py-2 text-gray-700 hover:text-blue-600 border-b transition-colors"
                  onClick={handleMobileMenuToggle}
                >
                  Blog
                </Link>
                <Link 
                  href="/contact"
                  className={`inline-block mt-4 ${contactButtonClasses}`}
                  onClick={handleMobileMenuToggle}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
    </>
  );
};

export default Header;