"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import AdminGuard from "@/components/AdminGuard";
import AdminNavbar from "@/components/ui/AdminNavbar";
import AdminSidebar from "@/components/ui/AdminSidebar";
import {
  getPesertaDetail,
  updateAdministrasi,
} from "@/services/pesertaService";
import { PesertaMagang } from "@/types/peserta";
import DetailHeader from "@/components/admin/participantDetail/DetailHeader";
import ProfileCard from "@/components/admin/participantDetail/ProfileCard";
import ProgramSchedule from "@/components/admin/participantDetail/ProgramSchedule";
import AdministrationChecklist from "@/components/admin/participantDetail/AdministrationChecklist";
import CertificateSection from "@/components/admin/participantDetail/CertificateSection";
import StatusHistory from "@/components/admin/participantDetail/StatusHistory";
import EditProfileModal from "@/components/admin/participantDetail/EditProfileModal";
import DetailFooter from "@/components/admin/participantDetail/DetailFooter";

export default function ParticipantDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const [peserta, setPeserta] = useState<PesertaMagang | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showEditModal, setShowEditModal] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  useEffect(() => {
    fetchDetail();
  }, [id]);

  async function fetchDetail() {
    try {
      setLoading(true);
      setErrorMessage("");

      const response = await getPesertaDetail(id);
      setPeserta(response.data);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Gagal mengambil detail peserta.",
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleToggleAdministrasi(
    key:
      | "laporan_akhir"
      | "absensi"
      | "penilaian_pembimbing"
      | "pengembalian_idcard"
      | "pengembalian_aset",
  ) {
    if (!peserta) return;

    const adm = peserta.administrasi;

    const payload = {
      laporan_akhir: adm?.laporan_akhir ?? false,
      absensi: adm?.absensi ?? false,
      penilaian_pembimbing: adm?.penilaian_pembimbing ?? false,
      pengembalian_idcard: adm?.pengembalian_idcard ?? false,
      pengembalian_aset: adm?.pengembalian_aset ?? false,
      catatan: adm?.catatan ?? null,
      [key]: !(adm?.[key] ?? false),
    };

    try {
      setSaving(true);

      const response = await updateAdministrasi(peserta.id, payload);
      setPeserta(response.data);
    } catch (error) {
      alert(
        error instanceof Error
          ? error.message
          : "Gagal memperbarui administrasi.",
      );
    } finally {
      setSaving(false);
    }
  }

  const checklist = [
    {
      key: "laporan_akhir" as const,
      title: "Laporan Akhir",
      description: "Peserta sudah menyerahkan laporan akhir magang.",
      checked: peserta?.administrasi?.laporan_akhir ?? false,
    },
    {
      key: "absensi" as const,
      title: "Absensi",
      description: "Rekap absensi peserta sudah lengkap.",
      checked: peserta?.administrasi?.absensi ?? false,
    },
    {
      key: "penilaian_pembimbing" as const,
      title: "Penilaian Pembimbing",
      description: "Pembimbing sudah memberikan penilaian akhir.",
      checked: peserta?.administrasi?.penilaian_pembimbing ?? false,
    },
    {
      key: "pengembalian_idcard" as const,
      title: "Pengembalian ID Card",
      description: "ID card peserta sudah dikembalikan.",
      checked: peserta?.administrasi?.pengembalian_idcard ?? false,
    },
    {
      key: "pengembalian_aset" as const,
      title: "Pengembalian Aset",
      description: "Aset perusahaan sudah dikembalikan.",
      checked: peserta?.administrasi?.pengembalian_aset ?? false,
    },
  ];

  const completedCount = checklist.filter((item) => item.checked).length;
  const isCompleted = completedCount === checklist.length;

  const initials =
    peserta?.nama
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "-";

  return (
    <AdminGuard>
      <div className="min-h-screen bg-[#f9f9ff] text-[#111c2d] font-sans">
        <AdminNavbar onOpenSidebar={() => setMobileSidebarOpen(true)} />

        <div className="flex pt-16 min-h-screen">
          <AdminSidebar
            mobileOpen={mobileSidebarOpen}
            setMobileOpen={setMobileSidebarOpen}
          />

          <main className="flex-1 md:ml-[260px] p-6 bg-[#f9f9ff]">
            <div className="max-w-[1200px] mx-auto">
              {loading && (
                <div className="bg-white border border-[#c1c7d2] rounded-xl p-8 text-center text-[#003e6f] font-semibold">
                  Memuat detail peserta...
                </div>
              )}

              {!loading && errorMessage && (
                <div className="bg-[#ffdad6] border border-[#ba1a1a]/20 text-[#93000a] rounded-xl p-6">
                  {errorMessage}
                </div>
              )}

              {!loading && peserta && (
                <>
                  <DetailHeader
                    peserta={peserta}
                    onEdit={() => setShowEditModal(true)}
                  />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-4 flex flex-col gap-6">
                      <ProfileCard
                        initials={initials}
                        nama={peserta.nama}
                        email={peserta.email || "-"}
                        noHp={peserta.no_hp || "-"}
                        instansi={peserta.instansi}
                        status={peserta.status_magang}
                      />

                      <ProgramSchedule
                        tanggalMulai={peserta.tanggal_mulai}
                        tanggalSelesai={peserta.tanggal_selesai}
                        progress={Math.round(
                          (completedCount / checklist.length) * 100,
                        )}
                      />
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-6">
                      <AdministrationChecklist
                        checklist={checklist}
                        saving={saving}
                        catatan={peserta.administrasi?.catatan}
                        completedCount={completedCount}
                        totalCount={checklist.length}
                        onToggle={handleToggleAdministrasi}
                      />

                      <CertificateSection
                        isCompleted={isCompleted}
                        noPeserta={peserta.no_peserta}
                        hasCertificate={!!peserta.sertifikat}
                      />

                      <StatusHistory peserta={peserta} />
                    </div>
                  </div>
                </>
              )}
            </div>

            {showEditModal && peserta && (
              <EditProfileModal
                peserta={peserta}
                onClose={() => setShowEditModal(false)}
                onSuccess={(updatedPeserta) => {
                  setPeserta(updatedPeserta);
                  setShowEditModal(false);
                }}
              />
            )}
          </main>
        </div>

        <DetailFooter />
      </div>
    </AdminGuard>
  );
}
