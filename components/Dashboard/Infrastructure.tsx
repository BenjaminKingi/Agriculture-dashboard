
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import Card from '../ui/Card';

export default function Infrastructure() {
  const facilityData = [
    { facility: 'Storage Facilities', count: 245, capacity: '3.2M tonnes', utilization: 85 },
    { facility: 'Processing Plants', count: 89, capacity: '1.8M tonnes', utilization: 72 },
    { facility: 'Cold Storage', count: 34, capacity: '450K tonnes', utilization: 90 },
    { facility: 'Pack Houses', count: 156, capacity: '680K tonnes', utilization: 78 },
    { facility: 'Distribution Centers', count: 67, capacity: '1.1M tonnes', utilization: 88 }
  ];

  const policyTimeline = [
    { year: '2020', title: 'Agricultural Transformation Act', impact: 'High', budget: 2.1 },
    { year: 2021, title: 'Subsidized Fertilizer Program', impact: 'Medium', budget: 1.8 },
    { year: 2022, title: 'Climate Smart Agriculture', impact: 'High', budget: 3.2 },
    { year: 2023, title: 'Digital Agriculture Platform', impact: 'Medium', budget: 1.5 },
    { year: 2024, title: 'Value Chain Enhancement', impact: 'High', budget: 4.1 }
  ];

  const fundingData = [
    { year: '2020', government: 2.1, donor: 1.5, private: 0.8 },
    { year: '2021', government: 2.3, donor: 1.8, private: 1.2 },
    { year: '2022', government: 2.8, donor: 2.1, private: 1.5 },
    { year: '2023', government: 3.2, donor: 2.4, private: 1.8 },
    { year: '2024', government: 3.5, donor: 2.8, private: 2.1 }
  ];

  const infrastructureMap = [
    { region: 'Central Kenya', storage: 95, processing: 88, transport: 92, digital: 85 },
    { region: 'Western Kenya', storage: 78, processing: 72, transport: 85, digital: 70 },
    { region: 'Eastern Kenya', storage: 65, processing: 58, transport: 70, digital: 60 },
    { region: 'Coastal Kenya', storage: 70, processing: 65, transport: 75, digital: 68 },
    { region: 'Northern Kenya', storage: 45, processing: 38, transport: 50, digital: 40 }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Infrastructure & Policy Environment</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Facility Distribution & Utilization</h3>
            <div className="space-y-4">
              {facilityData.map((facility, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{facility.facility}</h4>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{facility.count} facilities</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-3">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Capacity</span>
                      <p className="font-medium text-gray-900 dark:text-white">{facility.capacity}</p>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">Utilization</span>
                      <p className="font-medium text-gray-900 dark:text-white">{facility.utilization}%</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-500 ${
                        facility.utilization > 85 ? 'bg-green-500' :
                        facility.utilization > 70 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${facility.utilization}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Infrastructure Heatmap by Region</h3>
            <div className="space-y-4">
              {infrastructureMap.map((region, index) => (
                <div key={index} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3">{region.region}</h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Storage</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                          <div 
                            className="bg-blue-500 h-1.5 rounded-full"
                            style={{ width: `${region.storage}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium w-8">{region.storage}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Processing</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                          <div 
                            className="bg-green-500 h-1.5 rounded-full"
                            style={{ width: `${region.processing}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium w-8">{region.processing}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Transport</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                          <div 
                            className="bg-purple-500 h-1.5 rounded-full"
                            style={{ width: `${region.transport}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium w-8">{region.transport}%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">Digital</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 dark:bg-gray-600 rounded-full h-1.5">
                          <div 
                            className="bg-orange-500 h-1.5 rounded-full"
                            style={{ width: `${region.digital}%` }}
                          ></div>
                        </div>
                        <span className="text-xs font-medium w-8">{region.digital}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Policy Timeline & Impact</h3>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-6">
              {policyTimeline.map((policy, index) => (
                <div key={index} className="relative flex items-start space-x-4 pl-12">
                  <div className={`absolute left-4 w-4 h-4 rounded-full -translate-x-1/2 ${
                    policy.impact === 'High' ? 'bg-green-500' :
                    policy.impact === 'Medium' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                  <div className="flex-1 bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white">{policy.title}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{policy.year}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          policy.impact === 'High' ? 'bg-green-100 text-green-800 dark:bg-green-900/20' :
                          policy.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20' :
                          'bg-gray-100 text-gray-800 dark:bg-gray-800'
                        }`}>
                          {policy.impact} Impact
                        </span>
                        <p className="text-sm font-medium text-gray-900 dark:text-white mt-1">
                          ${policy.budget}B Budget
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investment & Funding Trends (Billions USD)</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fundingData}>
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
                <Line 
                  type="monotone" 
                  dataKey="government" 
                  stroke="#10B981" 
                  strokeWidth={3} 
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 5 }}
                  name="Government"
                />
                <Line 
                  type="monotone" 
                  dataKey="donor" 
                  stroke="#3B82F6" 
                  strokeWidth={3} 
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 5 }}
                  name="Donor Funding"
                />
                <Line 
                  type="monotone" 
                  dataKey="private" 
                  stroke="#8B5CF6" 
                  strokeWidth={3} 
                  dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 5 }}
                  name="Private Investment"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-6 mt-6 justify-center">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Government Funding</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Donor Funding</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">Private Investment</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
