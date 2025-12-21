"use client";

import { User, Bell, LogOut } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { GarudaEmblem } from "./GarudaEmblem";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface TopNavProps {
  onLogout?: () => void;
}

export function TopNav({ onLogout }: TopNavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 z-50 shadow-sm">
      {/* Left: Government Emblem + Branding */}
      <div className="flex items-center gap-4">
        <GarudaEmblem size={64} />
        
        <div className="border-l-2 border-[#F9B233] pl-4">
          <div className="flex items-center gap-2">
            <h1 className="text-[#002C5F] text-xl font-bold leading-tight">
              INVESTRA
            </h1>
          </div>
          <p className="text-sm text-gray-600 mt-0.5 font-medium">
            Investment Analytics Indonesia
          </p>
        </div>
      </div>

      {/* Center: Dashboard Title */}
      <div className="hidden xl:block text-center">
        <div className="bg-gradient-to-r from-[#002C5F] to-[#003D7A] text-white px-6 py-2 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">
            Dashboard Analisis Ketimpangan Investasi
          </h2>
          <p className="text-xs opacity-90 mt-0.5">
            Sistem Monitoring PCA & K-Means Clustering
          </p>
        </div>
      </div>
      
      {/* Right: Controls */}
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button
          variant="ghost"
          size="icon"
          className="relative text-gray-600 hover:text-[#002C5F]"
        >
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-[#DC2626] text-white text-xs">
            3
          </Badge>
        </Button>
        
        {/* User Profile with Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-[#002C5F] text-white">
                  <User className="h-4 w-4" />
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm text-[#002C5F] font-semibold">Admin Dashboard</p>
                <p className="text-xs text-gray-500">INVESTRA</p>
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-semibold">Akun Saya</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="font-medium">
              <User className="mr-2 h-4 w-4" />
              <span>Profil</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={onLogout}
              className="text-red-600 focus:text-red-600 font-semibold"
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Keluar</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
