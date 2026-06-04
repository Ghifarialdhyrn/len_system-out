import ChecklistItem from "@/components/admin/participantDetail/ChecklistItem";

export type ChecklistKey =
  | "laporan_akhir"
  | "absensi"
  | "penilaian_pembimbing"
  | "pengembalian_idcard"
  | "pengembalian_aset";

export type ChecklistData = {
  key: ChecklistKey;
  title: string;
  description: string;
  checked: boolean;
};

type AdministrationChecklistProps = {
  checklist: ChecklistData[];
  saving: boolean;
  catatan?: string | null;
  completedCount: number;
  totalCount: number;
  onToggle: (key: ChecklistKey) => void;
};

export default function AdministrationChecklist({
  checklist,
  saving,
  catatan,
  completedCount,
  totalCount,
  onToggle,
}: AdministrationChecklistProps) {
  return (
    <section className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-semibold text-[#111c2d]">
            Administration Checklist
          </h3>

          {saving && (
            <p className="text-xs text-[#003e6f] mt-1">
              Menyimpan perubahan...
            </p>
          )}
        </div>

        <span className="text-[#5c5f60] text-xs font-semibold">
          {completedCount} of {totalCount} Completed
        </span>
      </div>

      <div className="space-y-2">
        {checklist.map((item) => (
          <ChecklistItem
            key={item.key}
            title={item.title}
            description={item.description}
            checked={item.checked}
            disabled={saving}
            onChange={() => onToggle(item.key)}
          />
        ))}
      </div>

      {catatan && (
        <div className="mt-4 bg-[#f0f3ff] border border-[#c1c7d2] rounded-xl p-4">
          <p className="text-xs font-semibold text-[#003e6f] mb-1">
            Catatan Admin
          </p>
          <p className="text-sm text-[#414750]">{catatan}</p>
        </div>
      )}
    </section>
  );
}