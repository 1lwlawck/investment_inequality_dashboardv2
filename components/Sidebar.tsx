"use client";

import { 
  LayoutDashboard, 
  Upload, 
  Network, 
  GitBranch, 
  BarChart3, 
  FileText, 
  Info 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard Utama",
    icon: LayoutDashboard,
    description: "Ringkasan & Metrik"
  },
  {
    id: "upload",
    label: "Unggah Data",
    icon: Upload,
    description: "Import Dataset"
  },
  {
    id: "pca",
    label: "Analisis PCA",
    icon: Network,
    description: "Principal Component"
  },
  {
    id: "clustering",
    label: "K-Means Clustering",
    icon: GitBranch,
    description: "Klasifikasi Wilayah"
  },
  {
    id: "visualization",
    label: "Visualisasi Data",
    icon: BarChart3,
    description: "Grafik & Peta"
  },
  {
    id: "policy",
    label: "Rekomendasi Kebijakan",
    icon: FileText,
    description: "Strategi Regional"
  },
  {
    id: "about",
    label: "Tentang Sistem",
    icon: Info,
    description: "Informasi & Metodologi"
  },
];

export function Sidebar({ activeView, setActiveView }: SidebarProps) {
  return (
    <aside className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-72 bg-white border-r border-gray-200 shadow-sm z-40">
      <div className="p-4">
        {/* Sidebar Header */}
        <div className="bg-gradient-to-br from-[#002C5F] to-[#003D7A] text-white p-4 rounded-lg mb-4 shadow-md">
          <h3 className="text-sm opacity-90 font-semibold">Navigasi Menu</h3>
          <p className="text-xs opacity-75 mt-1">Pilih modul analisis</p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={cn(
                  "w-full flex items-start gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                  isActive 
                    ? "bg-gradient-to-r from-[#002C5F] to-[#003D7A] text-white shadow-md" 
                    : "hover:bg-[#F9B233]/10 hover:border hover:border-[#F9B233]/30 group"
                )}
              >
                <Icon 
                  className={cn(
                    "h-5 w-5 flex-shrink-0 mt-0.5 transition-colors",
                    isActive ? "text-[#F9B233]" : "text-[#002C5F] group-hover:text-[#F9B233]"
                  )} 
                />
                <div className="flex-1 text-left">
                  <div className={cn(
                    "text-sm transition-colors",
                    isActive ? "text-white font-semibold" : "text-[#002C5F] group-hover:text-[#002C5F] font-medium"
                  )}>
                    {item.label}
                  </div>
                  <div className={cn(
                    "text-xs transition-colors mt-0.5",
                    isActive ? "text-gray-200" : "text-gray-600 group-hover:text-gray-700"
                  )}>
                    {item.description}
                  </div>
                </div>
              </button>
            );
          })}
        </nav>

        {/* Footer Info */}
        <div className="mt-6 p-4 bg-gradient-to-br from-amber-50 to-yellow-50 border border-[#F9B233]/30 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-700 font-semibold">Status: Aktif</span>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Sistem analisis regional berbasis PCA dan K-Means untuk monitoring ketimpangan investasi antar provinsi
          </p>
        </div>
      </div>
    </aside>
  );
}
