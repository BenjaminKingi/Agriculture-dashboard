
'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-600 rounded-xl flex items-center justify-center">
              <i className="ri-seedling-line text-white text-3xl"></i>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="font-['Pacifico'] text-green-600">AgriDash</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Your comprehensive agriculture dashboard for monitoring sector performance, production trends, and regional insights across Kenya's agricultural landscape.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/dashboard"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-colors shadow-lg whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              <i className="ri-dashboard-line mr-2"></i>
              Access Dashboard
            </Link>
            <Link 
              href="/login"
              className="border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-8 py-4 rounded-lg font-medium text-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center"
            >
              <i className="ri-login-box-line mr-2"></i>
              Login
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-pie-chart-line text-green-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sector Overview</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Comprehensive analysis of agricultural sector performance, GDP contribution, and employment statistics.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-bar-chart-line text-blue-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Production Analytics</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Real-time production trends, yield performance, consumption patterns, and farmgate price monitoring.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="ri-map-pin-line text-purple-600 text-2xl"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Regional Insights</h3>
            <p className="text-gray-600 dark:text-gray-400">
              County-level performance analysis, infrastructure mapping, and transport accessibility data.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Comprehensive Agriculture Intelligence
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span className="text-gray-700 dark:text-gray-300">Real-time production monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span className="text-gray-700 dark:text-gray-300">Value chain analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span className="text-gray-700 dark:text-gray-300">Policy impact assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-lg"></i>
                  <span className="text-gray-700 dark:text-gray-300">Infrastructure development tracking</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8 flex items-center justify-center">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20digital%20agriculture%20dashboard%20interface%20displaying%20colorful%20charts%20and%20graphs%20on%20computer%20screen%2C%20clean%20UI%20with%20green%20and%20blue%20color%20scheme%2C%20agricultural%20data%20visualization%2C%20technology%20meets%20farming%2C%20professional%20and%20modern%20design%20aesthetic%2C%20crisp%20and%20clear%20display&width=500&height=400&seq=agri-dashboard-preview&orientation=landscape"
                alt="Dashboard Preview"
                className="rounded-lg shadow-md max-w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-green-600 rounded-xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Access comprehensive agricultural data and insights to make informed decisions for Kenya's agricultural development.
            </p>
            <Link 
              href="/dashboard"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition-colors shadow-lg whitespace-nowrap cursor-pointer inline-flex items-center"
            >
              <i className="ri-arrow-right-line mr-2"></i>
              Launch Dashboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
