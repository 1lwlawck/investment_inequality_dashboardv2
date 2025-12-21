"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Lightbulb, Building2, GraduationCap, DollarSign, Factory, Users, Wrench, Rocket } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function PolicyRecommendations() {
  const recommendations = [
    {
      cluster: 1,
      title: "Klaster 1: Wilayah Investasi Tinggi",
      subtitle: "DKI Jakarta, Jawa Barat, Jawa Timur, Jawa Tengah, DI Yogyakarta, Bali",
      color: "#DC2626",
      icon: Factory,
      priorities: [
        {
          title: "Diversifikasi Industri",
          description: "Mendorong diversifikasi sektor industri untuk mengurangi ketergantungan pada sektor tertentu dan meningkatkan resiliensi ekonomi regional",
          icon: Factory,
          actions: [
            "Insentif untuk industri teknologi tinggi dan kreatif",
            "Pengembangan zona ekonomi khusus berbasis inovasi",
            "Kemitraan strategis dengan institusi riset global"
          ]
        },
        {
          title: "Desentralisasi Investasi",
          description: "Implementasi kebijakan desentralisasi investasi dan pengembangan kota satelit untuk mengurangi beban infrastruktur perkotaan",
          icon: Building2,
          actions: [
            "Pengembangan smart city di wilayah penyangga",
            "Relokasi industri padat karya ke pinggiran",
            "Peningkatan konektivitas transportasi antar kota"
          ]
        },
        {
          title: "Pengembangan Hub Inovasi",
          description: "Memperkuat ekosistem inovasi dan teknologi tinggi melalui pusat riset dan pengembangan",
          icon: Lightbulb,
          actions: [
            "Pembangunan science and technology park",
            "Program inkubator startup teknologi",
            "Kolaborasi universitas-industri untuk R&D"
          ]
        },
      ],
    },
    {
      cluster: 2,
      title: "Klaster 2: Wilayah Investasi Sedang",
      subtitle: "Sumatera Utara, Kalimantan Timur, Sulawesi Selatan, Riau, Banten, Lampung",
      color: "#F9B233",
      icon: TrendingUp,
      priorities: [
        {
          title: "Peningkatan Infrastruktur",
          description: "Percepatan pembangunan infrastruktur dasar termasuk jalan, pelabuhan, dan bandara untuk meningkatkan konektivitas regional",
          icon: Wrench,
          actions: [
            "Pembangunan jalan tol dan jalan arteri utama",
            "Modernisasi pelabuhan dan bandara regional",
            "Penyediaan akses internet broadband menyeluruh"
          ]
        },
        {
          title: "Penguatan Daya Saing Regional",
          description: "Peningkatan daya saing daerah melalui pengembangan kluster industri spesifik berdasarkan keunggulan lokal",
          icon: Target,
          actions: [
            "Identifikasi dan pengembangan komoditas unggulan",
            "Pembentukan kluster industri berbasis sumber daya lokal",
            "Peningkatan standar mutu produk daerah"
          ]
        },
        {
          title: "Pengembangan Sumber Daya Manusia",
          description: "Investasi dalam pendidikan vokasi dan pelatihan tenaga kerja untuk memenuhi kebutuhan industri",
          icon: GraduationCap,
          actions: [
            "Pendirian balai latihan kerja modern",
            "Program link and match dengan industri",
            "Sertifikasi kompetensi tenaga kerja"
          ]
        },
      ],
    },
    {
      cluster: 3,
      title: "Klaster 3: Wilayah Investasi Rendah",
      subtitle: "Papua, Papua Barat, Maluku, Maluku Utara, NTT, Kalimantan Barat, Sulawesi Tengah",
      color: "#059669",
      icon: Rocket,
      priorities: [
        {
          title: "Insentif Fiskal & Kemudahan Usaha",
          description: "Pemberian insentif pajak dan kemudahan perizinan untuk menarik investasi swasta ke wilayah-wilayah tertinggal",
          icon: DollarSign,
          actions: [
            "Tax holiday hingga 10 tahun untuk investor baru",
            "Subsidi energi dan logistik untuk industri",
            "Sistem perizinan online satu pintu"
          ]
        },
        {
          title: "Peningkatan Akses Pendidikan & Kesehatan",
          description: "Peningkatan akses dan kualitas layanan pendidikan dan kesehatan untuk meningkatkan Indeks Pembangunan Manusia",
          icon: Users,
          actions: [
            "Pembangunan sekolah dan rumah sakit berkualitas",
            "Program beasiswa dan bantuan kesehatan",
            "Penempatan tenaga pendidik dan medis berkualitas"
          ]
        },
        {
          title: "Promosi dan Fasilitasi Investasi",
          description: "Program promosi investasi aktif dan fasilitasi investor dengan pendampingan one-stop service",
          icon: TrendingUp,
          actions: [
            "Roadshow investasi domestik dan internasional",
            "Penyediaan lahan industri siap pakai",
            "Pendampingan investor dari proposal hingga operasional"
          ]
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="text-[#002C5F] text-xl">
            Strategi Kebijakan Per Klaster
          </CardTitle>
          <CardDescription className="text-gray-600">
            Rekomendasi kebijakan pembangunan spesifik untuk setiap kelompok wilayah berdasarkan analisis clustering
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <Accordion type="single" collapsible className="space-y-4">
            {recommendations.map((rec) => {
              const ClusterIcon = rec.icon;
              return (
                <AccordionItem 
                  key={rec.cluster} 
                  value={`cluster-${rec.cluster}`}
                  className="border-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
                  style={{ borderColor: rec.color }}
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div 
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${rec.color}20` }}
                      >
                        <ClusterIcon className="h-6 w-6" style={{ color: rec.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#002C5F]">{rec.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{rec.subtitle}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="space-y-6 mt-4">
                      {rec.priorities.map((priority, idx) => {
                        const PriorityIcon = priority.icon;
                        return (
                          <div 
                            key={idx} 
                            className="bg-gradient-to-br from-gray-50 to-blue-50 p-5 rounded-lg border border-gray-200"
                          >
                            <div className="flex items-start gap-3 mb-3">
                              <div 
                                className="p-2 rounded-lg flex-shrink-0"
                                style={{ backgroundColor: "white", border: `2px solid ${rec.color}` }}
                              >
                                <PriorityIcon className="h-5 w-5" style={{ color: rec.color }} />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-[#002C5F] mb-2">{priority.title}</h4>
                                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                                  {priority.description}
                                </p>
                                <div className="space-y-2">
                                  <p className="text-sm text-gray-600">Rencana Aksi:</p>
                                  <ul className="space-y-2">
                                    {priority.actions.map((action, actionIdx) => (
                                      <li 
                                        key={actionIdx}
                                        className="flex items-start gap-2 text-sm text-gray-700"
                                      >
                                        <span 
                                          className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                          style={{ backgroundColor: rec.color }}
                                        />
                                        <span>{action}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
