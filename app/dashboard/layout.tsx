"use client";

import { TopNav } from "@/components/TopNav";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";
import { useRouter, usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  
  const handleLogout = () => {
    router.push("/");
  };

  // Extract current view from pathname
  const getActiveView = () => {
    if (pathname === "/dashboard") return "dashboard";
    const parts = pathname.split("/");
    return parts[parts.length - 1] || "dashboard";
  };

  const handleViewChange = (view: string) => {
    if (view === "dashboard") {
      router.push("/dashboard");
    } else {
      router.push(`/dashboard/${view}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <TopNav onLogout={handleLogout} />
      <div className="flex">
        <Sidebar 
          activeView={getActiveView()} 
          setActiveView={handleViewChange}
        />
        <main className="flex-1 ml-72 mt-20 p-8">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
}
