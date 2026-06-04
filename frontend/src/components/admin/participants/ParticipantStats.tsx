import StatCard from "@/components/admin/participants/StatCard";

type ParticipantStatsProps = {
  total: number;
  totalAktif: number;
  totalBelumLengkap: number;
  totalSelesai: number;
};

export default function ParticipantStats({
  total,
  totalAktif,
  totalBelumLengkap,
  totalSelesai,
}: ParticipantStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <StatCard
        label="Total Peserta"
        value={total.toLocaleString("id-ID")}
      />
      <StatCard
        label="Aktif di Halaman Ini"
        value={String(totalAktif)}
        progress
      />
      <StatCard
        label="Belum Lengkap"
        value={String(totalBelumLengkap)}
        danger
      />
      <StatCard
        label="Selesai di Halaman Ini"
        value={String(totalSelesai)}
        verified
      />
    </div>
  );
}