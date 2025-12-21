"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileSpreadsheet, AlertCircle, CheckCircle2, Download } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useState } from "react";

export function UploadDataView() {
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-l-4 border-[#F9B233] pl-6 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-[#002C5F]">
          Unggah Data Investasi
        </h2>
        <p className="text-gray-600 mt-2">
          Import dataset investasi provinsi untuk analisis PCA dan clustering
        </p>
      </div>

      {/* Upload Instructions */}
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="text-[#002C5F]">Panduan Upload Data</CardTitle>
          <CardDescription>Format data dan persyaratan file</CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-[#002C5F] mb-2 flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-[#F9B233]" />
                Format File
              </h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Format: CSV atau Excel (.xlsx)</li>
                <li>• Maksimal ukuran: 10 MB</li>
                <li>• Encoding: UTF-8</li>
              </ul>
            </div>

            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <h4 className="text-[#002C5F] mb-2">Kolom yang Diperlukan</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Nama Provinsi</li>
                <li>• PDRB per Kapita</li>
                <li>• Indeks Pembangunan Manusia (IPM)</li>
                <li>• Nilai Investasi (PMA/PMDN)</li>
                <li>• Indeks Infrastruktur</li>
              </ul>
            </div>
          </div>

          <Alert className="bg-blue-50 border-[#002C5F]">
            <AlertCircle className="h-4 w-4 text-[#002C5F]" />
            <AlertTitle className="text-[#002C5F]">Catatan Penting</AlertTitle>
            <AlertDescription className="text-gray-700">
              Pastikan data sudah dinormalisasi dan tidak ada nilai yang kosong. Data yang diupload akan diproses secara otomatis untuk analisis PCA dan clustering.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Upload Zone */}
      <Card className="border-2 border-dashed border-[#002C5F]/30 shadow-md">
        <CardContent className="p-12">
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-6 bg-gradient-to-br from-[#002C5F]/10 to-[#F9B233]/10 rounded-full">
              <Upload className="h-12 w-12 text-[#002C5F]" />
            </div>
            <div>
              <h3 className="text-[#002C5F] mb-2">Unggah File Dataset</h3>
              <p className="text-gray-600 text-sm">
                Klik untuk memilih file atau drag & drop file di sini
              </p>
            </div>
            <div className="flex gap-3">
              <Button className="bg-[#002C5F] hover:bg-[#003D7A] text-white">
                <FileSpreadsheet className="h-4 w-4 mr-2" />
                Pilih File
              </Button>
              <Button variant="outline" className="border-[#002C5F] text-[#002C5F]">
                <Download className="h-4 w-4 mr-2" />
                Unduh Template
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Status Messages */}
      {uploadStatus === "success" && (
        <Alert className="bg-green-50 border-green-500">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertTitle className="text-green-800">Upload Berhasil!</AlertTitle>
          <AlertDescription className="text-green-700">
            File data berhasil diunggah dan siap untuk dianalisis. Silakan lanjutkan ke menu Analisis PCA atau K-Means Clustering.
          </AlertDescription>
        </Alert>
      )}

      {/* Current Dataset Info */}
      <Card className="bg-gradient-to-br from-gray-50 to-blue-50 border-2 border-gray-200 shadow-md">
        <CardHeader>
          <CardTitle className="text-[#002C5F]">Dataset Aktif</CardTitle>
          <CardDescription>Informasi dataset yang sedang digunakan</CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Total Provinsi</p>
            <p className="text-[#002C5F] text-2xl">34</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Jumlah Variabel</p>
            <p className="text-[#002C5F] text-2xl">12</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Periode Data</p>
            <p className="text-[#002C5F] text-2xl">2019-2024</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <p className="text-sm text-gray-600 mb-1">Terakhir Update</p>
            <p className="text-[#002C5F] text-sm">15 Nov 2024</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
