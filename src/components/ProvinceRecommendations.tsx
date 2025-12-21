import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Target, TrendingUp, Lightbulb, Building2, GraduationCap, DollarSign, Factory, Users, Wrench, Rocket, MapPin, Search } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Input } from './ui/input';
import { useState } from 'react';

// Data provinsi dengan rekomendasi spesifik
const provinceRecommendations = [
  // Cluster 1: Investasi Tinggi
  {
    name: 'DKI Jakarta',
    cluster: 1,
    clusterLabel: 'Investasi Tinggi',
    color: '#DC2626',
    pdrb: 2842.5,
    ipm: 81.1,
    pma: 125.4,
    strengths: ['Hub ekonomi nasional', 'Infrastruktur modern', 'Pusat keuangan & bisnis'],
    challenges: ['Kepadatan tinggi', 'Polusi & kemacetan', 'Ketimpangan sosial'],
    priorities: [
      {
        title: 'Smart City & Teknologi Digital',
        icon: Lightbulb,
        description: 'Transformasi Jakarta menjadi smart city berbasis teknologi untuk efisiensi layanan publik',
        actions: [
          'Implementasi sistem transportasi pintar dan integrasi moda transportasi',
          'Digitalisasi layanan pemerintahan untuk meningkatkan transparansi',
          'Pengembangan ekosistem startup dan teknologi digital'
        ]
      },
      {
        title: 'Desentralisasi Ekonomi',
        icon: Building2,
        description: 'Redistribusi aktivitas ekonomi ke wilayah penyangga untuk mengurangi beban Jakarta',
        actions: [
          'Relokasi industri padat karya ke Jabodetabek',
          'Pengembangan kota satelit dengan konsep TOD',
          'Insentif untuk perusahaan yang membuka kantor di luar Jakarta'
        ]
      }
    ]
  },
  {
    name: 'Jawa Barat',
    cluster: 1,
    clusterLabel: 'Investasi Tinggi',
    color: '#DC2626',
    pdrb: 1876.3,
    ipm: 74.5,
    pma: 98.2,
    strengths: ['Industri manufaktur kuat', 'Sumber daya manusia berlimpah', 'Akses ke pelabuhan'],
    challenges: ['Ketimpangan antar wilayah', 'Kemacetan di perkotaan', 'Pencemaran industri'],
    priorities: [
      {
        title: 'Zona Industri Berkelanjutan',
        icon: Factory,
        description: 'Pengembangan kawasan industri ramah lingkungan dengan standar internasional',
        actions: [
          'Pembangunan eco-industrial park di Karawang dan Bekasi',
          'Implementasi circular economy dalam sektor manufaktur',
          'Program green technology untuk industri tekstil dan otomotif'
        ]
      },
      {
        title: 'Pengembangan SDM Vokasi',
        icon: GraduationCap,
        description: 'Peningkatan kompetensi tenaga kerja sesuai kebutuhan industri 4.0',
        actions: [
          'Pendirian balai latihan kerja modern di setiap kabupaten/kota',
          'Kolaborasi industri-pendidikan untuk kurikulum berbasis kompetensi',
          'Program upskilling & reskilling pekerja manufaktur'
        ]
      }
    ]
  },
  {
    name: 'Jawa Tengah',
    cluster: 1,
    clusterLabel: 'Investasi Tinggi',
    color: '#DC2626',
    pdrb: 1523.7,
    ipm: 73.8,
    pma: 87.5,
    strengths: ['Industri manufaktur diversifikasi', 'Pariwisata budaya', 'Pertanian produktif'],
    challenges: ['Infrastruktur jalan kurang merata', 'Brain drain ke Jakarta', 'Produktivitas pertanian'],
    priorities: [
      {
        title: 'Koridor Ekonomi Selatan',
        icon: Wrench,
        description: 'Pembangunan koridor ekonomi di wilayah selatan untuk pemerataan pembangunan',
        actions: [
          'Pembangunan jalan tol trans Jawa Tengah selatan',
          'Pengembangan pelabuhan Cilacap sebagai hub logistik',
          'Zona ekonomi khusus berbasis agroindustri'
        ]
      },
      {
        title: 'Pariwisata Terintegrasi',
        icon: Target,
        description: 'Pengembangan destinasi wisata budaya dan alam yang terintegrasi',
        actions: [
          'Revitalisasi kawasan heritage Semarang dan Solo',
          'Pengembangan Borobudur sebagai destinasi kelas dunia',
          'Digital marketing terpadu untuk promosi wisata'
        ]
      }
    ]
  },
  {
    name: 'Jawa Timur',
    cluster: 1,
    clusterLabel: 'Investasi Tinggi',
    color: '#DC2626',
    pdrb: 1845.2,
    ipm: 73.2,
    pma: 92.1,
    strengths: ['Pelabuhan internasional', 'Industri diversifikasi', 'Sektor pertanian kuat'],
    challenges: ['Infrastruktur di wilayah timur', 'Kemiskinan di pedesaan', 'Kesenjangan kota-desa'],
    priorities: [
      {
        title: 'Pengembangan Pelabuhan Tanjung Perak',
        icon: Building2,
        description: 'Transformasi pelabuhan sebagai hub logistik regional Asia Tenggara',
        actions: [
          'Modernisasi terminal dan fasilitas pelabuhan',
          'Pengembangan kawasan industri maritim',
          'Integrasi digital port system untuk efisiensi bongkar muat'
        ]
      },
      {
        title: 'Agroindustri Modern',
        icon: Rocket,
        description: 'Transformasi sektor pertanian menjadi agroindustri bernilai tambah tinggi',
        actions: [
          'Pembangunan food estate terintegrasi di Banyuwangi',
          'Cold chain dan pengolahan hasil pertanian',
          'Platform digital untuk pemasaran produk pertanian'
        ]
      }
    ]
  },
  {
    name: 'DI Yogyakarta',
    cluster: 1,
    clusterLabel: 'Investasi Tinggi',
    color: '#DC2626',
    pdrb: 124.5,
    ipm: 81.0,
    pma: 34.2,
    strengths: ['Pendidikan tinggi berkualitas', 'Pariwisata budaya', 'Ekonomi kreatif'],
    challenges: ['Lahan terbatas', 'Overtourism di kawasan tertentu', 'Harga properti tinggi'],
    priorities: [
      {
        title: 'Ekonomi Kreatif & Digital',
        icon: Lightbulb,
        description: 'Penguatan ekosistem ekonomi kreatif berbasis talenta muda dan teknologi',
        actions: [
          'Creative hub dan co-working space di seluruh kota',
          'Inkubator bisnis startup berbasis kuliner dan fashion',
          'Festival dan event ekonomi kreatif berskala internasional'
        ]
      },
      {
        title: 'Pariwisata Berkelanjutan',
        icon: Target,
        description: 'Pengembangan pariwisata berkualitas dengan prinsip sustainability',
        actions: [
          'Pembatasan wisatawan di destinasi populer (carrying capacity)',
          'Pengembangan desa wisata di pinggiran kota',
          'Program community-based tourism untuk pemberdayaan lokal'
        ]
      }
    ]
  },
  {
    name: 'Bali',
    cluster: 1,
    clusterLabel: 'Investasi Tinggi',
    color: '#DC2626',
    pdrb: 178.9,
    ipm: 76.4,
    pma: 45.8,
    strengths: ['Pariwisata internasional', 'Budaya unik', 'Kualitas layanan tinggi'],
    challenges: ['Overtourism', 'Pencemaran lingkungan', 'Ketergantungan pada pariwisata'],
    priorities: [
      {
        title: 'Diversifikasi Ekonomi',
        icon: TrendingUp,
        description: 'Mengurangi ketergantungan pada sektor pariwisata dengan diversifikasi ekonomi',
        actions: [
          'Pengembangan sektor ekonomi digital dan tech startup',
          'Industri kreatif berbasis budaya lokal (craft, fashion)',
          'Ekonomi hijau dan renewable energy'
        ]
      },
      {
        title: 'Quality Tourism',
        icon: Target,
        description: 'Transformasi dari mass tourism ke quality tourism yang berkelanjutan',
        actions: [
          'Pembatasan jumlah wisatawan dan implementasi tourist tax',
          'Pengembangan luxury eco-resort dengan standar sustainability',
          'Program pelestarian budaya dan lingkungan yang melibatkan komunitas'
        ]
      }
    ]
  },

  // Cluster 2: Investasi Sedang
  {
    name: 'Sumatera Utara',
    cluster: 2,
    clusterLabel: 'Investasi Sedang',
    color: '#F9B233',
    pdrb: 612.3,
    ipm: 72.8,
    pma: 45.3,
    strengths: ['Pelabuhan Belawan', 'Perkebunan produktif', 'Industri pengolahan'],
    challenges: ['Infrastruktur jalan', 'Konektivitas antar wilayah', 'Degradasi lingkungan'],
    priorities: [
      {
        title: 'Modernisasi Pelabuhan Belawan',
        icon: Building2,
        description: 'Peningkatan kapasitas pelabuhan sebagai gateway Sumatera',
        actions: [
          'Pembangunan terminal container modern',
          'Pengembangan kawasan industri terintegrasi pelabuhan',
          'Digital port system untuk efisiensi logistik'
        ]
      },
      {
        title: 'Agroindustri Berkelanjutan',
        icon: Factory,
        description: 'Transformasi sektor perkebunan menjadi agroindustri ramah lingkungan',
        actions: [
          'Sertifikasi RSPO untuk perkebunan kelapa sawit',
          'Pengembangan industri hilir berbasis komoditas perkebunan',
          'Program replanting dan sustainable farming'
        ]
      }
    ]
  },
  {
    name: 'Kalimantan Timur',
    cluster: 2,
    clusterLabel: 'Investasi Sedang',
    color: '#F9B233',
    pdrb: 612.8,
    ipm: 77.4,
    pma: 58.2,
    strengths: ['Sumber daya alam berlimpah', 'Calon IKN', 'Infrastruktur energi'],
    challenges: ['Ketergantungan pada tambang', 'Deforestasi', 'Ketimpangan ekonomi'],
    priorities: [
      {
        title: 'Persiapan Ibu Kota Negara (IKN)',
        icon: Rocket,
        description: 'Persiapan infrastruktur dan ekosistem untuk mendukung IKN Nusantara',
        actions: [
          'Pembangunan infrastruktur jalan dan utilitas menuju IKN',
          'Pengembangan sektor jasa dan bisnis pendukung pemerintahan',
          'Peningkatan kapasitas SDM lokal untuk peluang kerja di IKN'
        ]
      },
      {
        title: 'Transisi Energi & Tambang Berkelanjutan',
        icon: Lightbulb,
        description: 'Diversifikasi dari tambang batu bara ke energi terbarukan',
        actions: [
          'Pengembangan renewable energy (solar, hydro) untuk supporting IKN',
          'Program reklamasi lahan bekas tambang',
          'Green mining practices dan circular economy dalam sektor tambang'
        ]
      }
    ]
  },
  {
    name: 'Sulawesi Selatan',
    cluster: 2,
    clusterLabel: 'Investasi Sedang',
    color: '#F9B233',
    pdrb: 456.7,
    ipm: 72.4,
    pma: 42.3,
    strengths: ['Hub logistik KTI', 'Pelabuhan Makassar', 'Pertanian & perikanan'],
    challenges: ['Infrastruktur pedesaan', 'Akses pendidikan', 'Produktivitas pertanian'],
    priorities: [
      {
        title: 'Gateway Kawasan Timur Indonesia',
        icon: Building2,
        description: 'Penguatan posisi sebagai pintu gerbang ekonomi Indonesia Timur',
        actions: [
          'Pengembangan pelabuhan Makassar New Port',
          'Hub logistik dan distribusi untuk wilayah timur',
          'Bandara internasional sebagai transit hub regional'
        ]
      },
      {
        title: 'Maritim & Perikanan Terpadu',
        icon: Factory,
        description: 'Pengembangan industri maritim dan perikanan terintegrasi',
        actions: [
          'Pembangunan cold storage dan fish processing plant',
          'Pengembangan fishing port modern',
          'Budidaya perikanan dengan teknologi modern'
        ]
      }
    ]
  },
  {
    name: 'Riau',
    cluster: 2,
    clusterLabel: 'Investasi Sedang',
    color: '#F9B233',
    pdrb: 687.2,
    ipm: 73.1,
    pma: 52.1,
    strengths: ['Perkebunan kelapa sawit', 'Industri pulp & paper', 'Minyak & gas'],
    challenges: ['Kebakaran hutan', 'Pencemaran lingkungan', 'Ketergantungan pada sawit'],
    priorities: [
      {
        title: 'Ekonomi Hijau & Berkelanjutan',
        icon: Lightbulb,
        description: 'Transformasi menuju ekonomi berbasis sustainability',
        actions: [
          'Zero burning policy dan early warning system kebakaran',
          'Sertifikasi lingkungan untuk industri kelapa sawit',
          'Pengembangan eco-tourism di Taman Nasional'
        ]
      },
      {
        title: 'Diversifikasi Ekonomi',
        icon: TrendingUp,
        description: 'Mengurangi ketergantungan pada sektor perkebunan',
        actions: [
          'Pengembangan industri hilir berbasis sawit (oleochemical)',
          'Sektor manufaktur ringan berbasis teknologi',
          'Pariwisata budaya dan alam terintegrasi'
        ]
      }
    ]
  },
  {
    name: 'Banten',
    cluster: 2,
    clusterLabel: 'Investasi Sedang',
    color: '#F9B233',
    pdrb: 789.4,
    ipm: 75.5,
    pma: 56.3,
    strengths: ['Kawasan industri besar', 'Pelabuhan strategis', 'Dekat Jakarta'],
    challenges: ['Polusi industri', 'Kesenjangan ekonomi', 'Infrastruktur air bersih'],
    priorities: [
      {
        title: 'Green Industrial Zone',
        icon: Factory,
        description: 'Transformasi kawasan industri menjadi ramah lingkungan',
        actions: [
          'Implementasi sistem pengolahan limbah terpadu',
          'Program circular economy di kawasan industri',
          'Sertifikasi ISO 14001 untuk seluruh pabrik'
        ]
      },
      {
        title: 'Pengembangan Pelabuhan Bojonegara',
        icon: Building2,
        description: 'Modernisasi pelabuhan untuk mendukung logistik regional',
        actions: [
          'Pembangunan container terminal modern',
          'Integrasi dengan kawasan industri Cilegon',
          'Smart port system untuk efisiensi operasional'
        ]
      }
    ]
  },
  {
    name: 'Lampung',
    cluster: 2,
    clusterLabel: 'Investasi Sedang',
    color: '#F9B233',
    pdrb: 289.3,
    ipm: 70.9,
    pma: 28.3,
    strengths: ['Pertanian produktif', 'Pelabuhan Bakauheni', 'Pariwisata alam'],
    challenges: ['Infrastruktur jalan', 'Akses pendidikan tinggi', 'Produktivitas petani'],
    priorities: [
      {
        title: 'Agroindustri & Food Estate',
        icon: Factory,
        description: 'Pengembangan agroindustri terintegrasi berbasis komoditas unggulan',
        actions: [
          'Pembangunan industrial estate untuk pengolahan hasil pertanian',
          'Cold chain infrastructure untuk komoditas hortikultura',
          'Platform digital marketing untuk produk pertanian'
        ]
      },
      {
        title: 'Gateway Sumatera-Jawa',
        icon: Wrench,
        description: 'Optimalisasi posisi strategis sebagai pintu masuk Sumatera',
        actions: [
          'Modernisasi pelabuhan Bakauheni',
          'Pengembangan rest area dan tourism spot di jalur lintas',
          'Integrasi sistem transportasi darat-laut'
        ]
      }
    ]
  },

  // Cluster 3: Investasi Rendah (Sample beberapa provinsi prioritas)
  {
    name: 'Papua',
    cluster: 3,
    clusterLabel: 'Investasi Rendah',
    color: '#059669',
    pdrb: 198.7,
    ipm: 60.1,
    pma: 12.3,
    strengths: ['Sumber daya alam kaya', 'Biodiversitas tinggi', 'Potensi pariwisata'],
    challenges: ['Infrastruktur minim', 'Akses terbatas', 'Kesenjangan pembangunan'],
    priorities: [
      {
        title: 'Akselerasi Infrastruktur Dasar',
        icon: Wrench,
        description: 'Pembangunan infrastruktur dasar untuk membuka isolasi wilayah',
        actions: [
          'Pembangunan jalan trans Papua untuk konektivitas antar kabupaten',
          'Pembangunan bandara perintis di daerah terpencil',
          'Elektrifikasi dengan renewable energy (solar, micro hydro)'
        ]
      },
      {
        title: 'Peningkatan SDM & Layanan Dasar',
        icon: Users,
        description: 'Investasi masif dalam pendidikan dan kesehatan',
        actions: [
          'Program afirmasi pendidikan dengan beasiswa penuh',
          'Penempatan guru dan dokter berkualitas dengan insentif khusus',
          'Pembangunan asrama dan fasilitas pendukung di daerah terpencil'
        ]
      },
      {
        title: 'Ekonomi Berbasis Komunitas',
        icon: Target,
        description: 'Pemberdayaan ekonomi lokal berbasis kearifan dan potensi daerah',
        actions: [
          'Eco-tourism berbasis komunitas adat',
          'Koperasi dan UMKM berbasis hasil hutan non-kayu',
          'Sertifikasi dan branding produk lokal Papua'
        ]
      }
    ]
  },
  {
    name: 'Nusa Tenggara Timur',
    cluster: 3,
    clusterLabel: 'Investasi Rendah',
    color: '#059669',
    pdrb: 56.4,
    ipm: 65.2,
    pma: 9.1,
    strengths: ['Pariwisata alam', 'Potensi peternakan', 'Budaya unik'],
    challenges: ['Infrastruktur terbatas', 'Kemiskinan tinggi', 'Akses air bersih'],
    priorities: [
      {
        title: 'Pariwisata Premium Labuan Bajo',
        icon: Rocket,
        description: 'Pengembangan Labuan Bajo sebagai destinasi super prioritas',
        actions: [
          'Pembangunan infrastruktur pendukung pariwisata berkelas dunia',
          'Luxury eco-resort dengan prinsip sustainability',
          'Pelatihan SDM pariwisata dengan standar internasional'
        ]
      },
      {
        title: 'Peternakan Terpadu',
        icon: Factory,
        description: 'Pengembangan kluster peternakan modern terintegrasi',
        actions: [
          'Pembangunan feedlot dan slaughterhouse modern',
          'Program breeding untuk peningkatan kualitas ternak',
          'Cold chain untuk distribusi produk peternakan'
        ]
      },
      {
        title: 'Infrastruktur Air & Sanitasi',
        icon: Wrench,
        description: 'Penyediaan akses air bersih dan sanitasi layak untuk seluruh penduduk',
        actions: [
          'Pembangunan embung dan water reservoir',
          'Sistem distribusi air bersih ke seluruh desa',
          'Program sanitasi total berbasis masyarakat (STBM)'
        ]
      }
    ]
  },
  {
    name: 'Maluku',
    cluster: 3,
    clusterLabel: 'Investasi Rendah',
    color: '#059669',
    pdrb: 21.8,
    ipm: 70.1,
    pma: 6.8,
    strengths: ['Maritim & perikanan', 'Rempah-rempah', 'Pariwisata sejarah'],
    challenges: ['Kepulauan terisolasi', 'Konektivitas lemah', 'Infrastruktur minimal'],
    priorities: [
      {
        title: 'Ekonomi Maritim & Perikanan',
        icon: Building2,
        description: 'Pengembangan sektor maritim sebagai tulang punggung ekonomi',
        actions: [
          'Pembangunan pelabuhan perikanan nusantara (PPN)',
          'Cold storage dan fish processing plant di pulau-pulau utama',
          'Program budidaya rumput laut dan perikanan tangkap modern'
        ]
      },
      {
        title: 'Tol Laut & Konektivitas',
        icon: Wrench,
        description: 'Peningkatan konektivitas antar pulau dengan sistem tol laut',
        actions: [
          'Subsidi transportasi laut untuk menurunkan harga barang',
          'Pembangunan dermaga di pulau-pulau terpencil',
          'Kapal perintis dan ferry reguler untuk konektivitas antar pulau'
        ]
      },
      {
        title: 'Revitalisasi Komoditas Rempah',
        icon: Factory,
        description: 'Pengembangan industri berbasis rempah-rempah khas Maluku',
        actions: [
          'Pengembangan agro-wisata berbasis rempah',
          'Industri pengolahan dan packaging rempah modern',
          'Branding dan sertifikasi "Rempah Maluku" untuk pasar global'
        ]
      }
    ]
  },
  {
    name: 'Kalimantan Barat',
    cluster: 3,
    clusterLabel: 'Investasi Rendah',
    color: '#059669',
    pdrb: 178.9,
    ipm: 68.3,
    pma: 18.9,
    strengths: ['Perbatasan strategis', 'Pertanian & perkebunan', 'Biodiversitas'],
    challenges: ['Infrastruktur perbatasan', 'Illegal logging', 'Akses pendidikan'],
    priorities: [
      {
        title: 'Pengembangan Wilayah Perbatasan',
        icon: Target,
        description: 'Percepatan pembangunan di kawasan perbatasan RI-Malaysia',
        actions: [
          'Pembangunan Pos Lintas Batas Negara (PLBN) modern',
          'Zona ekonomi perbatasan untuk perdagangan lintas negara',
          'Infrastruktur jalan menuju kawasan perbatasan'
        ]
      },
      {
        title: 'Konservasi & Eco-Tourism',
        icon: Lightbulb,
        description: 'Pelestarian hutan dan pengembangan pariwisata alam berkelanjutan',
        actions: [
          'Program konservasi orangutan dan satwa endemik',
          'Eco-tourism berbasis taman nasional',
          'Community forestry untuk pemberdayaan masyarakat'
        ]
      },
      {
        title: 'Agroindustri Kelapa Sawit Berkelanjutan',
        icon: Factory,
        description: 'Pengembangan perkebunan dan industri hilir yang ramah lingkungan',
        actions: [
          'Sertifikasi ISPO/RSPO untuk seluruh perkebunan',
          'Pengembangan industri oleochemical dan biofuel',
          'Plasma petani sawit dengan pendampingan intensif'
        ]
      }
    ]
  },
  {
    name: 'Sulawesi Tengah',
    cluster: 3,
    clusterLabel: 'Investasi Rendah',
    color: '#059669',
    pdrb: 112.4,
    ipm: 69.7,
    pma: 16.8,
    strengths: ['Pertanian kakao', 'Potensi nikel', 'Pariwisata alam'],
    challenges: ['Rawan bencana', 'Infrastruktur rusak', 'Kemiskinan'],
    priorities: [
      {
        title: 'Pemulihan Pasca Bencana',
        icon: Wrench,
        description: 'Rekonstruksi infrastruktur dan ekonomi pasca gempa & tsunami',
        actions: [
          'Pembangunan infrastruktur tahan bencana (build back better)',
          'Sistem early warning untuk tsunami dan gempa',
          'Rehabilitasi ekonomi masyarakat korban bencana'
        ]
      },
      {
        title: 'Hilirisasi Nikel',
        icon: Factory,
        description: 'Pengembangan industri pengolahan nikel untuk nilai tambah',
        actions: [
          'Pembangunan smelter dan kawasan industri nikel',
          'Kemitraan dengan investor untuk battery industry',
          'Program corporate social responsibility untuk masyarakat lokal'
        ]
      },
      {
        title: 'Kakao Premium',
        icon: TrendingUp,
        description: 'Transformasi Sulawesi Tengah sebagai pusat kakao premium Indonesia',
        actions: [
          'Program fermentasi kakao untuk meningkatkan kualitas',
          'Chocolate factory dan chocolate tourism',
          'Sertifikasi kakao organik untuk pasar ekspor premium'
        ]
      }
    ]
  }
];

