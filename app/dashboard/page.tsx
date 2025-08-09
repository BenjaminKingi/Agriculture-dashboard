
'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Dashboard/Header';
import Sidebar from '../../components/Dashboard/Sidebar';
import SectorOverview from '../../components/Dashboard/SectorOverview';
import Production from '../../components/Dashboard/Production';
import ValueChain from '../../components/Dashboard/ValueChain';
import Regional from '../../components/Dashboard/Regional';
import Infrastructure from '../../components/Dashboard/Infrastructure';
import KPICard from '../../components/Dashboard/KPICard';

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('green');
  const themeColorMap: Record<string, 'green' | 'blue' | 'purple' | 'orange'> = {
  green: 'green',
  blue: 'blue',
  purple: 'purple',
  orange: 'orange',
};
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('darkMode');
    const savedColorTheme = localStorage.getItem('colorTheme') || 'green';

    if (savedTheme === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }

    setCurrentTheme(savedColorTheme);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const changeColorTheme = (theme: string) => {
    setCurrentTheme(theme);
    localStorage.setItem('colorTheme', theme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  const getThemeColors = () => {
    const themes = {
      green: {
        primary: 'green-600',
        light: 'green-50',
        hover: 'green-700',
        text: 'green-700',
        bg: 'green-900/20'
      },
      blue: {
        primary: 'blue-600',
        light: 'blue-50',
        hover: 'blue-700',
        text: 'blue-700',
        bg: 'blue-900/20'
      },
      purple: {
        primary: 'purple-600',
        light: 'purple-50',
        hover: 'purple-700',
        text: 'purple-700',
        bg: 'purple-900/20'
      },
      orange: {
        primary: 'orange-600',
        light: 'orange-50',
        hover: 'orange-700',
        text: 'orange-700',
        bg: 'orange-900/20'
      }
    };
    return themes[currentTheme as keyof typeof themes] || themes.green;
  };


  const renderContent = () => {
    switch (activeTab) {
      case 'sector-overview':
        return <SectorOverview />;
      case 'production':
        return <Production />;
      case 'value-chain':
        return <ValueChain />;
      case 'regional':
        return <Regional />;
      case 'infrastructure':
        return <Infrastructure />;
      case 'settings':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Settings</h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Appearance</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Theme Mode</h4>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => {
                        setIsDarkMode(false);
                        document.documentElement.classList.remove('dark');
                        localStorage.setItem('darkMode', 'false');
                      }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors cursor-pointer ${
                        !isDarkMode
                          ? 'border-gray-900 bg-gray-100 text-gray-900 dark:border-gray-200 dark:bg-gray-200 dark:text-gray-900'
                          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                      }`}
                    >
                      <i className="ri-sun-line"></i>
                      <span>Light</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsDarkMode(true);
                        document.documentElement.classList.add('dark');
                        localStorage.setItem('darkMode', 'true');
                      }}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg border-2 transition-colors cursor-pointer ${
                        isDarkMode
                          ? 'border-gray-600 bg-gray-700 text-white'
                          : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <i className="ri-moon-line"></i>
                      <span>Dark</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">Color Theme</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { name: 'green', label: 'Green', color: 'bg-green-500' },
                      { name: 'blue', label: 'Blue', color: 'bg-blue-500' },
                      { name: 'purple', label: 'Purple', color: 'bg-purple-500' },
                      { name: 'orange', label: 'Orange', color: 'bg-orange-500' }
                    ].map((theme) => (
                      <button
                        key={theme.name}
                        onClick={() => changeColorTheme(theme.name)}
                        className={`flex items-center space-x-2 px-3 py-2 rounded-lg border-2 transition-colors cursor-pointer ${
                          currentTheme === theme.name
                            ? 'border-gray-400 bg-gray-100 dark:bg-gray-700'
                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded-full ${theme.color}`}></div>
                        <span className="text-sm text-gray-700 dark:text-gray-300">{theme.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Other Settings</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Auto-refresh Data</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Automatically refresh dashboard data every 5 minutes</p>
                  </div>
                  <button className="w-11 h-6 bg-green-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all duration-200"></div>
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Show Tooltips</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Display helpful tooltips on charts and data</p>
                  </div>
                  <button className="w-11 h-6 bg-green-600 rounded-full relative cursor-pointer">
                    <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1 transition-all duration-200"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard Overview</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KPICard
                  title="Total Production"
                  value="8.4M tonnes"
                  change="+12.5%"
                  changeType="positive"
                  icon="ri-bar-chart-box-line"
                  color={themeColorMap[currentTheme] || 'green'}
                />
                <KPICard
                  title="Active Farmers"
                  value="2.1M"
                  change="+8.2%"
                  changeType="positive"
                  icon="ri-group-line"
                  color="blue"
                />
                <KPICard
                  title="Market Value"
                  value="$5.2B"
                  change="+15.3%"
                  changeType="positive"
                  icon="ri-money-dollar-circle-line"
                  color="purple"
                />
                <KPICard
                  title="Export Revenue"
                  value="$1.8B"
                  change="-3.1%"
                  changeType="negative"
                  icon="ri-global-line"
                  color="orange"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setActiveTab('sector-overview')}
                      className="w-full flex items-center space-x-3 p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <i className="ri-pie-chart-line text-green-600 text-lg"></i>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">View Sector Overview</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Analyze sector performance and key metrics</p>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab('production')}
                      className="w-full flex items-center space-x-3 p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <i className="ri-bar-chart-line text-blue-600 text-lg"></i>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Production Analysis</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Review production trends and indicators</p>
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab('regional')}
                      className="w-full flex items-center space-x-3 p-3 text-left bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                    >
                      <i className="ri-map-pin-line text-purple-600 text-lg"></i>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">Regional Insights</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Explore regional performance data</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Updates</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white font-medium">Q4 2024 Production Report</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Maize production increased by 15.2%</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white font-medium">New Policy Implementation</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Climate Smart Agriculture initiative launched</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">1 day ago</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <p className="text-sm text-gray-900 dark:text-white font-medium">Market Price Update</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Bean prices show upward trend</p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex">
            {/* Sidebar for desktop */}
        <div className="hidden md:block">
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} currentTheme={currentTheme} />
        </div>

        {/* Mobile Sidebar (slide-in) */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative bg-white dark:bg-gray-800 w-64 shadow-lg z-50">
              <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} currentTheme={currentTheme} />
            </div>
          </div>
        )}

        <div className="flex-1 flex flex-col min-h-screen">
          <Header
            onThemeToggle={toggleTheme}
            isDarkMode={isDarkMode}
            currentTheme={currentTheme}
            onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} // NEW prop for mobile toggle
          />
          <main className="flex-1 p-4 sm:p-6 overflow-auto">
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}
