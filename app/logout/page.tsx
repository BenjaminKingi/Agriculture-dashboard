
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '../../components/ui/Button';

export default function LogoutPage() {
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = '/login';
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mb-6">
              <i className="ri-check-line text-green-600 text-3xl"></i>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Successfully Logged Out
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Thank you for using AgriDash. You have been securely logged out of your account.
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
              <i className="ri-time-line"></i>
              <span>Redirecting to login page in {countdown} seconds</span>
            </div>
            
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${((5 - countdown) / 5) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-3">
            <Link href="/login">
              <Button className="w-full" size="lg">
                <i className="ri-login-box-line mr-2"></i>
                Return to Login
              </Button>
            </Link>
            
            <Link href="/">
              <Button variant="outline" className="w-full" size="lg">
                <i className="ri-home-line mr-2"></i>
                Go to Homepage
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
            Security Tips
          </h3>
          <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <i className="ri-shield-check-line text-green-500"></i>
              <span>Always log out when using shared computers</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-lock-line text-green-500"></i>
              <span>Keep your login credentials secure</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-refresh-line text-green-500"></i>
              <span>Clear browser cache regularly</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full">
        <img
          src="https://readdy.ai/api/search-image?query=Peaceful%20sunset%20over%20agricultural%20fields%20with%20golden%20crops%20swaying%20in%20gentle%20breeze%2C%20distant%20farmhouse%20and%20windmill%20silhouettes%2C%20serene%20countryside%20atmosphere%20with%20warm%20orange%20and%20pink%20sky%20colors%2C%20representing%20end%20of%20productive%20day%20in%20agriculture%2C%20horizontal%20landscape%20composition&width=800&height=1200&seq=agri-logout-bg&orientation=portrait"
          alt="Agricultural sunset background"
          className="w-full h-full object-cover object-top opacity-10"
        />
      </div>
    </div>
  );
}
