import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { GitBranch, TrendingUp, MapPin } from 'lucide-react';

export function ClusteringView() {
  const clusters = [
    {
      id: 1,
      name: 'Klaster 1 - Investasi Tinggi',
      color: '#DC2626',
      count: 6,
      avgPDRB: 1565.2,
      avgIPM: 76.8,
      avgInvestment: 80.5,
      provinces: [
        'DKI Jakarta',
        'Jawa Barat',
        'Jawa Tengah',
        'Jawa Timur',
        'DI Yogyakarta',
        'Bali'
      ],
      characteristics: [
        'PDRB per kapita sangat tinggi (> Rp 1000 T)',
        'IPM di atas 73.0',
        'Nilai investasi PMA/PMDN sangat tinggi',
        'Infrastruktur sangat berkembang',
        'Konsentrasi industri manufaktur dan jasa'
      ]
    },
    {
      id: 2,
      name: 'Klaster 2 - Investasi Sedang',
      color: '#F9B233',
      count: 14,
      avgPDRB: 342.8,
      avgIPM: 72.4,
      avgInvestment: 38.2,
      provinces: [
        'Sumatera Utara',
        'Riau',
        'Kepulauan Riau',
        'Banten',
        'Lampung',
        'Kalimantan Timur',
        'Sulawesi Utara',
        'Sulawesi Selatan',
        'dan 6 provinsi lainnya'
      ],
      characteristics: [
        'PDRB per kapita menengah (Rp 200-700 T)',
        'IPM berkisar 70.0 - 77.0',
        'Nilai investasi moderat',
        'Infrastruktur dalam tahap perbaikan',
        'Potensi sumber daya alam tinggi'
      ]
    },
    {
      id: 3,
      name: 'Klaster 3 - Investasi Rendah',
      color: '#059669',
      count: 14,
      avgPDRB: 89.7,
      avgIPM: 68.2,
      avgInvestment: 12.8,
      provinces: [
        'Papua',
        'Papua Barat',
        'Maluku',
        'Maluku Utara',
        'Nusa Tenggara Timur',
        'Sulawesi Tengah',
        'Kalimantan Barat',
        'dan 7 provinsi lainnya'
      ],
      characteristics: [
        'PDRB per kapita rendah (< Rp 200 T)',
        'IPM di bawah 72.0',
        'Nilai investasi sangat rendah',
        'Infrastruktur kurang memadai',
        'Memerlukan intervensi pembangunan prioritas'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Analisis K-Means Clustering
        </h2>
        <p className="text-gray-600 mt-2">
          Pengelompokan provinsi berdasarkan kesamaan karakteristik investasi dan pembangunan
        </p>
      </div>

      {/* Clustering Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white shadow-md border-2 border-gray-100">
          <CardContent className="p-6 text-center">
            <GitBranch className="h-10 w-10 text-[#002C5F] mx-auto mb-3" />
            <div className="text-3xl text-[#002C5F] mb-1">3</div>
            <p className="text-sm text-gray-600">Total Klaster Terbentuk</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-2 border-gray-100">
          <CardContent className="p-6 text-center">
            <MapPin className="h-10 w-10 text-[#F9B233] mx-auto mb-3" />
            <div className="text-3xl text-[#002C5F] mb-1">34</div>
            <p className="text-sm text-gray-600">Provinsi Terklasifikasi</p>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-md border-2 border-gray-100">
          <CardContent className="p-6 text-center">
            <TrendingUp className="h-10 w-10 text-[#059669] mx-auto mb-3" />
            <div className="text-3xl text-[#002C5F] mb-1">92.3%</div>
            <p className="text-sm text-gray-600">Akurasi Clustering</p>
          </CardContent>
        </Card>
      </div>

      {/* Cluster Details */}
      {clusters.map((cluster) => (
        <Card 
          key={cluster.id} 
          className="border-l-4 shadow-lg bg-white"
          style={{ borderLeftColor: cluster.color }}
        >
          <CardHeader className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: cluster.color }}
                />
                <div>
                  <CardTitle className="text-[#002C5F]">{cluster.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {cluster.count} Provinsi dalam klaster ini
                  </CardDescription>
                </div>
              </div>
              <Badge 
                className="text-white"
                style={{ backgroundColor: cluster.color }}
              >
                Klaster {cluster.id}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Metrics */}
            <div>
              <h4 className="text-[#002C5F] mb-3">Metrik Rata-rata</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">PDRB per Kapita</p>
                  <p className="text-lg text-[#002C5F]">Rp {cluster.avgPDRB} T</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">IPM Rata-rata</p>
                  <p className="text-lg text-[#002C5F]">{cluster.avgIPM.toFixed(1)}</p>
                </div>
                <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-600 mb-1">Investasi Avg</p>
                  <p className="text-lg text-[#002C5F]">Rp {cluster.avgInvestment} M</p>
                </div>
              </div>
            </div>

            {/* Characteristics */}
            <div>
              <h4 className="text-[#002C5F] mb-3">Karakteristik Utama</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {cluster.characteristics.map((char, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div 
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ backgroundColor: cluster.color }}
                    />
                    <p className="text-sm text-gray-700">{char}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Provinces */}
            <div>
              <h4 className="text-[#002C5F] mb-3">Daftar Provinsi</h4>
              <div className="flex flex-wrap gap-2">
                {cluster.provinces.map((province, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline"
                    className="px-3 py-1"
                    style={{ borderColor: cluster.color, color: cluster.color }}
                  >
                    {province}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
