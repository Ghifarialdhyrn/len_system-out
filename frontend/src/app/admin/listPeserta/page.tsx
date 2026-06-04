"use client";

import { useEffect, useState } from "react";
import AdminGuard from "@/components/AdminGuard";
import AdminNavbar from "@/components/ui/AdminNavbar";
import AdminSidebar from "@/components/ui/AdminSidebar";
import {
  deletePeserta,
  getPesertaList,
} from "@/services/pesertaService";
import { PesertaMagang } from "@/types/peserta";
import Swal from "sweetalert2";
import ParticipantHeader from "@/components/admin/participants/ParticipantHeader";
import ParticipantStats from "@/components/admin/participants/ParticipantStats";
import ParticipantFilter from "@/components/admin/participants/ParticipantFilter";
import ParticipantTable from "@/components/admin/participants/ParticipantTable";
import ParticipantPagination from "@/components/admin/participants/ParticipantPagination";
import SelectedBar from "@/components/admin/participants/SelectedBar";
import AddParticipantModal from "@/components/admin/participants/AddParticipantModal";
import ParticipantFooter from "@/components/admin/participants/ParticipantFooter";
import { PaginatedPeserta } from "@/components/admin/participants/types";
import { getPesertaStatus } from "@/components/admin/participants/pesertaStatus";

export default function PesertaPage() {
  const [peserta, setPeserta] = useState<PesertaMagang[]>([]);
  const [pagination, setPagination] = useState<PaginatedPeserta | null>(null);
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);

  const isAllSelected =
    peserta.length > 0 && selected.length === peserta.length;

  useEffect(() => {
    fetchPeserta();
  }, [page]);

  async function fetchPeserta() {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await getPesertaList({ page, search });
      const paginated = response.data as PaginatedPeserta;

      setPeserta(paginated.data);
      setPagination(paginated);
      setSelected([]);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Gagal mengambil data peserta."
      );
    } finally {
      setLoading(false);
    }
  }

  function handleSearchSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (page === 1) {
      fetchPeserta();
    } else {
      setPage(1);
    }
  }

  function resetFilter() {
    setSearch("");
    setPage(1);

    setTimeout(() => {
      fetchPeserta();
    }, 0);
  }

  function toggleSelectAll() {
    if (isAllSelected) {
      setSelected([]);
    } else {
      setSelected(peserta.map((item) => item.id));
    }
  }

  function toggleSelect(id: number) {
    setSelected((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  }

  async function handleDeletePeserta(id: number, nama: string) {
    const result = await Swal.fire({
      title: "Hapus Peserta?",
      html: `
        <p>Peserta <b>${nama}</b> akan dihapus.</p>
        <p style="margin-top:8px;color:#ba1a1a">
          Data administrasi dan sertifikat juga akan terhapus.
        </p>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, Hapus",
      cancelButtonText: "Batal",
      confirmButtonColor: "#ba1a1a",
      cancelButtonColor: "#6b7280",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    try {
      await deletePeserta(id);

      await Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Peserta berhasil dihapus.",
        timer: 1500,
        showConfirmButton: false,
      });

      fetchPeserta();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text:
          error instanceof Error ? error.message : "Gagal menghapus peserta.",
      });
    }
  }

  const totalAktif = peserta.filter(
    (item) => getPesertaStatus(item) === "Aktif"
  ).length;

  const totalBelumLengkap = peserta.filter(
    (item) => getPesertaStatus(item) === "Belum Lengkap"
  ).length;

  const totalSelesai = peserta.filter(
    (item) => getPesertaStatus(item) === "Selesai"
  ).length;

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <AdminGuard>
      <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] font-sans overflow-hidden">
         <AdminNavbar onOpenSidebar={() => setMobileSidebarOpen(true)} />

        <div className="flex h-[calc(100vh-64px)] overflow-hidden pt-16">
          <AdminSidebar
                  mobileOpen={mobileSidebarOpen}
                  setMobileOpen={setMobileSidebarOpen}
                />

          <main className="flex-1 ml-0 md:ml-[260px] overflow-y-auto bg-[#f9f9ff] pt-4">
            <div className="max-w-[1440px] mx-auto px-6 pb-8">
              <ParticipantHeader onAdd={() => setShowAddModal(true)} />

              <ParticipantStats
                total={pagination?.total || 0}
                totalAktif={totalAktif}
                totalBelumLengkap={totalBelumLengkap}
                totalSelesai={totalSelesai}
              />

              <div className="bg-white border border-[#c1c7d2] rounded-xl shadow-sm overflow-hidden mb-6">
                <ParticipantFilter
                  search={search}
                  onSearchChange={setSearch}
                  onSubmit={handleSearchSubmit}
                  onReset={resetFilter}
                />

                <ParticipantTable
                  peserta={peserta}
                  loading={loading}
                  errorMessage={errorMessage}
                  selected={selected}
                  isAllSelected={isAllSelected}
                  onSelectAll={toggleSelectAll}
                  onSelect={toggleSelect}
                  onDelete={handleDeletePeserta}
                />

                {!loading && !errorMessage && (
                  <ParticipantPagination
                    pagination={pagination}
                    page={page}
                    onPageChange={setPage}
                  />
                )}
              </div>
            </div>

            <SelectedBar
              selectedCount={selected.length}
              onClear={() => setSelected([])}
            />

            {showAddModal && (
              <AddParticipantModal
                onClose={() => setShowAddModal(false)}
                onSuccess={() => {
                  setShowAddModal(false);
                  setPage(1);
                  fetchPeserta();
                }}
              />
            )}

            <ParticipantFooter />
          </main>
        </div>
      </div>
    </AdminGuard>
  );
}