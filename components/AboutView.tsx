"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GarudaEmblem } from "./GarudaEmblem";
import { 
  Info, 
  Target, 
  Database, 
  BarChart3, 
  GitBranch, 
  FileText, 
  ExternalLink,
  BookOpen
} from "lucide-react";

export function AboutView() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Tentang Sistem INVESTRA
        </h2>
        <p className="text-gray-600 mt-2">
          Informasi lengkap mengenai sistem, metodologi, dan sumber data
        </p>
      </div>

      {/* Main Info Card */}
      <Card className="bg-gradient-to-br from-[#002C5F] to-[#003D7A] text-white shadow-xl">
        <CardContent className="p-8">
          <div className="flex items-start gap-8">
            <GarudaEmblem size={120} />
            <div className="flex-1">
              <h2 className="text-3xl mb-4">INVESTRA</h2>
              <h3 className="text-[#F9B233] text-xl mb-4">
                Investment Analytics Indonesia
              </h3>
              <p className="text-gray-200 leading-relaxed mb-4">
                Sistem Analisis Ketimpangan Distribusi Investasi Antar Wilayah di Indonesia merupakan platform analitik 
                berbasis web yang dikembangkan untuk mendukung pengambilan keputusan berbasis data dalam mengatasi 
                disparitas investasi antar provinsi di Indonesia.
              </p>
              <p className="text-gray-200 leading-relaxed">
                Dikembangkan dengan menggunakan metode statistik modern termasuk Principal Component Analysis (PCA) 
                dan K-Means Clustering untuk mengidentifikasi pola, mengelompokkan wilayah, dan menghasilkan 
                rekomendasi kebijakan yang spesifik.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Objectives */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-[#F9B233]" />
            <CardTitle className="text-[#002C5F]">Tujuan Sistem</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Memetakan distribusi investasi antar 34 provinsi di Indonesia",
              "Mengidentifikasi faktor-faktor dominan yang mempengaruhi ketimpangan",
              "Mengelompokkan provinsi berdasarkan karakteristik investasi",
              "Menghasilkan rekomendasi kebijakan berbasis data",
              "Menyediakan dashboard interaktif untuk monitoring regional",
              "Mendukung perencanaan pembangunan nasional yang lebih merata"
            ].map((objective, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                <div className="w-6 h-6 rounded-full bg-[#F9B233] text-white flex items-center justify-center flex-shrink-0 text-sm">
                  {idx + 1}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Methodology */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-[#F9B233]" />
            <CardTitle className="text-[#002C5F]">Metodologi Analisis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-white border-l-4 border-[#DC2626] rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <BarChart3 className="h-6 w-6 text-[#DC2626]" />
                <h4 className="text-[#002C5F]">Principal Component Analysis (PCA)</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                PCA digunakan untuk mereduksi dimensionalitas data dengan mempertahankan varians maksimum. 
                Metode ini mengidentifikasi kombinasi linear variabel yang paling berkontribusi terhadap 
                ketimpangan investasi antar wilayah.
              </p>
            </div>

            <div className="p-5 bg-white border-l-4 border-[#F9B233] rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <GitBranch className="h-6 w-6 text-[#F9B233]" />
                <h4 className="text-[#002C5F]">K-Means Clustering</h4>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                K-Means mengelompokkan 34 provinsi ke dalam 3 klaster berdasarkan kesamaan karakteristik 
                investasi dan pembangunan. Setiap klaster mewakili tingkat investasi: tinggi, sedang, dan rendah.
              </p>
            </div>
          </div>

          <div className="p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200">
            <h4 className="text-[#002C5F] mb-3">Variabel Analisis</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                "PDRB per Kapita",
                "Nilai Investasi PMA/PMDN",
                "Indeks Pembangunan Manusia",
                "Indeks Infrastruktur",
                "Tingkat Pendidikan",
                "Akses Kesehatan",
                "Kepadatan Jalan",
                "Akses Listrik",
                "Tingkat Kemiskinan",
                "Tingkat Pengangguran",
                "Rasio Gini",
                "Pertumbuhan Ekonomi"
              ].map((variable, idx) => (
                <div key={idx} className="px-3 py-2 bg-white rounded-lg border border-gray-200 text-sm text-gray-700 text-center">
                  {variable}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Data Source */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Database className="h-6 w-6 text-[#F9B233]" />
            <CardTitle className="text-[#002C5F]">Sumber Data</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: "Badan Pusat Statistik (BPS)", url: "https://www.bps.go.id", desc: "Data PDRB, IPM, dan statistik regional" },
              { name: "BKPM", url: "https://www.bkpm.go.id", desc: "Data investasi PMA dan PMDN" },
              { name: "Kementerian Keuangan", url: "https://www.kemenkeu.go.id", desc: "Data fiskal dan anggaran daerah" },
              { name: "Bappenas", url: "https://www.bappenas.go.id", desc: "Data perencanaan pembangunan" }
            ].map((source, idx) => (
              <div key={idx} className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-[#002C5F]">{source.name}</h4>
                  <ExternalLink className="h-4 w-4 text-gray-400" />
                </div>
                <p className="text-sm text-gray-600">{source.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Technical Info */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <Info className="h-6 w-6 text-[#F9B233]" />
            <CardTitle className="text-[#002C5F]">Informasi Teknis</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Framework</p>
              <p className="text-[#002C5F]">Next.js 14</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">UI Library</p>
              <p className="text-[#002C5F]">Radix UI</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Charting</p>
              <p className="text-[#002C5F]">Recharts</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg text-center">
              <p className="text-sm text-gray-600 mb-1">Styling</p>
              <p className="text-[#002C5F]">Tailwind CSS</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contact */}
      <Card className="bg-gradient-to-r from-gray-50 to-amber-50 border-2 border-[#F9B233]/30 shadow-md">
        <CardContent className="p-6 text-center">
          <FileText className="h-10 w-10 text-[#002C5F] mx-auto mb-4" />
          <h3 className="text-[#002C5F] text-lg mb-2">Butuh Bantuan?</h3>
          <p className="text-gray-600 text-sm mb-4">
            Untuk pertanyaan atau dukungan teknis, silakan hubungi tim pengembang INVESTRA
          </p>
          <p className="text-[#002C5F]">
            investra@bappenas.go.id
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
