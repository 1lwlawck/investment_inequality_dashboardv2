import { Button } from './ui/button';
import { GarudaEmblem } from './GarudaEmblem';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Search,
  ChevronDown,
  User,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  TrendingUp,
  BarChart3,
  FileText
} from 'lucide-react';

interface LandingPageProps {
  onLogin: () => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  const newsItems = [
    {
      category: 'Analisis Data',
      title: 'Hasil Clustering Investasi 34 Provinsi Tahun 2024',
      image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhdGF8ZW58MXx8fHwxNzYyMzUwODkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      time: '2 hari lalu'
    },
    {
      category: 'Kebijakan',
      title: 'Strategi Percepatan Investasi Wilayah Tertinggal',
      image: 'https://images.unsplash.com/photo-1679239108020-aca50acd5f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjI0MzQzMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      time: '5 hari lalu'
    },
    {
      category: 'Laporan',
      title: 'Publikasi Dashboard Ketimpangan Regional Q4 2024',
      image: 'https://images.unsplash.com/photo-1761387787737-c850f5db6fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNDM0MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      time: '1 minggu lalu'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Left Logos */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12">
                  <GarudaEmblem />
                </div>
                <div className="border-l-2 border-gray-300 pl-3">
                  <div className="text-[#002C5F] text-sm" style={{ fontWeight: 700, letterSpacing: '1px' }}>
                    INVESTRA
                  </div>
                  <div className="text-gray-500 text-xs" style={{ fontWeight: 400 }}>
                    Investment Analytics
                  </div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <div className="text-[#002C5F] text-xs" style={{ fontWeight: 600 }}>
                  BAPPENAS
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="text-[#002C5F] text-xs" style={{ fontWeight: 600 }}>
                  REPUBLIK INDONESIA
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari Berita atau Informasi..."
                  className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-[#002C5F]"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <Search className="h-4 w-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-4">
              <div className="text-xs text-gray-600">
                <div style={{ fontWeight: 600 }}>TOPIK</div>
                <div style={{ fontWeight: 400 }}>PILIHAN</div>
              </div>
              <Button 
                onClick={onLogin}
                size="sm"
                className="bg-[#002C5F] hover:bg-[#001F4D] text-white"
                style={{ fontWeight: 600 }}
              >
                <User className="h-4 w-4 mr-1" />
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center">
            <a 
              href="#" 
              className="flex items-center gap-2 px-5 py-4 text-[#002C5F] hover:bg-gray-50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              BERITA
              <ChevronDown className="h-4 w-4" />
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              PROFIL
              <ChevronDown className="h-4 w-4" />
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              ANALISIS
              <ChevronDown className="h-4 w-4" />
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              DASHBOARD
              <ChevronDown className="h-4 w-4" />
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              DATA & INFORMASI
              <ChevronDown className="h-4 w-4" />
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              REGULASI
              <ChevronDown className="h-4 w-4" />
            </a>
            
            <a href="#" className="px-5 py-4 text-gray-700 hover:bg-gray-50 text-sm flex items-center gap-1 transition-colors" style={{ fontWeight: 500 }}>
              KONTAK
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#002C5F]/90 via-[#002C5F]/70 to-transparent z-10"></div>
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1761387787737-c850f5db6fa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBnb3Zlcm5tZW50JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzYyNDM0MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#DC2626] text-white px-4 py-1 rounded text-xs mb-4" style={{ fontWeight: 700 }}>
                SISTEM TERBARU
              </div>
              <h1 className="text-white text-5xl mb-6" style={{ fontWeight: 700, lineHeight: '1.2' }}>
                Sistem Analisis Ketimpangan Distribusi Investasi Antar Wilayah di Indonesia
              </h1>
              <p className="text-white/90 text-lg mb-8 leading-relaxed" style={{ fontWeight: 400 }}>
                Platform berbasis PCA dan K-Means Clustering untuk monitoring ketimpangan ekonomi regional 34 provinsi Indonesia
              </p>
              <div className="flex items-center gap-4">
                <Button 
                  onClick={onLogin}
                  size="lg"
                  className="bg-white text-[#002C5F] hover:bg-gray-100 gap-2"
                  style={{ fontWeight: 600 }}
                >
                  Akses Dashboard
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <button className="text-white flex items-center gap-2 hover:gap-3 transition-all" style={{ fontWeight: 500 }}>
                  <span className="border-b border-white/50">Baca Selengkapnya</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center">
            <Facebook className="h-5 w-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center">
            <Twitter className="h-5 w-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center">
            <Instagram className="h-5 w-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center">
            <Youtube className="h-5 w-5 text-white" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors flex items-center justify-center">
            <Linkedin className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* News Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h2 className="text-[#002C5F] text-2xl mb-2" style={{ fontWeight: 700 }}>
              Informasi Populer
            </h2>
            <div className="w-20 h-1 bg-[#F9B233]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer border border-gray-200"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#002C5F] text-white px-3 py-1 rounded text-xs" style={{ fontWeight: 600 }}>
                    {item.category}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-[#002C5F] mb-3 group-hover:text-[#F9B233] transition-colors" style={{ fontWeight: 600, lineHeight: '1.4' }}>
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-[#002C5F] text-3xl mb-4" style={{ fontWeight: 700 }}>
              Fitur Unggulan Sistem
            </h2>
            <div className="w-20 h-1 bg-[#F9B233] mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto" style={{ fontWeight: 400 }}>
              INVESTRA menyediakan berbagai tools analitik untuk monitoring dan evaluasi ketimpangan investasi regional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <BarChart3 className="h-8 w-8 text-[#002C5F]" />
              </div>
              <h3 className="text-[#002C5F] mb-3" style={{ fontWeight: 600 }}>
                Analisis PCA
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
                Principal Component Analysis untuk identifikasi faktor dominan ketimpangan ekonomi regional
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <TrendingUp className="h-8 w-8 text-[#002C5F]" />
              </div>
              <h3 className="text-[#002C5F] mb-3" style={{ fontWeight: 600 }}>
                K-Means Clustering
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
                Klasifikasi 34 provinsi menjadi 3 cluster berdasarkan tingkat investasi dan pembangunan
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <MapPin className="h-8 w-8 text-[#002C5F]" />
              </div>
              <h3 className="text-[#002C5F] mb-3" style={{ fontWeight: 600 }}>
                Peta Interaktif
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
                Visualisasi geografis distribusi cluster investasi dengan kode warna untuk setiap provinsi
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <FileText className="h-8 w-8 text-[#002C5F]" />
              </div>
              <h3 className="text-[#002C5F] mb-3" style={{ fontWeight: 600 }}>
                Rekomendasi Kebijakan
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
                Strategi pembangunan spesifik untuk setiap cluster dan provinsi berbasis analisis data
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <BarChart3 className="h-8 w-8 text-[#002C5F]" />
              </div>
              <h3 className="text-[#002C5F] mb-3" style={{ fontWeight: 600 }}>
                Dashboard Real-time
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
                Monitoring metrik kunci ketimpangan investasi dengan visualisasi grafik yang interaktif
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                <FileText className="h-8 w-8 text-[#002C5F]" />
              </div>
              <h3 className="text-[#002C5F] mb-3" style={{ fontWeight: 600 }}>
                Laporan PDF
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed" style={{ fontWeight: 400 }}>
                Export laporan komprehensif dalam format PDF untuk disebarluaskan ke pemangku kepentingan
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#002C5F] to-[#003D7A] py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl mb-4" style={{ fontWeight: 700 }}>
            Akses Sistem INVESTRA Sekarang
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto" style={{ fontWeight: 400 }}>
            Login untuk menggunakan seluruh fitur analisis dan dashboard monitoring ketimpangan investasi regional
          </p>
          <Button 
            onClick={onLogin}
            size="lg"
            className="bg-[#F9B233] hover:bg-[#E5A200] text-[#002C5F] gap-2"
            style={{ fontWeight: 700 }}
          >
            <User className="h-5 w-5" />
            LOGIN SISTEM
          </Button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12">
                  <GarudaEmblem />
                </div>
                <div>
                  <div className="text-lg" style={{ fontWeight: 700 }}>INVESTRA</div>
                  <div className="text-xs text-gray-400" style={{ fontWeight: 400 }}>Investment Analytics</div>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed" style={{ fontWeight: 400 }}>
                Sistem Analisis Ketimpangan Distribusi Investasi Antar Wilayah di Indonesia
              </p>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontWeight: 700 }}>NAVIGASI</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Beranda</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Tentang</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Analisis</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontWeight: 700 }}>TAUTAN</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Bappenas</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>BPS</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>BKPM</a></li>
                <li><a href="#" className="hover:text-white transition-colors" style={{ fontWeight: 400 }}>Kemenkeu</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4" style={{ fontWeight: 700 }}>KONTAK</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span style={{ fontWeight: 400 }}>Jl. Taman Suropati No.2, Jakarta Pusat 10310</span>
                </li>
                <li style={{ fontWeight: 400 }}>Email: investra@bappenas.go.id</li>
                <li style={{ fontWeight: 400 }}>Tel: +62 21 3193 6207</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-400" style={{ fontWeight: 400 }}>
                © 2024 INVESTRA - Kementerian PPN/Bappenas. Hak Cipta Dilindungi Undang-Undang.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
