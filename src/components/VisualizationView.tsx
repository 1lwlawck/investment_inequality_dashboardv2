import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { InteractiveMap } from './InteractiveMap';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';

export function VisualizationView() {
  const investmentByCluster = [
    { cluster: 'Klaster 1', value: 483.2, color: '#DC2626' },
    { cluster: 'Klaster 2', value: 535.1, color: '#F9B233' },
    { cluster: 'Klaster 3', value: 179.4, color: '#059669' },
  ];

  const provincesDistribution = [
    { cluster: 'Klaster 1', provinces: 6, color: '#DC2626' },
    { cluster: 'Klaster 2', provinces: 14, color: '#F9B233' },
    { cluster: 'Klaster 3', provinces: 14, color: '#059669' },
  ];

  const scatterData = [
    { pdrb: 2842, ipm: 81.1, cluster: 1, name: 'Jakarta' },
    { pdrb: 1876, ipm: 74.5, cluster: 1, name: 'Jabar' },
    { pdrb: 1523, ipm: 73.8, cluster: 1, name: 'Jateng' },
    { pdrb: 1845, ipm: 73.2, cluster: 1, name: 'Jatim' },
    { pdrb: 612, ipm: 72.8, cluster: 2, name: 'Sumut' },
    { pdrb: 687, ipm: 73.1, cluster: 2, name: 'Riau' },
    { pdrb: 612, ipm: 77.4, cluster: 2, name: 'Kaltim' },
    { pdrb: 456, ipm: 72.4, cluster: 2, name: 'Sulsel' },
    { pdrb: 198, ipm: 60.1, cluster: 3, name: 'Papua' },
    { pdrb: 89, ipm: 64.2, cluster: 3, name: 'Papua Barat' },
    { pdrb: 56, ipm: 65.2, cluster: 3, name: 'NTT' },
    { pdrb: 145, ipm: 72.1, cluster: 3, name: 'Aceh' },
  ];

  const trendData = [
    { year: '2019', cluster1: 420, cluster2: 480, cluster3: 150 },
    { year: '2020', cluster1: 435, cluster2: 490, cluster3: 155 },
    { year: '2021', cluster1: 448, cluster2: 505, cluster3: 162 },
    { year: '2022', cluster1: 462, cluster2: 518, cluster3: 168 },
    { year: '2023', cluster1: 472, cluster2: 528, cluster3: 174 },
    { year: '2024', cluster1: 483, cluster2: 535, cluster3: 179 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Visualisasi Data Regional
        </h2>
        <p className="text-gray-600 mt-2">
          Representasi visual hasil analisis ketimpangan investasi antar provinsi
        </p>
      </div>

      {/* Interactive Map */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="text-[#002C5F]">Peta Distribusi Klaster</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <InteractiveMap />
        </CardContent>
      </Card>

      {/* Charts */}
      <Tabs defaultValue="investment" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-gray-100 p-1">
          <TabsTrigger value="investment" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
            Investasi per Klaster
          </TabsTrigger>
          <TabsTrigger value="distribution" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
            Distribusi Provinsi
          </TabsTrigger>
          <TabsTrigger value="scatter" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
            Scatter Plot
          </TabsTrigger>
          <TabsTrigger value="trend" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
            Tren Temporal
          </TabsTrigger>
        </TabsList>

        <TabsContent value="investment">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#002C5F]">Total Investasi per Klaster (Triliun Rupiah)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={investmentByCluster}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="cluster" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" label={{ value: 'Investasi (T)', angle: -90, position: 'insideLeft' }} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '2px solid #002C5F',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {investmentByCluster.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="distribution">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#002C5F]">Distribusi Jumlah Provinsi per Klaster</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                  <Pie
                    data={provincesDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ cluster, provinces, percent }) => 
                      `${cluster}: ${provinces} (${(percent * 100).toFixed(0)}%)`
                    }
                    outerRadius={120}
                    dataKey="provinces"
                  >
                    {provincesDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="scatter">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#002C5F]">Scatter Plot: PDRB vs IPM</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis 
                    type="number" 
                    dataKey="pdrb" 
                    name="PDRB" 
                    stroke="#6B7280"
                    label={{ value: 'PDRB per Kapita (T)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    type="number" 
                    dataKey="ipm" 
                    name="IPM" 
                    stroke="#6B7280"
                    label={{ value: 'IPM', angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                  <Scatter name="Klaster 1" data={scatterData.filter(d => d.cluster === 1)} fill="#DC2626" />
                  <Scatter name="Klaster 2" data={scatterData.filter(d => d.cluster === 2)} fill="#F9B233" />
                  <Scatter name="Klaster 3" data={scatterData.filter(d => d.cluster === 3)} fill="#059669" />
                  <Legend />
                </ScatterChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="trend">
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="text-[#002C5F]">Tren Investasi 2019-2024 (Triliun Rupiah)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="year" stroke="#6B7280" />
                  <YAxis stroke="#6B7280" />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'white',
                      border: '2px solid #002C5F',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Bar dataKey="cluster1" name="Klaster 1" fill="#DC2626" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="cluster2" name="Klaster 2" fill="#F9B233" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="cluster3" name="Klaster 3" fill="#059669" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
