"use client";
import Navbar from "@/core/components/navbar";
import Sidebar from "@/core/components/sidebar";
import DashboardContent from "@/core/components/lists/dashboard-content";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <DashboardContent />
    </main>
  );
}
