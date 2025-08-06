
'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import Card from '../ui/Card';
import KPICard from './KPICard';

export default function SectorOverview() {
  const kpiData = [
    { title: 'GDP Share', value: '24.8%', change: '+2.3%', changeType: 'positive' as const, icon: 'ri-pie-chart-line', color: 'green' as const },
    { title: 'Employment', value: '18.2M', change: '+1.5%', changeType: 'positive' as const, icon: 'ri-group-line', color: 'blue' as const },
    { title: 'Total Output', value: '$12.4B', change: '+5.2%', changeType: 'positive' as const, icon: 'ri-bar-chart-box-line', color: 'purple' as const },
    { title: 'Export Value', value: '$3.8B', change: '-2.1%', changeType: 'negative' as const, icon: 'ri-global-line', color: 'orange' as const }
  ];

  const commodityData = [
    { name: 'Maize', volume: '3.2M tonnes', value: '$1.8B', rank: 1, icon: 'ri-plant-line', color: '#10B981' },
    { name: 'Dairy', volume: '5.8B liters', value: '$2.3B', rank: 2, icon: 'ri-drop-line', color: '#3B82F6' },
    { name: 'Beans', volume: '890K tonnes', value: '$650M', rank: 3, icon: 'ri-seedling-line', color: '#8B5CF6' },
    { name: 'Beef', volume: '420K cattle', value: '$1.1B', rank: 4, icon: 'ri-customer-service-2-line', color: '#F59E0B' },
    { name: 'Poultry', volume: '45M birds', value: '$820M', rank: 5, icon: 'ri-bird-line', color: '#EF4444' }
  ];

  const gdpData = [
    { name: 'Maize', value: 35, fill: '#10B981' },
    { name: 'Dairy', value: 28, fill: '#3B82F6' },
    { name: 'Beef', value: 18, fill: '#F59E0B' },
    { name: 'Beans', value: 12, fill: '#8B5CF6' },
    { name: 'Poultry', value: 7, fill: '#EF4444' }
  ];

  const topCounties = [
    { name: 'Nakuru', production: '2.8M tonnes', rank: 1 },
    { name: 'Uasin Gishu', production: '2.1M tonnes', rank: 2 },
    { name: 'Trans Nzoia', production: '1.9M tonnes', rank: 3 },
    { name: 'Meru', production: '1.6M tonnes', rank: 4 },
    { name: 'Kiambu', production: '1.4M tonnes', rank: 5 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sector Overview</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiData.map((kpi, index) => (
            <KPICard key={index} {...kpi} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Commodities</h3>
            <div className="space-y-4">
              {commodityData.map((commodity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${commodity.color}20` }}>
                      <i className={`${commodity.icon} text-lg`} style={{ color: commodity.color }}></i>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{commodity.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{commodity.volume}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">{commodity.value}</p>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-gray-500">Rank #{commodity.rank}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">GDP Contribution by Commodity</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gdpData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {gdpData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-3 mt-4">
              {gdpData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Top Producing Counties</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {topCounties.map((county, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className={`w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center text-white font-bold ${
                  county.rank === 1 ? 'bg-yellow-500' : county.rank === 2 ? 'bg-gray-400' : county.rank === 3 ? 'bg-orange-500' : 'bg-green-500'
                }`}>
                  #{county.rank}
                </div>
                <h4 className="font-medium text-gray-900 dark:text-white">{county.name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{county.production}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
