import { PesertaStatus } from "@/components/admin/participants/types";

export default function StatusBadge({ status }: { status: PesertaStatus }) {
  const styles: Record<PesertaStatus, string> = {
    Aktif: "bg-green-100 text-green-800",
    "Belum Lengkap": "bg-[#ffdad6] text-[#93000a]",
    Selesai: "bg-[#d8e3fb] text-[#003e6f]",
  };

  const dotStyles: Record<PesertaStatus, string> = {
    Aktif: "bg-green-500",
    "Belum Lengkap": "bg-[#ba1a1a]",
    Selesai: "bg-[#003e6f]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${styles[status]}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full mr-1.5 ${dotStyles[status]}`}
      />
      {status}
    </span>
  );
}