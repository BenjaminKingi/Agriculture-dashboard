
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  onThemeToggle: () => void;
  isDarkMode: boolean;
  currentTheme: string;
   onSidebarToggle: () => void; // NEW prop
}

export default function Header({
  onThemeToggle,
  isDarkMode,
  currentTheme,
  onSidebarToggle
}: HeaderProps) {

  const [selectedType, setSelectedType] = useState('Crop');
  const [selectedCommodity, setSelectedCommodity] = useState('Maize');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const commodities = ['Maize', 'Beans', 'Dairy', 'Beef', 'Poultry'];
  const years = ['2025', '2024', '2023', '2022', '2021', '2020'];
  const regions = ['All Regions', 'Central Kenya', 'Western Kenya', 'Eastern Kenya', 'Coastal Kenya', 'Northern Kenya'];

  const getThemeClasses = () => {
    const themes = {
      green: {
        bg: 'bg-green-600',
        text: 'text-green-600',
        ring: 'focus:ring-green-500',
        border: 'focus:border-green-500'
      },
      blue: {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        ring: 'focus:ring-blue-500',
        border: 'focus:border-blue-500'
      },
      purple: {
        bg: 'bg-purple-600',
        text: 'text-purple-600',
        ring: 'focus:ring-purple-500',
        border: 'focus:border-purple-500'
      },
      orange: {
        bg: 'bg-orange-600',
        text: 'text-orange-600',
        ring: 'focus:ring-orange-500',
        border: 'focus:border-orange-500'
      }
    };
    return themes[currentTheme as keyof typeof themes] || themes.green;
  };

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">

                  <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={onSidebarToggle}
      >
        <i className="ri-menu-line text-xl text-gray-700 dark:text-gray-300"></i>
      </button>

      <h1 className="text-lg font-bold text-gray-900 dark:text-white">Dashboard</h1>

        {/* Theme toggle button */}
      <button
        onClick={onThemeToggle}
        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {isDarkMode ? (
          <i className="ri-sun-line text-xl text-yellow-400"></i>
        ) : (
          <i className="ri-moon-line text-xl text-gray-700 dark:text-gray-300"></i>
        )}
      </button>
            <button
              onClick={() => setSelectedType('Crop')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                selectedType === 'Crop'
                  ? `bg-white dark:bg-gray-600 ${getThemeClasses().text} shadow-sm`
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Crop
            </button>
            <button
              onClick={() => setSelectedType('Livestock')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                selectedType === 'Livestock'
                  ? `bg-white dark:bg-gray-600 ${getThemeClasses().text} shadow-sm`
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
            >
              Livestock
            </button>
          </div>

          <select
            value={selectedCommodity}
            onChange={(e) => setSelectedCommodity(e.target.value)}
            className={`px-3 py-2 pr-8 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm ${getThemeClasses().ring} ${getThemeClasses().border}`}
          >
            {commodities.map((commodity) => (
              <option key={commodity} value={commodity}>
                {commodity}
              </option>
            ))}
          </select>

          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className={`px-3 py-2 pr-8 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm ${getThemeClasses().ring} ${getThemeClasses().border}`}
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className={`px-3 py-2 pr-8 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm ${getThemeClasses().ring} ${getThemeClasses().border}`}
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <i className="ri-search-line text-gray-400"></i>
            </div>
            <input
              type="text"
              placeholder="Search..."
              className={`pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm ${getThemeClasses().ring} ${getThemeClasses().border} w-64`}
            />
          </div>

          <button
            onClick={onThemeToggle}
            className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
          >
            {isDarkMode ? (
              <i className="ri-sun-line text-lg"></i>
            ) : (
              <i className="ri-moon-line text-lg"></i>
            )}
          </button>

          <div className="relative">
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg px-3 py-2 transition-colors cursor-pointer"
            >
              <div className={`w-8 h-8 ${getThemeClasses().bg} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                BK
              </div>
              <span className="text-sm font-medium">Benjamin</span>
              <i className="ri-arrow-down-s-line"></i>
            </button>

            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
                <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Profile Settings
                </Link>
                <Link href="/account" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                  Account
                </Link>
                <hr className="my-1 border-gray-200 dark:border-gray-700" />
                <a href="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer">
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}