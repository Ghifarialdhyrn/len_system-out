import {
  DashboardResponse,
  PesertaMagang,
  SearchPesertaResponse,
} from "@/types/peserta";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

function getToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("adminToken");
}

async function apiFetch<T>(
  endpoint: string,
  options?: RequestInit,
  auth = false,
): Promise<T> {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_API_URL belum diset di .env.local");
  }

  const token = getToken();

  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(auth && token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options?.headers || {}),
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Terjadi kesalahan request API");
  }

  return data;
}

export async function searchPeserta(
  noPeserta: string,
): Promise<SearchPesertaResponse> {
  return apiFetch<SearchPesertaResponse>(
    `/search/${encodeURIComponent(noPeserta)}`,
  );
}

export async function getDashboard(): Promise<DashboardResponse> {
  return apiFetch<DashboardResponse>("/admin/dashboard", undefined, true);
}

export async function getPesertaList(params?: {
  page?: number;
  search?: string;
}): Promise<PaginatedPesertaResponse> {
  const query = new URLSearchParams();

  if (params?.page) query.set("page", String(params.page));
  if (params?.search) query.set("search", params.search);

  const endpoint = `/admin/peserta${
    query.toString() ? `?${query.toString()}` : ""
  }`;

  return apiFetch<PaginatedPesertaResponse>(endpoint, undefined, true);
}

export async function getPesertaDetail(
  id: string | number,
): Promise<PesertaDetailResponse> {
  return apiFetch<PesertaDetailResponse>(
    `/admin/peserta/${id}`,
    undefined,
    true,
  );
}

export async function createPeserta(payload: {
  no_peserta: string;
  nama: string;
  email?: string | null;
  no_hp?: string | null;
  instansi: string;
  program_studi?: string | null;
  tanggal_mulai: string;
  tanggal_selesai: string;
  status_magang: "aktif" | "selesai";
}) {
  return apiFetch(
    "/admin/peserta",
    {
      method: "POST",
      body: JSON.stringify(payload),
    },
    true,
  );
}

export async function updateAdministrasi(
  id: string | number,
  payload: {
    laporan_akhir: boolean;
    absensi: boolean;
    penilaian_pembimbing: boolean;
    pengembalian_idcard: boolean;
    pengembalian_aset: boolean;
    catatan?: string | null;
  },
): Promise<UpdateAdministrasiResponse> {
  return apiFetch<UpdateAdministrasiResponse>(
    `/admin/peserta/${id}/administrasi`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
    true,
  );
}

export type UpdatePesertaResponse = {
  message: string;
  data: PesertaMagang;
};

export async function updatePeserta(
  id: string | number,
  payload: {
    no_peserta: string;
    nama: string;
    email?: string | null;
    no_hp?: string | null;
    instansi: string;
    program_studi?: string | null;
    tanggal_mulai: string;
    tanggal_selesai: string;
    status_magang: "aktif" | "selesai";
  },
): Promise<UpdatePesertaResponse> {
  return apiFetch<UpdatePesertaResponse>(
    `/admin/peserta/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(payload),
    },
    true,
  );
}

export async function deletePeserta(id: string | number) {
  return apiFetch(
    `/admin/peserta/${id}`,
    {
      method: "DELETE",
    },
    true,
  );
}

export function getSertifikatDownloadUrl(noPeserta: string): string {
  return `${API_URL}/sertifikat/${encodeURIComponent(noPeserta)}/download`;
}

export type PaginatedPesertaResponse = {
  data: {
    data: PesertaMagang[];
    current_page: number;
    last_page: number;
    total: number;
    from: number | null;
    to: number | null;
  };
};

export type PesertaDetailResponse = {
  data: PesertaMagang;
};

export type UpdateAdministrasiResponse = {
  message: string;
  data: PesertaMagang;
};
