import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Download, MapPin, GitBranch, TrendingUp, Calendar } from 'lucide-react';
import { InteractiveMap } from './InteractiveMap';
import { PCAChart } from './PCAChart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

export function DashboardView() {
  const summaryCards = [
    {
      title: 'Total Provinsi Dianalisis',
      value: '34',
      icon: MapPin,
      color: 'bg-[#002C5F]',
    },
    {
      title: 'Jumlah Klaster Terbentuk',
      value: '3',
      icon: GitBranch,
      color: 'bg-[#F9B233]',
    },
    {
      title: 'Faktor Dominan PCA',
      value: 'Indeks Ekonomi',
      icon: TrendingUp,
      color: 'bg-[#DC2626]',
    },
    {
      title: 'Periode Data',
      value: '2019–2024',
      icon: Calendar,
      color: 'bg-[#059669]',
    },
  ];

  const policyInsights = [
    {
      cluster: 1,
      title: 'Investasi Tinggi',
      description: 'Dorong diversifikasi industri dan desentralisasi investasi untuk mengurangi konsentrasi ekonomi.',
      color: '#DC2626',
    },
    {
      cluster: 2,
      title: 'Investasi Sedang',
      description: 'Perkuat infrastruktur & logistik wilayah untuk meningkatkan daya saing regional.',
      color: '#F9B233',
    },
    {
      cluster: 3,
      title: 'Investasi Rendah',
      description: 'Berikan insentif fiskal & peningkatan SDM untuk menarik investasi dan pembangunan.',
      color: '#059669',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Ringkasan Dashboard
        </h2>
        <p className="text-gray-600 mt-2">
          Analisis komprehensif ketimpangan investasi dan pola distribusi antar provinsi di Indonesia
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-100 bg-white">
              <CardHeader className="flex flex-row items-center justify-between pb-3">
                <CardTitle className="text-gray-600 text-sm">{card.title}</CardTitle>
                <div className={`${card.color} p-2.5 rounded-lg shadow-sm`}>
                  <Icon className="h-4 w-4 text-white" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-[#002C5F] text-2xl">{card.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Analytic Tabs Section */}
      <Card className="rounded-lg shadow-lg border-2 border-gray-100">
        <CardHeader className="bg-gradient-to-r from-[#002C5F] to-[#003D7A] text-white rounded-t-lg">
          <CardTitle className="text-xl">
            Analisis Data Investasi
          </CardTitle>
          <CardDescription className="text-gray-100 mt-1">
            Visualisasi hasil PCA, klaster, dan rekomendasi kebijakan
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs defaultValue="cluster" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 p-1">
              <TabsTrigger value="cluster" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
                Tampilan Klaster
              </TabsTrigger>
              <TabsTrigger value="pca" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
                Hasil PCA
              </TabsTrigger>
              <TabsTrigger value="policy" className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white">
                Wawasan Kebijakan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cluster" className="space-y-4">
              <InteractiveMap />
            </TabsContent>

            <TabsContent value="pca" className="space-y-4">
              <PCAChart />
            </TabsContent>

            <TabsContent value="policy" className="space-y-4">
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-[#002C5F] text-xl mb-2">
                    Rekomendasi Berdasarkan Klaster
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Strategi kebijakan spesifik untuk setiap kelompok wilayah berdasarkan hasil clustering
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {policyInsights.map((insight) => (
                    <Card 
                      key={insight.cluster} 
                      className="border-l-4 hover:shadow-lg transition-all duration-300 bg-white"
                      style={{ borderLeftColor: insight.color }}
                    >
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <div
                            className="w-4 h-4 rounded-full shadow-sm"
                            style={{ backgroundColor: insight.color }}
                          />
                          <CardTitle className="text-[#002C5F]">
                            Klaster {insight.cluster}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base">
                          {insight.title}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {insight.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="flex justify-end mt-6">
                  <Button className="bg-[#002C5F] hover:bg-[#003D7A] text-white shadow-md">
                    <Download className="h-4 w-4 mr-2" />
                    📄 Unduh Laporan PDF
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Key Findings Section */}
      <Card className="rounded-lg shadow-lg bg-gradient-to-br from-blue-50 via-white to-yellow-50 border-2 border-[#002C5F]/20">
        <CardHeader className="border-b border-gray-200 bg-white/80">
          <CardTitle className="text-[#002C5F] flex items-center gap-2 text-xl">
            <TrendingUp className="h-6 w-6 text-[#F9B233]" />
            Temuan Utama & Wawasan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 bg-white rounded-lg border-l-4 border-[#DC2626] shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[#002C5F] mb-2">
                Konsentrasi Investasi
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Investasi terkonsentrasi di 6 provinsi Jawa, menciptakan kesenjangan signifikan dengan wilayah lain.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border-l-4 border-[#F9B233] shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[#002C5F] mb-2">
                Kesenjangan Infrastruktur
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Kualitas infrastruktur menjadi faktor dominan yang menjelaskan ketimpangan investasi (loading factor 0.76).
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border-l-4 border-[#059669] shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[#002C5F] mb-2">
                Disparitas Regional
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Indonesia Timur membentuk klaster tersendiri dengan indikator pembangunan rendah di semua dimensi.
              </p>
            </div>

            <div className="p-5 bg-white rounded-lg border-l-4 border-[#002C5F] shadow-sm hover:shadow-md transition-shadow">
              <p className="text-[#002C5F] mb-2">
                Tren Gap yang Melebar
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Gap investasi antara klaster tertinggi dan terendah meningkat 50% dari 2019 ke 2024.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
