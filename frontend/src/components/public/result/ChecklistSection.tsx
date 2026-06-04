import { AdministrasiMagang } from "@/types/peserta";

type ChecklistSectionProps = {
  administrasi?: AdministrasiMagang | null;
};

export default function ChecklistSection({
  administrasi,
}: ChecklistSectionProps) {
  const checklist = [
    {
      label: "Laporan Akhir",
      value: administrasi?.laporan_akhir,
    },
    {
      label: "Absensi",
      value: administrasi?.absensi,
    },
    {
      label: "Penilaian Pembimbing",
      value: administrasi?.penilaian_pembimbing,
    },
    {
      label: "Pengembalian ID Card",
      value: administrasi?.pengembalian_idcard,
    },
    {
      label: "Pengembalian Aset",
      value: administrasi?.pengembalian_aset,
    },
  ];

  return (
    <div className="p-6 bg-[#f0f3ff]">
      <h2 className="text-xl font-semibold text-[#111c2d] mb-4">
        Checklist Administrasi
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {checklist.map((item) => (
          <div
            key={item.label}
            className="bg-white border border-[#c1c7d2] rounded-xl p-4 flex items-center justify-between"
          >
            <span className="text-sm font-semibold text-[#111c2d]">
              {item.label}
            </span>

            <span
              className={`material-symbols-outlined ${
                item.value ? "text-green-600" : "text-[#ba1a1a]"
              }`}
            >
              {item.value ? "check_circle" : "cancel"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}