"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Factory, FileDown } from "lucide-react";
import { PolicyRecommendations } from "./PolicyRecommendations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function PolicyView() {
  const clusterSummary = [
    {
      cluster: 1,
      title: "Klaster 1 - Investasi Tinggi",
      provinces: "DKI Jakarta, Jawa Barat, Jawa Timur, Jawa Tengah, DI Yogyakarta, Bali",
      color: "#DC2626",
      icon: Factory,
      count: 6,
    },
    {
      cluster: 2,
      title: "Klaster 2 - Investasi Sedang",
      provinces: "Sumatera Utara, Kalimantan Timur, Sulawesi Selatan, Riau, Banten, Lampung",
      color: "#F9B233",
      icon: TrendingUp,
      count: 14,
    },
    {
      cluster: 3,
      title: "Klaster 3 - Investasi Rendah",
      provinces: "Papua, Papua Barat, Maluku, Maluku Utara, Nusa Tenggara Timur, dan wilayah lainnya",
      color: "#059669",
      icon: Target,
      count: 14,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Rekomendasi Kebijakan Regional
        </h2>
        <p className="text-gray-600 mt-2">
          Strategi pembangunan berbasis hasil clustering dan analisis PCA untuk mengatasi ketimpangan investasi
        </p>
      </div>

      {/* Cluster Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {clusterSummary.map((item) => {
          const Icon = item.icon;
          return (
            <Card 
              key={item.cluster} 
              className="border-l-4 hover:shadow-lg transition-all bg-white"
              style={{ borderLeftColor: item.color }}
            >
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <div>
                    <CardTitle className="text-[#002C5F] text-lg">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {item.count} Provinsi
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.provinces}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabbed Policy Recommendations */}
      <Tabs defaultValue="cluster" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-100 p-1">
          <TabsTrigger 
            value="cluster"
            className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white"
          >
            Rekomendasi Per Klaster
          </TabsTrigger>
          <TabsTrigger 
            value="province"
            className="data-[state=active]:bg-[#002C5F] data-[state=active]:text-white"
          >
            Rekomendasi Per Provinsi
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cluster" className="mt-6">
          <PolicyRecommendations />
        </TabsContent>
        
        <TabsContent value="province" className="mt-6">
          <Card className="border-2 border-[#002C5F]/20 shadow-md">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
              <CardTitle className="text-[#002C5F]">Rekomendasi Per Provinsi</CardTitle>
              <CardDescription>Detail rekomendasi spesifik untuk setiap provinsi</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-600 text-center py-8">
                Fitur ini akan menampilkan rekomendasi detail untuk setiap provinsi berdasarkan karakteristik uniknya.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <Card className="bg-gradient-to-r from-[#002C5F] to-[#003D7A] text-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl mb-2">Dokumen Lengkap Rekomendasi Kebijakan</h3>
              <p className="text-gray-200 text-sm">
                Unduh laporan komprehensif dalam format PDF untuk disebarluaskan ke pemangku kepentingan
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-[#F9B233] hover:bg-[#E5A200] text-[#002C5F] gap-2 shadow-md"
            >
              <FileDown className="h-5 w-5" />
              Unduh PDF Lengkap
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
