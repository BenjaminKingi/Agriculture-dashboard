
'use client';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentTheme: string;
}

export default function Sidebar({ activeTab, setActiveTab, currentTheme }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'ri-dashboard-line' },
    { id: 'sector-overview', label: 'Sector Overview', icon: 'ri-pie-chart-line' },
    { id: 'production', label: 'Production & Key Indicators', icon: 'ri-bar-chart-line' },
    { id: 'value-chain', label: 'Value Chain Analysis', icon: 'ri-links-line' },
    { id: 'regional', label: 'Regional Performance', icon: 'ri-map-pin-line' },
    { id: 'infrastructure', label: 'Infrastructure & Policy', icon: 'ri-building-line' },
    { id: 'settings', label: 'Settings', icon: 'ri-settings-3-line' }
  ];

  const getThemeClasses = () => {
    const themes = {
      green: {
        bg: 'bg-green-50 dark:bg-green-900/20',
        text: 'text-green-700 dark:text-green-400',
        border: 'border-green-600',
        logo: 'text-green-600'
      },
      blue: {
        bg: 'bg-blue-50 dark:bg-blue-900/20',
        text: 'text-blue-700 dark:text-blue-400',
        border: 'border-blue-600',
        logo: 'text-blue-600'
      },
      purple: {
        bg: 'bg-purple-50 dark:bg-purple-900/20',
        text: 'text-purple-700 dark:text-purple-400',
        border: 'border-purple-600',
        logo: 'text-purple-600'
      },
      orange: {
        bg: 'bg-orange-50 dark:bg-orange-900/20',
        text: 'text-orange-700 dark:text-orange-400',
        border: 'border-orange-600',
        logo: 'text-orange-600'
      }
    };
    return themes[currentTheme as keyof typeof themes] || themes.green;
  };

  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className={`w-8 h-8 bg-${currentTheme}-600 rounded-lg flex items-center justify-center`}>
            <i className="ri-seedling-line text-white"></i>
          </div>
          <span className={`font-['Pacifico'] text-xl ${getThemeClasses().logo}`}>AgriDash</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-colors cursor-pointer ${
                  activeTab === item.id
                    ? `${getThemeClasses().bg} ${getThemeClasses().text} border-l-2 ${getThemeClasses().border}`
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-200'
                }`}
              >
                <i className={`${item.icon} text-lg`}></i>
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4">
        <a
          href="/logout"
          className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
        >
          <i className="ri-logout-box-line text-lg"></i>
          <span className="text-sm font-medium">Logout</span>
        </a>
      </div>
    </aside>
  );
}