import { PesertaMagang } from "@/types/peserta";
import ParticipantRow from "@/components/admin/participants/ParticipantRow";

type ParticipantTableProps = {
  peserta: PesertaMagang[];
  loading: boolean;
  errorMessage: string;
  selected: number[];
  isAllSelected: boolean;
  onSelectAll: () => void;
  onSelect: (id: number) => void;
  onDelete: (id: number, nama: string) => void;
};

export default function ParticipantTable({
  peserta,
  loading,
  errorMessage,
  selected,
  isAllSelected,
  onSelectAll,
  onSelect,
  onDelete,
}: ParticipantTableProps) {
  if (loading) {
    return (
      <div className="p-8 text-center text-[#003e6f] font-semibold">
        Memuat data peserta...
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="p-8 text-center text-[#ba1a1a] font-semibold">
        {errorMessage}
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-[#f0f3ff] text-xs text-[#5c5f60] uppercase tracking-wider border-b border-[#c1c7d2]">
            <th className="px-6 py-4 font-semibold w-10">
              <input
                checked={isAllSelected}
                onChange={onSelectAll}
                className="rounded border-[#c1c7d2] text-[#003e6f]"
                type="checkbox"
              />
            </th>
            <th className="px-6 py-4 font-semibold">Name</th>
            <th className="px-6 py-4 font-semibold">Institution</th>
            <th className="px-6 py-4 font-semibold">Program Studi</th>
            <th className="px-6 py-4 font-semibold">Tanggal Selesai</th>
            <th className="px-6 py-4 font-semibold text-center">Status</th>
            <th className="px-6 py-4 font-semibold text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-[#c1c7d2]">
          {peserta.length > 0 ? (
            peserta.map((item) => (
              <ParticipantRow
                key={item.id}
                participant={item}
                checked={selected.includes(item.id)}
                onCheck={() => onSelect(item.id)}
                onDelete={() => onDelete(item.id, item.nama)}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={7}
                className="px-6 py-8 text-center text-sm text-[#727781]"
              >
                Data peserta tidak ditemukan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}