// Tambahkan provinsi lain dengan template dasar berdasarkan cluster
const additionalProvinces = [
  // Cluster 2
  { name: 'Sumatera Barat', cluster: 2, clusterLabel: 'Investasi Sedang', color: '#F9B233' },
  { name: 'Kepulauan Riau', cluster: 2, clusterLabel: 'Investasi Sedang', color: '#F9B233' },
  { name: 'Sulawesi Utara', cluster: 2, clusterLabel: 'Investasi Sedang', color: '#F9B233' },
  
  // Cluster 3
  { name: 'Papua Barat', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Maluku Utara', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Nusa Tenggara Barat', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Jambi', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Sumatera Selatan', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Bengkulu', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Bangka Belitung', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Kalimantan Tengah', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Kalimantan Selatan', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Kalimantan Utara', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Sulawesi Tenggara', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Sulawesi Barat', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Gorontalo', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
  { name: 'Aceh', cluster: 3, clusterLabel: 'Investasi Rendah', color: '#059669' },
];

// Generate rekomendasi dasar untuk provinsi yang belum ada detail
const allProvinces = [
  ...provinceRecommendations,
  ...additionalProvinces.map(prov => ({
    ...prov,
    pdrb: 0,
    ipm: 0,
    pma: 0,
    strengths: prov.cluster === 2 
      ? ['Potensi ekonomi regional', 'Sumber daya lokal', 'Lokasi strategis']
      : ['Potensi alam berlimpah', 'Budaya lokal unik', 'Peluang pengembangan'],
    challenges: prov.cluster === 2
      ? ['Infrastruktur perlu ditingkatkan', 'SDM perlu pengembangan', 'Daya saing regional']
      : ['Infrastruktur terbatas', 'Akses layanan dasar', 'Kemiskinan relatif tinggi'],
    priorities: prov.cluster === 2 ? [
      {
        title: 'Peningkatan Infrastruktur Regional',
        icon: Wrench,
        description: 'Percepatan pembangunan infrastruktur untuk meningkatkan konektivitas',
        actions: [
          'Pembangunan jalan dan jembatan penghubung antar wilayah',
          'Peningkatan kapasitas pelabuhan dan bandara',
          'Akses internet broadband untuk digitalisasi ekonomi'
        ]
      },
      {
        title: 'Pengembangan Ekonomi Lokal',
        icon: TrendingUp,
        description: 'Penguatan sektor ekonomi berbasis potensi dan keunggulan daerah',
        actions: [
          'Identifikasi dan pengembangan komoditas unggulan',
          'Pelatihan UMKM dan koperasi',
          'Promosi dan branding produk lokal'
        ]
      }
    ] : [
      {
        title: 'Insentif Fiskal Khusus',
        icon: DollarSign,
        description: 'Pemberian insentif dan kemudahan untuk menarik investasi',
        actions: [
          'Tax holiday untuk investor di wilayah tertinggal',
          'Subsidi logistik dan energi',
          'Kemudahan perizinan one-stop service'
        ]
      },
      {
        title: 'Pembangunan Layanan Dasar',
        icon: Users,
        description: 'Penyediaan akses pendidikan, kesehatan, dan infrastruktur dasar',
        actions: [
          'Pembangunan sekolah dan puskesmas di setiap kecamatan',
          'Akses air bersih dan sanitasi layak',
          'Program beasiswa dan bantuan kesehatan gratis'
        ]
      }
    ]
  }))
];

export function ProvinceRecommendations() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter provinsi berdasarkan pencarian
  const filteredProvinces = allProvinces.filter(province =>
    province.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Urutkan berdasarkan cluster dan nama
  const sortedProvinces = [...filteredProvinces].sort((a, b) => {
    if (a.cluster !== b.cluster) return a.cluster - b.cluster;
    return a.name.localeCompare(b.name);
  });

  return (
    <div className="space-y-6">
      <Card className="border-2 border-[#002C5F]/20 shadow-md">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200">
          <CardTitle className="text-[#002C5F] text-xl">
            Rekomendasi Kebijakan Per Provinsi
          </CardTitle>
          <CardDescription className="text-gray-600">
            Strategi pembangunan spesifik untuk setiap provinsi berdasarkan karakteristik dan potensi lokal
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari nama provinsi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-[#002C5F]/20 focus:border-[#F9B233]"
              />
            </div>
          </div>

          {/* Province Count */}
          <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="h-4 w-4" />
            <span>Menampilkan {sortedProvinces.length} dari {allProvinces.length} provinsi</span>
          </div>

          {/* Province List */}
          <Accordion type="single" collapsible className="space-y-3">
            {sortedProvinces.map((province, index) => {
              return (
                <AccordionItem 
                  key={index}
                  value={`province-${index}`}
                  className="border-2 rounded-lg bg-white shadow-sm hover:shadow-md transition-all"
                  style={{ borderColor: province.color }}
                >
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div 
                        className="p-3 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: `${province.color}20` }}
                      >
                        <MapPin className="h-5 w-5" style={{ color: province.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#002C5F]">{province.name}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span 
                            className="inline-block w-2 h-2 rounded-full"
                            style={{ backgroundColor: province.color }}
                          />
                          <p className="text-sm text-gray-600">{province.clusterLabel}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <div className="space-y-5 mt-3">
                      {/* Strengths & Challenges */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="text-sm text-green-800 mb-2" style={{ fontWeight: 600 }}>
                            Kekuatan & Potensi
                          </h4>
                          <ul className="space-y-1.5">
                            {province.strengths.map((strength, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0" />
                                <span>{strength}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                          <h4 className="text-sm text-red-800 mb-2" style={{ fontWeight: 600 }}>
                            Tantangan & Kendala
                          </h4>
                          <ul className="space-y-1.5">
                            {province.challenges.map((challenge, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 flex-shrink-0" />
                                <span>{challenge}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Priority Programs */}
                      <div>
                        <h4 className="text-[#002C5F] mb-4">Program Prioritas</h4>
                        <div className="space-y-4">
                          {province.priorities.map((priority, idx) => {
                            const PriorityIcon = priority.icon;
                            return (
                              <div 
                                key={idx}
                                className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 rounded-lg border border-gray-200"
                              >
                                <div className="flex items-start gap-3 mb-3">
                                  <div 
                                    className="p-2 rounded-lg flex-shrink-0"
                                    style={{ backgroundColor: 'white', border: `2px solid ${province.color}` }}
                                  >
                                    <PriorityIcon className="h-4 w-4" style={{ color: province.color }} />
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="text-[#002C5F] mb-1.5" style={{ fontSize: '0.9375rem' }}>
                                      {priority.title}
                                    </h5>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                      {priority.description}
                                    </p>
                                    <div className="space-y-2">
                                      <p className="text-xs text-gray-600" style={{ fontWeight: 600 }}>
                                        Rencana Aksi:
                                      </p>
                                      <ul className="space-y-1.5">
                                        {priority.actions.map((action, actionIdx) => (
                                          <li 
                                            key={actionIdx}
                                            className="flex items-start gap-2 text-sm text-gray-700"
                                          >
                                            <span 
                                              className="inline-block w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                              style={{ backgroundColor: province.color }}
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
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

          {/* No Results */}
          {sortedProvinces.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="h-12 w-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Tidak ada provinsi yang ditemukan</p>
              <p className="text-sm text-gray-400 mt-1">Coba kata kunci pencarian yang berbeda</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
