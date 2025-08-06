
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from '../ui/Card';

export default function ValueChain() {
  const inputAccessData = [
    { input: 'Quality Seeds', access: 75, cost: 85, availability: 80 },
    { input: 'Fertilizers', access: 60, cost: 45, availability: 70 },
    { input: 'Veterinary Services', access: 55, cost: 60, availability: 65 },
    { input: 'Feed', access: 70, cost: 75, availability: 85 },
    { input: 'Equipment', access: 40, cost: 35, availability: 45 },
    { input: 'Credit Access', access: 35, cost: 30, availability: 40 }
  ];

  const processingData = [
    { facility: 'Grain Mills', utilization: 82, capacity: '2.5M tonnes' },
    { facility: 'Dairy Processing', utilization: 75, capacity: '1.8B liters' },
    { facility: 'Meat Processing', utilization: 65, capacity: '450K head' },
    { facility: 'Storage Facilities', utilization: 90, capacity: '3.2M tonnes' }
  ];

  const valueChainFlow = [
    { stage: 'Farm Production', value: 100, color: '#10B981' },
    { stage: 'Collection & Transport', value: 85, color: '#3B82F6' },
    { stage: 'Processing', value: 70, color: '#8B5CF6' },
    { stage: 'Distribution', value: 60, color: '#F59E0B' },
    { stage: 'Retail', value: 45, color: '#EF4444' }
  ];

  const consumerAccessData = [
    { name: 'Formal Markets', value: 35, fill: '#10B981' },
    { name: 'Informal Markets', value: 45, fill: '#3B82F6' },
    { name: 'Direct Sales', value: 20, fill: '#8B5CF6' }
  ];

  const urbanRuralData = [
    { name: 'Urban Access', value: 68, fill: '#F59E0B' },
    { name: 'Rural Access', value: 32, fill: '#EF4444' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Value Chain Analysis</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Input Access Analysis</h3>
            <div className="space-y-4">
              {inputAccessData.map((item, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{item.input}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Access: {item.access}%</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="text-xs text-gray-500">Access</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                        <div 
                          className="bg-green-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.access}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Affordability</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.cost}%` }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500">Availability</span>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mt-1">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${item.availability}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Processing Infrastructure</h3>
            <div className="h-64 mb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={processingData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="facility" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="utilization" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2">
              {processingData.map((facility, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600 dark:text-gray-400">{facility.facility}</span>
                  <span className="font-medium text-gray-900 dark:text-white">{facility.capacity}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Value Chain Flow (Farm to Consumer)</h3>
          <div className="flex items-center justify-between py-8">
            {valueChainFlow.map((stage, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2"
                  style={{ backgroundColor: stage.color }}
                >
                  {stage.value}
                </div>
                <span className="text-sm text-center text-gray-600 dark:text-gray-400 max-w-20">{stage.stage}</span>
                {index < valueChainFlow.length - 1 && (
                  <div className="absolute top-8 left-16 w-12 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
                )}
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Value retention through supply chain (Index: 100 = Full value)</p>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Consumer Access Channels</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={consumerAccessData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {consumerAccessData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {consumerAccessData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Urban vs Rural Market Access</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={urbanRuralData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {urbanRuralData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: any) => [`${value}%`, 'Share']} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              {urbanRuralData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.name} ({item.value}%)</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
