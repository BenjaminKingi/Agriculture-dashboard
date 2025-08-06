
'use client';

import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from '../ui/Card';

export default function Production() {
  const productionTrends = [
    { year: '2020', maize: 3200, beans: 720, dairy: 4800 },
    { year: '2021', maize: 3450, beans: 780, dairy: 5200 },
    { year: '2022', maize: 3100, beans: 650, dairy: 5100 },
    { year: '2023', maize: 3800, beans: 890, dairy: 5600 },
    { year: '2024', maize: 3200, beans: 820, dairy: 5800 }
  ];

  const yieldData = [
    { category: 'Maize', yield: 2.8, target: 3.2, unit: 'tonnes/ha' },
    { category: 'Beans', yield: 1.2, target: 1.5, unit: 'tonnes/ha' },
    { category: 'Dairy', yield: 12.5, target: 15.0, unit: 'L/cow/day' },
    { category: 'Beef', yield: 280, target: 320, unit: 'kg/head' }
  ];

  const consumptionData = [
    { category: 'Maize', urban: 45, rural: 55 },
    { category: 'Beans', urban: 40, rural: 60 },
    { category: 'Dairy', urban: 65, rural: 35 },
    { category: 'Beef', urban: 70, rural: 30 }
  ];

  const priceData = [
    { month: 'Jan', maize: 32, beans: 85, dairy: 45 },
    { month: 'Feb', maize: 35, beans: 88, dairy: 47 },
    { month: 'Mar', maize: 38, beans: 92, dairy: 46 },
    { month: 'Apr', maize: 36, beans: 90, dairy: 48 },
    { month: 'May', maize: 34, beans: 87, dairy: 49 },
    { month: 'Jun', maize: 32, beans: 85, dairy: 47 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Production & Key Indicators</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Year-over-Year Production Trends</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={productionTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="year" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Area type="monotone" dataKey="maize" stackId="1" stroke="#10B981" fill="#10B981" opacity={0.6} />
                  <Area type="monotone" dataKey="beans" stackId="1" stroke="#3B82F6" fill="#3B82F6" opacity={0.6} />
                  <Area type="monotone" dataKey="dairy" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" opacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Yield Performance</h3>
            <div className="space-y-4">
              {yieldData.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.category}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{item.yield} {item.unit}</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className="bg-green-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${(item.yield / item.target) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500 dark:text-gray-400">
                    <span>Current: {item.yield}</span>
                    <span>Target: {item.target}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Consumption Patterns (Urban vs Rural)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={consumptionData} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" stroke="#6b7280" />
                  <YAxis dataKey="category" type="category" stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="urban" stackId="consumption" fill="#3B82F6" name="Urban %" />
                  <Bar dataKey="rural" stackId="consumption" fill="#10B981" name="Rural %" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Farmgate Prices (KSh/kg)</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={priceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Line type="monotone" dataKey="maize" stroke="#10B981" strokeWidth={3} dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }} />
                  <Line type="monotone" dataKey="beans" stroke="#3B82F6" strokeWidth={3} dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }} />
                  <Line type="monotone" dataKey="dairy" stroke="#8B5CF6" strokeWidth={3} dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-4 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Maize</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Beans</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600 dark:text-gray-400">Dairy</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
