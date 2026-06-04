import { PesertaMagang } from "@/types/peserta";

export type PaginatedPeserta = {
  data: PesertaMagang[];
  current_page: number;
  last_page: number;
  total: number;
  from: number | null;
  to: number | null;
};

export type PesertaStatus = "Aktif" | "Belum Lengkap" | "Selesai";  