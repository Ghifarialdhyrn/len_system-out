import { PesertaMagang } from "@/types/peserta";
import { PesertaStatus } from "@/components/admin/participants/types";

export function isAdministrasiLengkap(peserta: PesertaMagang) {
  const adm = peserta.administrasi;

  if (!adm) return false;

  return (
    adm.laporan_akhir &&
    adm.absensi &&
    adm.penilaian_pembimbing &&
    adm.pengembalian_idcard &&
    adm.pengembalian_aset
  );
}

export function getPesertaStatus(peserta: PesertaMagang): PesertaStatus {
  const administrasiLengkap = isAdministrasiLengkap(peserta);
  const tanggalSelesai = new Date(peserta.tanggal_selesai);
  const today = new Date();

  const diffTime = tanggalSelesai.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const mendekatiSelesai = diffDays <= 14;

  if (peserta.status_magang === "selesai" && administrasiLengkap) {
    return "Selesai";
  }

  if (!administrasiLengkap && (mendekatiSelesai || tanggalSelesai <= today)) {
    return "Belum Lengkap";
  }

  return "Aktif";
}