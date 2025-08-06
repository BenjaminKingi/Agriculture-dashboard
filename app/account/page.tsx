'use client';

import { useState } from 'react';
import Link from 'next/link';
import Card from '../../components/ui/Card';

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: 'Benjamin K',
    email: 'Benjamin@example.com',
    phone: '+254 712 345 678',
    organization: 'Ministry of Agriculture',
    role: 'Agricultural Analyst',
    location: 'Nairobi, Kenya'
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend/Supabase
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Account Settings</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Manage your profile information and preferences</p>
          </div>
          <Link 
            href="/dashboard"
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <i className="ri-arrow-left-line"></i>
            <span>Back to Dashboard</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile Information</h2>
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <i className="ri-edit-line"></i>
                    <span>Edit</span>
                  </button>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-3 py-2 text-sm bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <i className="ri-check-line"></i>
                      <span>Save</span>
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="flex items-center space-x-2 px-3 py-2 text-sm bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <i className="ri-close-line"></i>
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white py-2">{formData.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white py-2">{formData.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white py-2">{formData.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Organization
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleInputChange('organization', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white py-2">{formData.organization}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Role
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white py-2">{formData.role}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Location
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  ) : (
                    <p className="text-gray-900 dark:text-white py-2">{formData.location}</p>
                  )}
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Security Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Change Password</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Update your account password</p>
                  </div>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                    Change Password
                  </button>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Add an extra layer of security</p>
                  </div>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap">
                    Enable 2FA
                  </button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Profile Picture</h2>
              <div className="text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  B
                </div>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors whitespace-nowrap">
                  Upload Photo
                </button>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Account Stats</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Member Since</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Jan 2025</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Last Login</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">Today</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Reports Generated</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">247</span>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Data Downloads</span>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">89</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Email Notifications</span>
                  <button className="w-11 h-6 bg-green-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all duration-200"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">SMS Alerts</span>
                  <button className="w-11 h-6 bg-gray-300 dark:bg-gray-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1 transition-all duration-200"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Auto Reports</span>
                  <button className="w-11 h-6 bg-green-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all duration-200"></div>
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}