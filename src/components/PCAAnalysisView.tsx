import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { PCAChart } from './PCAChart';
import { TrendingUp, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

export function PCAAnalysisView() {
  const pcaSummary = [
    {
      component: 'PC1',
      variance: '45.2%',
      description: 'Komponen utama pertama menjelaskan indeks ekonomi dan investasi',
      color: '#DC2626'
    },
    {
      component: 'PC2',
      variance: '28.7%',
      description: 'Komponen kedua berkaitan dengan infrastruktur dan aksesibilitas',
      color: '#F9B233'
    },
    {
      component: 'PC3',
      variance: '15.3%',
      description: 'Komponen ketiga menjelaskan aspek pembangunan manusia',
      color: '#059669'
    },
    {
      component: 'PC4',
      variance: '10.8%',
      description: 'Komponen keempat menjelaskan variabel residual lainnya',
      color: '#6B7280'
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Analisis Principal Component Analysis (PCA)
        </h2>
        <p className="text-gray-600 mt-2">
          Reduksi dimensi dan identifikasi faktor dominan yang mempengaruhi ketimpangan investasi
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pcaSummary.map((item, index) => (
          <Card 
            key={index} 
            className="border-l-4 hover:shadow-lg transition-all bg-white"
            style={{ borderLeftColor: item.color }}
          >
            <CardHeader className="pb-3">
              <CardTitle className="text-[#002C5F] text-lg">{item.component}</CardTitle>
              <CardDescription>Varians: {item.variance}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 leading-relaxed">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Info Alert */}
      <Alert className="bg-blue-50 border-[#002C5F]">
        <Info className="h-4 w-4 text-[#002C5F]" />
        <AlertTitle className="text-[#002C5F]">Tentang PCA</AlertTitle>
        <AlertDescription className="text-gray-700">
          Principal Component Analysis (PCA) adalah metode statistik untuk mereduksi dimensionalitas data dengan mempertahankan sebanyak mungkin variasi. 
          Dalam analisis ini, 4 komponen utama menjelaskan 100% varians total dari 12 variabel asli.
        </AlertDescription>
      </Alert>

      {/* PCA Visualization */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="text-[#002C5F]">Visualisasi Hasil PCA</CardTitle>
          <CardDescription>Grafik loading faktor dan explained variance</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <PCAChart />
        </CardContent>
      </Card>

      {/* Interpretation */}
      <Card className="bg-gradient-to-br from-blue-50 to-gray-50 border-2 border-gray-200 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#002C5F] flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#F9B233]" />
            Interpretasi Hasil
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-5 bg-white rounded-lg border-l-4 border-[#DC2626]">
            <h4 className="text-[#002C5F] mb-2">Komponen Utama 1 (PC1) - 45.2%</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              PC1 didominasi oleh variabel ekonomi seperti PDRB per kapita (loading: 0.92), nilai investasi (loading: 0.88), 
              dan IPM (loading: 0.84). Ini menunjukkan bahwa faktor ekonomi adalah penentu utama ketimpangan investasi antar provinsi.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border-l-4 border-[#F9B233]">
            <h4 className="text-[#002C5F] mb-2">Komponen Utama 2 (PC2) - 28.7%</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              PC2 lebih menekankan pada infrastruktur dengan loading tertinggi pada indeks infrastruktur (0.76) dan akses listrik (0.79). 
              Ini mengindikasikan bahwa kualitas infrastruktur adalah faktor penting kedua setelah ekonomi.
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border-l-4 border-[#059669]">
            <h4 className="text-[#002C5F] mb-2">Komponen Utama 3 (PC3) - 15.3%</h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              PC3 berkorelasi dengan tingkat pendidikan (0.81) dan akses kesehatan (0.73), menunjukkan pentingnya pembangunan sumber daya manusia 
              dalam menarik investasi dan mengurangi ketimpangan regional.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
