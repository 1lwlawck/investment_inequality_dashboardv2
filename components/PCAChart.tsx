"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";

export function PCAChart() {
  const pcaData = [
    { component: "PC1", economic: 0.85, infrastructure: 0.72, human: 0.65, variance: 45.2 },
    { component: "PC2", economic: 0.42, infrastructure: 0.68, human: 0.81, variance: 28.7 },
    { component: "PC3", economic: 0.28, infrastructure: 0.55, human: 0.45, variance: 15.3 },
    { component: "PC4", economic: 0.15, infrastructure: 0.32, human: 0.38, variance: 10.8 },
  ];

  const factorLoadings = [
    { factor: "PDRB per Kapita", loading: 0.92 },
    { factor: "Nilai Investasi", loading: 0.88 },
    { factor: "Indeks Infrastruktur", loading: 0.76 },
    { factor: "Indeks Pembangunan Manusia", loading: 0.84 },
    { factor: "Kepadatan Jalan", loading: 0.68 },
    { factor: "Akses Listrik", loading: 0.79 },
    { factor: "Tingkat Pendidikan", loading: 0.81 },
    { factor: "Akses Kesehatan", loading: 0.73 },
  ];

  return (
    <div className="space-y-8">
      {/* PCA Component Loadings */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-[#002C5F] mb-4">
          Analisis Komponen Utama - Loading Faktor
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={pcaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="component" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "2px solid #002C5F",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
            />
            <Legend />
            <Bar dataKey="economic" fill="#DC2626" name="Indeks Ekonomi" radius={[8, 8, 0, 0]} />
            <Bar dataKey="infrastructure" fill="#F9B233" name="Indeks Infrastruktur" radius={[8, 8, 0, 0]} />
            <Bar dataKey="human" fill="#059669" name="Indeks Pembangunan Manusia" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Explained Variance */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-[#002C5F] mb-4">
          Varians yang Dijelaskan oleh Komponen Utama
        </h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={pcaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="component" stroke="#6B7280" />
            <YAxis stroke="#6B7280" label={{ value: "Varians (%)", angle: -90, position: "insideLeft", style: { fill: "#6B7280" } }} />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "2px solid #002C5F",
                borderRadius: "8px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
              }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="variance"
              stroke="#002C5F"
              strokeWidth={3}
              name="Varians yang Dijelaskan (%)"
              dot={{ fill: "#002C5F", r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Factor Loadings Table */}
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <div className="mb-4 pb-3 border-b border-gray-200">
          <h3 className="text-[#002C5F]">
            Loading Faktor (PC1)
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            Kontribusi setiap variabel terhadap komponen utama pertama
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {factorLoadings.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex-1">
                <p className="text-gray-800">{item.factor}</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                  <div
                    className="h-full bg-gradient-to-r from-[#F9B233] to-[#002C5F] rounded-full transition-all"
                    style={{ width: `${item.loading * 100}%` }}
                  />
                </div>
                <span className="text-[#002C5F] w-12 text-right">{item.loading.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
