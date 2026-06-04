"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/AdminGuard";
import AdminNavbar from "@/components/ui/AdminNavbar";
import AdminSidebar from "@/components/ui/AdminSidebar";
import { getDashboard } from "@/services/pesertaService";
import DashboardHeader from "@/components/admin/dashboard/DashboardHeader";
import DashboardKpiCards from "@/components/admin/dashboard/DashboardKpiCards";
import ApplicationTrends from "@/components/admin/dashboard/ApplicationTrends";
import InternDistribution from "@/components/admin/dashboard/InternDistribution";
import RecentActivity from "@/components/admin/dashboard/RecentActivity";
import DashboardFooter from "@/components/admin/dashboard/DashboardFooter";
import { DashboardData, KpiCardItem } from "@/components/admin/dashboard/types";

export default function AdminDashboardPage() {
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [distributionPage, setDistributionPage] = useState(1);
  const distributionPerPage = 4;

  useEffect(() => {
    async function fetchDashboard() {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await getDashboard();

        setDashboard(response.data);
      } catch (error) {
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Gagal mengambil data dashboard.",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchDashboard();
  }, []);

  const maxTrendValue = Math.max(
    ...(dashboard?.application_trends?.map((item) => item.total) ?? [1]),
  );

  const chartData =
    dashboard?.application_trends?.map((item) => ({
      month: item.month,
      total: item.total,
      height: `${Math.max((item.total / maxTrendValue) * 100, 8)}%`,
      active: item.total === maxTrendValue,
    })) ?? [];

  const departments = [...(dashboard?.intern_distribution ?? [])].sort(
    (a, b) => b.total - a.total,
  );

  const totalDistributionPages = Math.ceil(
    departments.length / distributionPerPage,
  );

  const paginatedDepartments = departments.slice(
    (distributionPage - 1) * distributionPerPage,
    distributionPage * distributionPerPage,
  );

  const activities = dashboard?.recent_activity ?? [];

  const kpiCards: KpiCardItem[] = [
    {
      icon: "groups",
      label: "Total Peserta",
      value: dashboard?.total_peserta ?? 0,
      note: "Data dari database",
      noteIcon: "database",
      danger: false,
    },
    {
      icon: "rocket_launch",
      label: "Peserta Aktif",
      value: dashboard?.peserta_aktif ?? 0,
      note: "Status aktif",
      noteIcon: "verified",
      danger: false,
    },
    {
      icon: "verified",
      label: "Alumni Magang",
      value: dashboard?.alumni ?? 0,
      note: "Status selesai",
      noteIcon: "workspace_premium",
      danger: false,
    },
    {
      icon: "pending_actions",
      label: "Belum Lengkap",
      value: dashboard?.belum_lengkap ?? 0,
      note: "Perlu ditindaklanjuti",
      noteIcon: "priority_high",
      danger: true,
    },
  ];

  return (
    <AdminGuard>
      <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] font-sans">
        <AdminNavbar onOpenSidebar={() => setMobileSidebarOpen(true)} />

        <AdminSidebar
          mobileOpen={mobileSidebarOpen}
          setMobileOpen={setMobileSidebarOpen}
        />

        <main className="md:ml-[260px] pt-24 px-6 pb-12">
          <div className="max-w-[1440px] mx-auto">
            <DashboardHeader />

            {loading && (
              <div className="bg-white border border-[#c1c7d2] rounded-xl p-8 text-center text-[#003e6f] font-semibold">
                Memuat data dashboard...
              </div>
            )}

            {!loading && errorMessage && (
              <div className="bg-[#ffdad6] border border-[#ba1a1a]/20 text-[#93000a] rounded-xl p-6 mb-8">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="material-symbols-outlined">warning</span>
                  {errorMessage}
                </div>
              </div>
            )}

            {!loading && !errorMessage && (
              <>
                <DashboardKpiCards cards={kpiCards} />

                <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <ApplicationTrends chartData={chartData} />

                  <InternDistribution
                    departments={departments}
                    paginatedDepartments={paginatedDepartments}
                    distributionPage={distributionPage}
                    distributionPerPage={distributionPerPage}
                    totalDistributionPages={totalDistributionPages}
                    onPageChange={setDistributionPage}
                  />

                  <RecentActivity activities={activities} />
                </section>
              </>
            )}
          </div>
        </main>

        <DashboardFooter />
      </div>
    </AdminGuard>
  );
}
