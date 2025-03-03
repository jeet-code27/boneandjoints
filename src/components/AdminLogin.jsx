'use client';

import React, { useState, useEffect } from 'react';
import { initializeApp, getApps } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  query, 
  orderBy,
  where,
  Timestamp // Import Timestamp from Firestore
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD67pl8RAdt_t306GKS704bVqFHAR78zNE",
  authDomain: "boneandjoints-17da3.firebaseapp.com",
  projectId: "boneandjoints-17da3",
  storageBucket: "boneandjoints-17da3.firebasestorage.app",
  messagingSenderId: "447832340957",
  appId: "1:447832340957:web:fc926308e38cfc55459e34"
};

// Initialize Firebase
let app;
let db;

if (typeof window !== 'undefined') {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
  } else {
    app = getApps()[0];
    db = getFirestore(app);
  }
}

const AdminLogin = () => {
  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  
  // Booking data state
  const [bookings, setBookings] = useState([]);
  const [nutritionSubmissions, setNutritionSubmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterDate, setFilterDate] = useState('');
  const [filterType, setFilterType] = useState('all');
  
  // Admin credentials - in a real app, these would not be hardcoded
  const ADMIN_USERNAME = 'admin';
  const ADMIN_PASSWORD = 'admin12345';

  // Format time to 12-hour format with AM/PM
  const formatTime = (time24h) => {
    if (!time24h) return '';
    const [hours, minutes] = time24h.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12;
    return `${hour12}:${minutes} ${ampm}`;
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setLoginError('');
      // Save authentication state to session storage
      sessionStorage.setItem('isAdminAuthenticated', 'true');
    } else {
      setLoginError('Invalid username or password');
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('isAdminAuthenticated');
  };

  // Check session storage for authentication on component mount
  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAdminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch bookings and nutrition submissions when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchBookings();
      fetchNutritionSubmissions();
    }
  }, [isAuthenticated, filterDate, filterType]);

  // Fetch bookings from Firestore
  const fetchBookings = async () => {
    if (!db) return;
    
    setIsLoading(true);
    
    try {
      let bookingsQuery = collection(db, "bookings");
      
      // Apply filters if they exist
      if (filterDate) {
        bookingsQuery = query(bookingsQuery, where("date", "==", filterDate));
      }
      
      if (filterType !== 'all') {
        bookingsQuery = query(bookingsQuery, where("consultationType", "==", filterType));
      }
      
      // Order by date and time
      bookingsQuery = query(bookingsQuery, orderBy("date", "desc"), orderBy("timeSlot", "asc"));
      
      const querySnapshot = await getDocs(bookingsQuery);
      const bookingsData = [];
      
      querySnapshot.forEach((doc) => {
        bookingsData.push({
          id: doc.id,
          ...doc.data()
        });
      });
      
      setBookings(bookingsData);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch nutrition form submissions from Firestore
const fetchNutritionSubmissions = async () => {
  if (!db) return;
  
  try {
    const submissionsQuery = query(collection(db, "nutritionFormSubmissions"), orderBy("timestamp", "desc"));
    const querySnapshot = await getDocs(submissionsQuery);
    const submissionsData = [];
    
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      submissionsData.push({
        id: doc.id,
        ...data,
        // Convert Firestore Timestamp to JavaScript Date
        timestamp: data.timestamp?.toDate() || null
      });
    });
    
    setNutritionSubmissions(submissionsData);
  } catch (error) {
    console.error("Error fetching nutrition submissions:", error);
  }
};


  // Clear filters
  const clearFilters = () => {
    setFilterDate('');
    setFilterType('all');
  };

  // Handle date filter change
  const handleDateFilterChange = (e) => {
    setFilterDate(e.target.value);
  };

  // Handle type filter change
  const handleTypeFilterChange = (e) => {
    setFilterType(e.target.value);
  };

  // Login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Login
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to access booking details
            </p>
          </div>
          
          {loginError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              {loginError}
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">Username</label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Admin dashboard (shown after successful login)
  return (
    <div className="min-h-screen my-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-700">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md text-sm font-medium"
          >
            Logout
          </button>
        </div>
        
        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
              <input
                type="date"
                value={filterDate}
                onChange={handleDateFilterChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Consultation Type</label>
              <select
                value={filterType}
                onChange={handleTypeFilterChange}
                className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
              >
                <option value="all">All Types</option>
                <option value="clinic">Clinic</option>
                <option value="hospital">Hospital</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md text-sm font-medium"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
        
        {/* Bookings table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <h2 className="text-xl font-bold text-gray-800 p-4">Appointment Bookings</h2>
          {isLoading ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">Loading bookings...</p>
            </div>
          ) : bookings.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">No bookings found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Patient</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booked On</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{booking.fullName}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{booking.phoneNumber}</div>
                        <div className="text-sm text-gray-500">{booking.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          booking.consultationType === 'clinic' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {booking.consultationType === 'clinic' ? 'Clinic' : 'Hospital'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{formatDate(booking.date)}</div>
                        <div className="text-sm text-gray-500">{formatTime(booking.timeSlot)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.location || (booking.consultationType === 'clinic' 
                          ? 'Axis Joint & Bone Clinic, Dwarka' 
                          : 'Aakash Healthcare, Dwarka')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {booking.createdAt ? new Date(booking.createdAt).toLocaleString() : 'N/A'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Nutrition Fitness Submissions */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <h2 className="text-xl font-bold text-gray-800 p-4">Nutrition Fitness Form Submissions</h2>
          {nutritionSubmissions.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">No submissions found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Full Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submitted On</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {nutritionSubmissions.map((submission) => (
  <tr key={submission.id} className="hover:bg-gray-50">
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm font-medium text-gray-900">{submission.fullName}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{submission.email}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap">
      <div className="text-sm text-gray-900">{submission.phoneNumber}</div>
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
      {submission.timestamp ? submission.timestamp.toLocaleString() : 'N/A'}
    </td>
  </tr>
))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;