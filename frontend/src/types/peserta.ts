export type AdministrasiMagang = {
  id: number;
  peserta_id: number;
  laporan_akhir: boolean;
  absensi: boolean;
  penilaian_pembimbing: boolean;
  pengembalian_idcard: boolean;
  pengembalian_aset: boolean;
  catatan: string | null;
};

export type Sertifikat = {
  id: number;
  peserta_id: number;
  nomor_sertifikat: string;
  file_sertifikat: string;
  tanggal_terbit: string;
};

export type PesertaMagang = {
  id: number;
  no_peserta: string;
  nama: string;
  email: string | null;
  no_hp: string | null;
  instansi: string;
  program_studi: string | null;
  tanggal_mulai: string;
  tanggal_selesai: string;
  status_magang: "aktif" | "selesai";
  administrasi?: AdministrasiMagang | null;
  sertifikat?: Sertifikat | null;
};

export type SearchPesertaResponse = {
  data: PesertaMagang;
  administrasi_lengkap: boolean;
  sertifikat_tersedia: boolean;
  download_url?: string | null;
};

export type DashboardResponse = {
  data: {
    total_peserta: number;
    peserta_aktif: number;
    alumni: number;
    belum_lengkap: number;
    application_trends: {
      month: string;
      total: number;
    }[];
    intern_distribution: {
      name: string;
      total: number;
      percentage: number;
    }[];
    recent_activity: {
      action: string;
      user: string;
      department: string;
      date: string;
      status: string;
    }[];
  };
};