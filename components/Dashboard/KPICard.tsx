
'use client';

import { useEffect, useState } from 'react';
import Card from '../ui/Card';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'positive' | 'negative';
  icon: string;
  color: 'green' | 'blue' | 'purple' | 'orange';
}

export default function KPICard({ title, value, change, changeType, icon, color }: KPICardProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Animate the number counting up
    const timeout = setTimeout(() => {
      setDisplayValue(value);
    }, 100);

    return () => clearTimeout(timeout);
  }, [value]);

  const colorClasses = {
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    orange: 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
  };

  if (!mounted) {
    return (
      <Card className="animate-pulse">
        <div className="h-20 bg-gray-200 dark:bg-gray-700 rounded"></div>
      </Card>
    );
  }

  return (
    <Card className="transition-all duration-300 hover:shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <div className="flex items-baseline space-x-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white transition-all duration-1000">
              {displayValue}
            </h3>
            <span className={`text-sm font-medium ${
              changeType === 'positive' ? 'text-green-600' : 'text-red-600'
            }`}>
              {change}
            </span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color]}`}>
          <i className={`${icon} text-xl`}></i>
        </div>
      </div>
    </Card>
  );
}
