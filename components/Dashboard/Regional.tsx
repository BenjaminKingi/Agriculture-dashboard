
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import Card from '../ui/Card';

export default function Regional() {
  const countyData = [
    { county: 'Nakuru', production: 2800, yield: 3.2, price: 35, infrastructure: 85 },
    { county: 'Uasin Gishu', production: 2100, yield: 2.9, price: 33, infrastructure: 90 },
    { county: 'Trans Nzoia', production: 1900, yield: 3.1, price: 34, infrastructure: 80 },
    { county: 'Meru', production: 1600, yield: 2.5, price: 38, infrastructure: 75 },
    { county: 'Kiambu', production: 1400, yield: 2.8, price: 36, infrastructure: 95 },
    { county: 'Nyandarua', production: 1200, yield: 2.6, price: 37, infrastructure: 70 }
  ];

  const performanceData = [
    { county: 'Nakuru', yield: 95, price: 88, transport: 85, storage: 90, market: 92 },
    { county: 'Uasin Gishu', yield: 87, price: 92, transport: 95, storage: 85, market: 88 },
    { county: 'Trans Nzoia', yield: 92, price: 85, transport: 80, storage: 88, market: 85 },
    { county: 'Meru', yield: 75, price: 70, transport: 75, storage: 80, market: 78 },
    { county: 'Kiambu', yield: 82, price: 80, transport: 95, storage: 92, market: 95 }
  ];

  const transportData = [
    { route: 'Nakuru - Nairobi', distance: '160km', condition: 'Good', cost: 'KSh 15/km' },
    { route: 'Uasin Gishu - Mombasa', distance: '650km', condition: 'Fair', cost: 'KSh 18/km' },
    { route: 'Trans Nzoia - Kisumu', distance: '120km', condition: 'Good', cost: 'KSh 14/km' },
    { route: 'Meru - Nairobi', distance: '230km', condition: 'Poor', cost: 'KSh 22/km' },
    { route: 'Kiambu - Nairobi', distance: '40km', condition: 'Excellent', cost: 'KSh 12/km' }
  ];

  const mapData = {
    regions: [
      { name: 'Central Kenya', production: 4200, color: '#10B981' },
      { name: 'Western Kenya', production: 5800, color: '#3B82F6' },
      { name: 'Eastern Kenya', production: 2100, color: '#8B5CF6' },
      { name: 'Coastal Kenya', production: 800, color: '#F59E0B' },
      { name: 'Northern Kenya', production: 400, color: '#EF4444' }
    ]
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Regional Performance Insights</h2>
        
        <Card className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Kenya Agricultural Production Map</h3>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-800 rounded-lg p-8 min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4074534.0446943846!2d34.048732!3d-0.023559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182780d08350900f%3A0x403b0eb0a1976dd9!2sKenya!5e0!3m2!1sen!2sus!4v1629750000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4">
              {mapData.regions.map((region, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-700 rounded-lg">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: region.color }}></div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{region.name}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{region.production}K tonnes</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">County Production Comparison</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={countyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="county" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f9fafb', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="production" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Performance Radar (Top 5 Counties)</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={performanceData.slice(0, 1)} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="county" tick={{ fontSize: 12, fill: '#6b7280' }} />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 100]} 
                    tick={{ fontSize: 10, fill: '#6b7280' }}
                  />
                  <Radar
                    name="Nakuru"
                    dataKey="yield"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Price"
                    dataKey="price"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Radar
                    name="Transport"
                    dataKey="transport"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Transport Infrastructure</h3>
            <div className="space-y-4">
              {transportData.map((route, index) => (
                <div key={index} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-gray-900 dark:text-white">{route.route}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      route.condition === 'Excellent' ? 'bg-green-100 text-green-800 dark:bg-green-900/20' :
                      route.condition === 'Good' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20' :
                      route.condition === 'Fair' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20' :
                      'bg-red-100 text-red-800 dark:bg-red-900/20'
                    }`}>
                      {route.condition}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Distance:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{route.distance}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 dark:text-gray-400">Transport Cost:</span>
                      <p className="font-medium text-gray-900 dark:text-white">{route.cost}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Regional Variance Analysis</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Yield Variance (tonnes/ha)</h4>
                <div className="space-y-2">
                  {countyData.slice(0, 5).map((county, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{county.county}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-green-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(county.yield / 3.5) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white w-12">{county.yield}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-3">Price Variance (KSh/kg)</h4>
                <div className="space-y-2">
                  {countyData.slice(0, 5).map((county, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{county.county}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${(county.price / 40) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900 dark:text-white w-12">{county.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
