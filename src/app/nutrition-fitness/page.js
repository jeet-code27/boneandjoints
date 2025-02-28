"use client";
import AboutHero from "@/components/AboutHero";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function NutritionFitness(){
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });
    const [errors, setErrors] = useState({
        phoneNumber: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    
    // Validate phone number format (exactly 10 digits)
    const validatePhoneNumber = (phone) => {
        // Check if phone number contains exactly 10 digits
        return /^\d{10}$/.test(phone);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'phoneNumber') {
            // Clear previous errors when user types
            setErrors(prev => ({...prev, phoneNumber: ''}));
            
            // Only update if input is numeric and no longer than 10 digits
            if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
    };
    
    // Live validation for phone number
    useEffect(() => {
        if (formData.phoneNumber && formData.phoneNumber.length > 0) {
            if (formData.phoneNumber.length < 10) {
                setErrors(prev => ({
                    ...prev, 
                    phoneNumber: 'Phone number must be 10 digits'
                }));
            } else if (!validatePhoneNumber(formData.phoneNumber)) {
                setErrors(prev => ({
                    ...prev, 
                    phoneNumber: 'Phone number should contain only 10 digits'
                }));
            } else {
                setErrors(prev => ({...prev, phoneNumber: ''}));
            }
        }
    }, [formData.phoneNumber]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validate phone number before submission
        if (!validatePhoneNumber(formData.phoneNumber)) {
            setErrors(prev => ({
                ...prev, 
                phoneNumber: 'Phone number must be exactly 10 digits'
            }));
            return;
        }
        
        setIsLoading(true);
        setError('');
    
        try {
            // Create form data object
            const formDataObj = new FormData();
            Object.keys(formData).forEach(key => {
                formDataObj.append(key, formData[key]);
            });

            // Google Apps Script URL
            const scriptURL = 'https://script.google.com/macros/s/AKfycbzxJKbHSuOb5ww7uL94fpvZKC80GUw4J5MHFnNEqplfzir77ymP9gbwrKoFNBhNxZox/exec';
            
            // Use no-cors mode to bypass CORS restrictions
            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                body: formDataObj,
                // Don't set Content-Type header when using FormData and no-cors mode
            });

           
            setIsSubmitted(true);
        } catch (err) {
            setError('There was an error submitting your form. Please try again.');
            console.error('Submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };
    
    // Health resources data with image paths
    const healthResources = [
        { 
            id: 1, 
            name: 'Vitamin B12 & Calcium Rich Foods', 
            description: 'A guide to foods rich in Vitamin B12 and Calcium for better health', 
            color: 'bg-green-500', 
            imagePath: '/images/vitamin-b12-calcium-foods.jpg', 
            resourceTitle: 'vitamin-b12-calcium-foods.jpg'
        },
        { 
            id: 2, 
            name: 'Beneficial & Harmful Foods for Weak Knees', 
            description: 'Discover the best foods for knee strength and the ones to avoid', 
            color: 'bg-blue-500', 
            imagePath: '/images/knee-health-foods.jpg', 
            resourceTitle: 'knee-health-foods.jpg'
        },
        { 
            id: 3, 
            name: 'Foods for Strong & Weak Bones', 
            description: 'A comparison of foods that strengthen bones and those that weaken them', 
            color: 'bg-purple-500', 
            imagePath: '/images/bone-health-foods.jpg', 
            resourceTitle: 'bone-health-foods.jpg'
        },
        { 
            id: 4, 
            name: 'Health Benefits of Plantar Fasciitis Exercises', 
            description: 'Learn how specific exercises can help with plantar fasciitis and overall foot health', 
            color: 'bg-red-500', 
            imagePath: '/images/plantar-fasciitis-benefits.jpg', 
            resourceTitle: 'plantar-fasciitis-benefits.jpg'
        },
        { 
            id: 5, 
            name: 'Health Benefits of Plantar Fasciitis Exercises', 
            description: 'Explore the positive effects of plantar fasciitis exercises for foot wellness', 
            color: 'bg-yellow-500', 
            imagePath: '/images/plantar-fasciitis-benefits-2.jpg', 
            resourceTitle: 'plantar-fasciitis-benefits-2.jpg'
        }
    ];
    
    
    // Function to handle resource download
    const downloadResource = async (resource) => {
        try {
            // Fetch the image
            const response = await fetch(resource.imagePath);
            const blob = await response.blob();
            
            // Create a download link
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = resource.resourceTitle;
            
            // Trigger download
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            window.URL.revokeObjectURL(url);
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
            alert('Failed to download the image. Please try again.');
        }
    };
    
    // Calculate validation status and styling
    const getInputStatus = (field) => {
        if (field === 'phoneNumber') {
            if (!formData.phoneNumber) return 'default';
            if (errors.phoneNumber) return 'error';
            if (validatePhoneNumber(formData.phoneNumber)) return 'success';
            return 'default';
        }
        return 'default';
    };
    
    return(
        <>
            <AboutHero
                bannerImage="/images/aboutus-banner.jpg"
                title="Dr. Abhishek Saxena"
                subtitle="Transforming Lives with Advanced Orthopedic Solutions"
                breadcrumbs={[
                    { label: 'Home', path: '/' },
                    { label: 'Nutrition Fitness', path: '/nutrition-fitness' }
                ]}
            />
            <div className="min-h-screen bg-gray-50">
                <Head>
                    <title>Health & Fitness Resources</title>
                    <meta name="description" content="Get valuable health and fitness resources" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <div className="container mx-auto px-4 py-12">
                    <main className="flex flex-col items-center justify-center">
                        {!isSubmitted ? (
                            <div className="w-full max-w-md">
                                <div className="text-center mb-10">
                                    <h1 className="text-3xl md:text-4xl font-bold  bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4">
                                        Complete this form to learn about healthy food and exercise!
                                    </h1>
                                    <p className="text-gray-600">
                                        Fill in your details to access exclusive health and fitness resources
                                    </p>
                                </div>
                                
                                <form 
                                    onSubmit={handleSubmit} 
                                    className="bg-white shadow-xl rounded-xl p-8 transition-all duration-300 hover:shadow-2xl"
                                >
                                    <div className="mb-6">
                                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Enter your full name"
                                        />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                                            placeholder="Enter your email address"
                                        />
                                    </div>
                                    
                                    <div className="mb-6">
                                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                                            Phone Number
                                            <span className="text-xs ml-2 text-gray-500">(Exactly 10 digits)</span>
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="tel"
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                maxLength={10}
                                                className={`w-full px-4 py-3 rounded-lg border 
                                                    ${getInputStatus('phoneNumber') === 'error' ? 'border-red-500 focus:ring-red-500' : 
                                                    getInputStatus('phoneNumber') === 'success' ? 'border-green-500 focus:ring-green-500' : 
                                                    'border-gray-300 focus:ring-indigo-500'} 
                                                    focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200
                                                    ${formData.phoneNumber.length > 0 ? 'pr-10' : ''}`}
                                                placeholder="Enter your 10-digit phone number"
                                            />
                                            {getInputStatus('phoneNumber') === 'success' && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                            {getInputStatus('phoneNumber') === 'error' && (
                                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                        {errors.phoneNumber && (
                                            <div className="mt-2 flex items-center text-sm text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.phoneNumber}
                                            </div>
                                        )}
                                        <div className="mt-2 text-xs text-gray-500">
                                            <ul className="list-disc list-inside">
                                                <li className={`${validatePhoneNumber(formData.phoneNumber) ? 'text-green-500' : ''}`}>Must be exactly 10 digits</li>
                                                <li className={`${/^\d+$/.test(formData.phoneNumber) ? 'text-green-500' : ''}`}>Only numbers are allowed (0-9)</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            <span className="font-bold">Disclaimer:</span> The content uploaded on this page, including but not limited to the nutrition chart and exercise chart, is the intellectual property of Dr. Abhishek Saxena. Any unauthorized use, reproduction, or distribution of this material without prior consent is strictly prohibited.
                                        </p>
                                    </div>
                                    
                                    {error && (
                                        <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg border border-red-200">
                                            {error}
                                        </div>
                                    )}
                                    
                                    <button 
                                        type="submit" 
                                        className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all duration-300 
                                            ${isLoading || errors.phoneNumber ? 'bg-indigo-400 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 shadow-lg hover:shadow-indigo-200'}`}
                                        disabled={isLoading || errors.phoneNumber !== ''}
                                    >
                                        {isLoading ? (
                                            <span className="flex items-center justify-center">
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Submitting...
                                            </span>
                                        ) : 'Submit'}
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="w-full">
                                <div className="text-center mb-10">
                                    <h1 className="text-3xl md:text-4xl font-bold  bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4">Thank You for Submitting!</h1>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        Here are your health and fitness resources. Click on each card to download the respective resource.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {healthResources.map((resource) => (
                                        <div 
                                            key={resource.id} 
                                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                                        >
                                            <div className="h-48 relative overflow-hidden">
                                                <Image
                                                    src={resource.imagePath}
                                                    alt={resource.name}
                                                    fill
                                                    className="object-cover"
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                                    <h2 className="text-xl font-bold text-white">{resource.name}</h2>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                                <button
                                                    onClick={() => downloadResource(resource)}
                                                    className="w-full py-2 px-4 bg bg-gradient-to-r from-blue-900 to-cyan-400  hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download Image
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </main>

                    <footer className="mt-16 text-center text-gray-600">
                        <p>© {new Date().getFullYear()} Dr. Abhishek Saxena - All Rights Reserved</p>
                    </footer>
                </div>
            </div>
        </>
    )
}