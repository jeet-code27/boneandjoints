"use client";
import AboutHero from "@/components/AboutHero";
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';

export default function NutritionFitness() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    });
    const [errors, setErrors] = useState({
        fullName: '',
        phoneNumber: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const validatePhoneNumber = (phone) => {
        return /^\d{10}$/.test(phone);
    };

    const validateName = (name) => {
        return /^[A-Za-z\s]+$/.test(name);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'phoneNumber') {
            setErrors(prev => ({ ...prev, phoneNumber: '' }));

            if (value === '' || (/^\d+$/.test(value) && value.length <= 10)) {
                setFormData(prev => ({
                    ...prev,
                    [name]: value
                }));
            }
        } else if (name === 'fullName') {
            if (value === '' || validateName(value)) {
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

    useEffect(() => {
        if (formData.fullName && formData.fullName.length > 0) {
            if (!validateName(formData.fullName)) {
                setErrors(prev => ({
                    ...prev, 
                    fullName: 'Name should contain only alphabets and spaces'
                }));
            } else {
                setErrors(prev => ({...prev, fullName: ''}));
            }
        }
    }, [formData.fullName]);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateName(formData.fullName)) {
            setErrors(prev => ({
                ...prev, 
                fullName: 'Name should contain only alphabets and spaces'
            }));
            return;
        }
        
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
            const submissionData = {
                ...formData,
                timestamp: new Date()
            };
            
            await addDoc(collection(db, "nutritionFormSubmissions"), submissionData);
            setIsSubmitted(true);
        } catch (err) {
            setError('There was an error submitting your form. Please try again.');
            console.error('Firebase submission error:', err);
        } finally {
            setIsLoading(false);
        }
    };
    
    const healthResources = [
        { 
            id: 1, 
            name: 'Neck Exercises', 
            description: 'A comprehensive guide to neck exercises for pain relief and strength', 
            color: 'from-green-500 to-green-700', 
            filePath: '/pdfs/neck-exercises.pdf', 
            fileName: 'neck-exercises.pdf'
        },
        { 
            id: 2, 
            name: 'Planter Exercises', 
            description: 'A detailed guide to planter exercises for foot health and strength', 
            color: 'from-blue-500 to-blue-700', 
            filePath: '/pdfs/planter-exercises.pdf', 
            fileName: 'planter-exercises.pdf'
        },
        { 
            id: 3, 
            name: 'Shoulder Exercises', 
            description: 'Shoulder exercises for pain relief and strength', 
            color: 'from-purple-500 to-purple-700', 
            filePath: '/pdfs/shoulder-exercises.pdf', 
            fileName: 'shoulder-exercises.pdf'
        },
        { 
            id: 4, 
            name: 'Knee Exercises', 
            description: 'Knee exercises for pain relief and strength', 
            color: 'from-red-500 to-red-700', 
            filePath: '/pdfs/knee-exercises.pdf', 
            fileName: 'knee-exercises.pdf'
        },
        { 
            id: 5, 
            name: 'Hip Flexion Exercises', 
            description: 'Hip flexion exercises for pain relief and strength', 
            color: 'from-yellow-500 to-yellow-700', 
            filePath: '/pdfs/hipflexion.pdf', 
            fileName: 'hipflexion-exercises.pdf'
        }
    ];
    
    const downloadResource = (resource) => {
        const link = document.createElement('a');
        link.href = resource.filePath;
        link.download = resource.fileName || 'download';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
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
                                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4">
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
                                            className={`w-full px-4 py-3 rounded-lg border 
                                                ${errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-indigo-500'} 
                                                focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200`}
                                            placeholder="Enter your full name"
                                        />
                                        {errors.fullName && (
                                            <div className="mt-2 flex items-center text-sm text-red-600">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                                {errors.fullName}
                                            </div>
                                        )}
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
                                    <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-cyan-400 text-transparent bg-clip-text mb-4">Thank You for Submitting!</h1>
                                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                        Here are your health and fitness resources. Click on each card to download the respective PDF.
                                    </p>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                                    {healthResources.map((resource) => (
                                        <div 
                                            key={resource.id} 
                                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                                            onClick={() => downloadResource(resource)}
                                        >
                                            <div className={`h-48 bg-gradient-to-br ${resource.color} flex items-center justify-center`}>
                                                <div className="text-white text-center p-4">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="text-xl font-bold">{resource.name}</span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <p className="text-gray-600 mb-4">{resource.description}</p>
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        downloadResource(resource);
                                                    }}
                                                    className="w-full py-2 px-4 bg-gradient-to-r from-blue-900 to-cyan-400 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                    </svg>
                                                    Download PDF
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