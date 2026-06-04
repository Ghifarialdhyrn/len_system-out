import { PesertaMagang } from "@/types/peserta";
import HistoryItem from "@/components/admin/participantDetail/HistoryItem";

export default function StatusHistory({
  peserta,
}: {
  peserta: PesertaMagang;
}) {
  return (
    <section className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-xl p-6 shadow-sm flex-1">
      <h3 className="text-lg font-semibold text-[#111c2d] mb-6">
        Status Update History
      </h3>

      <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4">
        <HistoryItem
          icon="person_add"
          title="Peserta Dibuat"
          meta={`Tanggal mulai: ${peserta.tanggal_mulai}`}
          description={`${peserta.nama} terdaftar sebagai peserta magang dari ${peserta.instansi}.`}
          active
        />

        <HistoryItem
          icon="assignment_turned_in"
          title="Status Administrasi"
          meta={`Status: ${
            peserta.administrasi
              ? "Data administrasi tersedia"
              : "Belum ada data"
          }`}
          description={
            peserta.administrasi?.catatan || "Tidak ada catatan admin."
          }
        />

        <HistoryItem
          icon="workspace_premium"
          title="Status Sertifikat"
          meta={peserta.sertifikat ? "Sertifikat tersedia" : "Belum tersedia"}
          description={
            peserta.sertifikat
              ? `Nomor sertifikat: ${peserta.sertifikat.nomor_sertifikat}`
              : "Sertifikat akan tersedia setelah administrasi lengkap."
          }
          last
        />
      </div>
    </section>
  );
}