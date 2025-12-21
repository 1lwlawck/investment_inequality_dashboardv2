import { Card } from './ui/card';
import { useState } from 'react';
import { ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { Button } from './ui/button';

export function InteractiveMap() {
  const [zoom, setZoom] = useState(1);
  const [hoveredProvince, setHoveredProvince] = useState<any>(null);

  const provinces = [
    { name: 'DKI Jakarta', cluster: 1, x: 48, y: 58, size: 8, pdrb: 2842.5, ipm: 81.1, pma: 125.4 },
    { name: 'Jawa Barat', cluster: 1, x: 46, y: 60, size: 12, pdrb: 1876.3, ipm: 74.5, pma: 98.2 },
    { name: 'Jawa Tengah', cluster: 1, x: 50, y: 62, size: 11, pdrb: 1523.7, ipm: 73.8, pma: 87.5 },
    { name: 'Jawa Timur', cluster: 1, x: 54, y: 62, size: 13, pdrb: 1845.2, ipm: 73.2, pma: 92.1 },
    { name: 'Banten', cluster: 2, x: 44, y: 59, size: 6, pdrb: 789.4, ipm: 75.5, pma: 56.3 },
    { name: 'DI Yogyakarta', cluster: 1, x: 50, y: 64, size: 4, pdrb: 124.5, ipm: 81.0, pma: 34.2 },
    { name: 'Bali', cluster: 1, x: 58, y: 64, size: 5, pdrb: 178.9, ipm: 76.4, pma: 45.8 },
    { name: 'Sumatera Utara', cluster: 2, x: 28, y: 38, size: 9, pdrb: 612.3, ipm: 72.8, pma: 45.3 },
    { name: 'Sumatera Barat', cluster: 2, x: 26, y: 44, size: 7, pdrb: 198.7, ipm: 72.5, pma: 28.9 },
    { name: 'Riau', cluster: 2, x: 30, y: 46, size: 8, pdrb: 687.2, ipm: 73.1, pma: 52.1 },
    { name: 'Kepulauan Riau', cluster: 2, x: 32, y: 48, size: 5, pdrb: 234.5, ipm: 76.2, pma: 38.4 },
    { name: 'Jambi', cluster: 3, x: 32, y: 50, size: 6, pdrb: 198.1, ipm: 71.4, pma: 22.5 },
    { name: 'Sumatera Selatan', cluster: 3, x: 34, y: 52, size: 7, pdrb: 345.6, ipm: 70.2, pma: 31.2 },
    { name: 'Bengkulu', cluster: 3, x: 30, y: 52, size: 5, pdrb: 56.7, ipm: 71.9, pma: 12.8 },
    { name: 'Lampung', cluster: 2, x: 38, y: 56, size: 6, pdrb: 289.3, ipm: 70.9, pma: 28.3 },
    { name: 'Bangka Belitung', cluster: 3, x: 36, y: 50, size: 4, pdrb: 67.8, ipm: 71.2, pma: 15.4 },
    { name: 'Kalimantan Barat', cluster: 3, x: 44, y: 46, size: 7, pdrb: 178.9, ipm: 68.3, pma: 18.9 },
    { name: 'Kalimantan Tengah', cluster: 3, x: 50, y: 50, size: 8, pdrb: 145.2, ipm: 71.1, pma: 21.3 },
    { name: 'Kalimantan Selatan', cluster: 3, x: 54, y: 52, size: 6, pdrb: 123.4, ipm: 71.5, pma: 19.7 },
    { name: 'Kalimantan Timur', cluster: 2, x: 58, y: 46, size: 9, pdrb: 612.8, ipm: 77.4, pma: 58.2 },
    { name: 'Kalimantan Utara', cluster: 3, x: 58, y: 40, size: 5, pdrb: 78.3, ipm: 70.5, pma: 14.2 },
    { name: 'Sulawesi Utara', cluster: 2, x: 64, y: 42, size: 5, pdrb: 98.7, ipm: 73.9, pma: 24.5 },
    { name: 'Sulawesi Tengah', cluster: 3, x: 62, y: 48, size: 6, pdrb: 112.4, ipm: 69.7, pma: 16.8 },
    { name: 'Sulawesi Selatan', cluster: 2, x: 62, y: 56, size: 8, pdrb: 456.7, ipm: 72.4, pma: 42.3 },
    { name: 'Sulawesi Tenggara', cluster: 3, x: 64, y: 54, size: 6, pdrb: 87.9, ipm: 71.2, pma: 15.9 },
    { name: 'Sulawesi Barat', cluster: 3, x: 60, y: 52, size: 4, pdrb: 34.2, ipm: 67.3, pma: 8.4 },
    { name: 'Gorontalo', cluster: 3, x: 64, y: 44, size: 4, pdrb: 23.1, ipm: 69.4, pma: 7.2 },
    { name: 'Maluku', cluster: 3, x: 70, y: 52, size: 5, pdrb: 21.8, ipm: 70.1, pma: 6.8 },
    { name: 'Maluku Utara', cluster: 3, x: 68, y: 46, size: 5, pdrb: 18.9, ipm: 68.5, pma: 5.9 },
    { name: 'Papua', cluster: 3, x: 78, y: 54, size: 10, pdrb: 198.7, ipm: 60.1, pma: 12.3 },
    { name: 'Papua Barat', cluster: 3, x: 72, y: 48, size: 8, pdrb: 89.4, ipm: 64.2, pma: 8.7 },
    { name: 'Aceh', cluster: 3, x: 24, y: 34, size: 7, pdrb: 145.6, ipm: 72.1, pma: 18.4 },
    { name: 'Nusa Tenggara Barat', cluster: 3, x: 60, y: 64, size: 5, pdrb: 112.3, ipm: 69.8, pma: 16.2 },
    { name: 'Nusa Tenggara Timur', cluster: 3, x: 64, y: 64, size: 6, pdrb: 56.4, ipm: 65.2, pma: 9.1 },
  ];

  const clusterColors: { [key: number]: string } = {
    1: '#DC2626', // Red - High investment
    2: '#F9B233', // Gold - Moderate investment
    3: '#059669', // Green - Low investment
  };

  const clusterLabels: { [key: number]: string } = {
    1: 'Investasi Tinggi',
    2: 'Investasi Sedang',
    3: 'Investasi Rendah',
  };

  return (
    <div className="space-y-4">
      {/* Map Controls */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
        <div>
          <h3 className="text-[#002C5F]">
            Peta Interaktif Indonesia
          </h3>
          <p className="text-sm text-gray-600 mt-1">Distribusi klaster investasi per provinsi</p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoom(Math.max(0.5, zoom - 0.2))}
            disabled={zoom <= 0.5}
            className="border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white"
          >
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoom(1)}
            className="border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white"
          >
            <Maximize2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setZoom(Math.min(2, zoom + 0.2))}
            disabled={zoom >= 2}
            className="border-[#002C5F] text-[#002C5F] hover:bg-[#002C5F] hover:text-white"
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Map Visualization */}
      <div className="relative w-full h-[500px] bg-gradient-to-br from-blue-50 via-white to-gray-50 rounded-lg border-2 border-[#002C5F]/20 overflow-hidden shadow-lg">
        <svg 
          className="w-full h-full cursor-move" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="xMidYMid meet"
          style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease' }}
        >
          {/* Province Markers */}
          {provinces.map((province, index) => (
            <g key={index}>
              <circle
                cx={province.x}
                cy={province.y}
                r={province.size / 3}
                fill={clusterColors[province.cluster]}
                opacity="0.85"
                className="hover:opacity-100 transition-all cursor-pointer hover:scale-110 drop-shadow-md"
                style={{ transformOrigin: `${province.x}px ${province.y}px` }}
                onMouseEnter={() => setHoveredProvince(province)}
                onMouseLeave={() => setHoveredProvince(null)}
              >
                <title>{`${province.name} - Cluster ${province.cluster}`}</title>
              </circle>
            </g>
          ))}
        </svg>
        
        {/* Tooltip */}
        {hoveredProvince && (
          <div className="absolute top-4 left-4 bg-white/98 backdrop-blur-sm p-5 rounded-lg shadow-2xl border-2 border-[#F9B233] max-w-xs z-10 animate-in fade-in duration-200">
            <h4 className="text-[#002C5F] mb-3 pb-2 border-b border-gray-200">
              {hoveredProvince.name}
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Klaster:</span>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: clusterColors[hoveredProvince.cluster] }}
                  />
                  <span className="text-gray-900">{hoveredProvince.cluster} - {clusterLabels[hoveredProvince.cluster]}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">PDRB:</span>
                <span className="text-gray-900">Rp {hoveredProvince.pdrb.toFixed(1)} T</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">IPM:</span>
                <span className="text-gray-900">{hoveredProvince.ipm.toFixed(1)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-600">PMA:</span>
                <span className="text-gray-900">Rp {hoveredProvince.pma.toFixed(1)} M</span>
              </div>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="absolute bottom-4 right-4 bg-white/98 backdrop-blur-sm px-5 py-4 rounded-lg shadow-xl border border-gray-200">
          <p className="text-[#002C5F] mb-3 pb-2 border-b border-gray-200">
            Legenda Klaster
          </p>
          <div className="space-y-2">
            {Object.entries(clusterLabels).map(([cluster, label]) => (
              <div key={cluster} className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full shadow-sm"
                  style={{ backgroundColor: clusterColors[parseInt(cluster)] }}
                />
                <span className="text-gray-700 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Map Statistics */}
      <div className="grid grid-cols-3 gap-4">
        {Object.entries(clusterLabels).map(([cluster, label]) => {
          const count = provinces.filter(p => p.cluster === parseInt(cluster)).length;
          const percentage = ((count / provinces.length) * 100).toFixed(1);
          return (
            <Card 
              key={cluster} 
              className="p-5 text-center border-2 hover:shadow-lg transition-all bg-white" 
              style={{ borderColor: clusterColors[parseInt(cluster)] }}
            >
              <div
                className="w-4 h-4 rounded-full mx-auto mb-3 shadow-sm"
                style={{ backgroundColor: clusterColors[parseInt(cluster)] }}
              />
              <p className="text-gray-600 text-sm mb-1">{label}</p>
              <p className="text-[#002C5F] text-xl mb-1">{count} provinsi</p>
              <p className="text-gray-500 text-sm">{percentage}%</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
