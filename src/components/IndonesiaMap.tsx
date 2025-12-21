import { Card } from './ui/card';

export function IndonesiaMap() {
  const provinces = [
    { name: 'DKI Jakarta', cluster: 1, x: 48, y: 58, size: 8 },
    { name: 'Jawa Barat', cluster: 1, x: 46, y: 60, size: 12 },
    { name: 'Jawa Tengah', cluster: 1, x: 50, y: 62, size: 11 },
    { name: 'Jawa Timur', cluster: 1, x: 54, y: 62, size: 13 },
    { name: 'Banten', cluster: 2, x: 44, y: 59, size: 6 },
    { name: 'DI Yogyakarta', cluster: 1, x: 50, y: 64, size: 4 },
    { name: 'Bali', cluster: 1, x: 58, y: 64, size: 5 },
    { name: 'Sumatera Utara', cluster: 2, x: 28, y: 38, size: 9 },
    { name: 'Sumatera Barat', cluster: 2, x: 26, y: 44, size: 7 },
    { name: 'Riau', cluster: 2, x: 30, y: 46, size: 8 },
    { name: 'Kepulauan Riau', cluster: 2, x: 32, y: 48, size: 5 },
    { name: 'Jambi', cluster: 3, x: 32, y: 50, size: 6 },
    { name: 'Sumatera Selatan', cluster: 3, x: 34, y: 52, size: 7 },
    { name: 'Bengkulu', cluster: 3, x: 30, y: 52, size: 5 },
    { name: 'Lampung', cluster: 2, x: 38, y: 56, size: 6 },
    { name: 'Bangka Belitung', cluster: 3, x: 36, y: 50, size: 4 },
    { name: 'Kalimantan Barat', cluster: 3, x: 44, y: 46, size: 7 },
    { name: 'Kalimantan Tengah', cluster: 3, x: 50, y: 50, size: 8 },
    { name: 'Kalimantan Selatan', cluster: 3, x: 54, y: 52, size: 6 },
    { name: 'Kalimantan Timur', cluster: 2, x: 58, y: 46, size: 9 },
    { name: 'Kalimantan Utara', cluster: 3, x: 58, y: 40, size: 5 },
    { name: 'Sulawesi Utara', cluster: 2, x: 64, y: 42, size: 5 },
    { name: 'Sulawesi Tengah', cluster: 3, x: 62, y: 48, size: 6 },
    { name: 'Sulawesi Selatan', cluster: 2, x: 62, y: 56, size: 8 },
    { name: 'Sulawesi Tenggara', cluster: 3, x: 64, y: 54, size: 6 },
    { name: 'Sulawesi Barat', cluster: 4, x: 60, y: 52, size: 4 },
    { name: 'Gorontalo', cluster: 4, x: 64, y: 44, size: 4 },
    { name: 'Maluku', cluster: 4, x: 70, y: 52, size: 5 },
    { name: 'Maluku Utara', cluster: 4, x: 68, y: 46, size: 5 },
    { name: 'Papua', cluster: 4, x: 78, y: 54, size: 10 },
    { name: 'Papua Barat', cluster: 4, x: 72, y: 48, size: 8 },
    { name: 'Aceh', cluster: 3, x: 24, y: 34, size: 7 },
    { name: 'Nusa Tenggara Barat', cluster: 3, x: 60, y: 64, size: 5 },
    { name: 'Nusa Tenggara Timur', cluster: 4, x: 64, y: 64, size: 6 },
  ];

  const clusterColors = {
    1: '#004C97', // High Development - Dark Blue
    2: '#1976D2', // Moderate Development - Medium Blue
    3: '#42A5F5', // Low Development - Light Blue
    4: '#90CAF9', // Emerging - Very Light Blue
  };

  const clusterLabels = {
    1: 'High Development',
    2: 'Moderate Development',
    3: 'Low Development',
    4: 'Emerging',
  };

  return (
    <div className="space-y-4">
      {/* Map Visualization */}
      <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-gray-50 rounded-xl border border-gray-200 overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
          {/* Province Markers */}
          {provinces.map((province, index) => (
            <g key={index}>
              <circle
                cx={province.x}
                cy={province.y}
                r={province.size / 3}
                fill={clusterColors[province.cluster as keyof typeof clusterColors]}
                opacity="0.7"
                className="hover:opacity-100 transition-opacity cursor-pointer"
              >
                <title>{`${province.name} - Cluster ${province.cluster}`}</title>
              </circle>
            </g>
          ))}
        </svg>
        
        {/* Map Label */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
          <p className="text-gray-900">Indonesia - Investment Distribution Map</p>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 justify-center">
        {Object.entries(clusterLabels).map(([cluster, label]) => (
          <div key={cluster} className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: clusterColors[cluster as unknown as keyof typeof clusterColors] }}
            />
            <span className="text-gray-700">Cluster {cluster}: {label}</span>
          </div>
        ))}
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
        {Object.entries(clusterLabels).map(([cluster, label]) => {
          const count = provinces.filter(p => p.cluster === parseInt(cluster)).length;
          return (
            <Card key={cluster} className="p-4 text-center">
              <div
                className="w-3 h-3 rounded-full mx-auto mb-2"
                style={{ backgroundColor: clusterColors[cluster as unknown as keyof typeof clusterColors] }}
              />
              <p className="text-gray-600">Cluster {cluster}</p>
              <p className="text-gray-900">{count} provinces</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
