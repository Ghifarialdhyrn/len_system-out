import Link from "next/link";
import { PesertaMagang } from "@/types/peserta";
import StatusBadge from "@/components/admin/participants/StatusBadge";
import ActionButton from "@/components/admin/participants/ActionButton";
import { getPesertaStatus } from "@/components/admin/participants/pesertaStatus";

type ParticipantRowProps = {
  participant: PesertaMagang;
  checked: boolean;
  onCheck: () => void;
  onDelete: () => void;
};

export default function ParticipantRow({
  participant,
  checked,
  onCheck,
  onDelete,
}: ParticipantRowProps) {
  const initials = participant.nama
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const status = getPesertaStatus(participant);

  return (
    <tr className="hover:bg-[#e7eeff] transition-colors duration-150">
      <td className="px-6 py-3">
        <input
          checked={checked}
          onChange={onCheck}
          className="rounded border-[#c1c7d2] text-[#003e6f]"
          type="checkbox"
        />
      </td>

      <td className="px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#d2e4ff] text-[#003e6f] flex items-center justify-center font-bold text-xs">
            {initials}
          </div>

          <div>
            <div className="text-sm font-semibold text-[#111c2d]">
              {participant.nama}
            </div>
            <div className="text-xs text-[#5c5f60]">
              ID: {participant.no_peserta}
            </div>
          </div>
        </div>
      </td>

      <td className="px-6 py-3 text-sm text-[#414750]">
        {participant.instansi}
      </td>

      <td className="px-6 py-3 text-sm text-[#414750]">
        {participant.program_studi || "-"}
      </td>

      <td className="px-6 py-3 text-sm text-[#414750]">
        {participant.tanggal_selesai}
      </td>

      <td className="px-6 py-3 text-center">
        <StatusBadge status={status} />
      </td>

      <td className="px-6 py-3 text-right">
        <div className="flex items-center justify-end gap-1">
          <Link
            href={`/admin/peserta/${participant.id}`}
            className="p-1.5 rounded-md text-[#414750] hover:bg-[#d8e3fb] transition-colors"
            title="View Details"
          >
            <span className="material-symbols-outlined text-[18px]">
              visibility
            </span>
          </Link>

          <Link
            href={`/admin/peserta/${participant.id}`}
            className="p-1.5 rounded-md text-[#414750] hover:bg-[#d8e3fb] transition-colors"
            title="Edit"
          >
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </Link>

          <ActionButton
            icon="delete"
            title="Delete"
            danger
            onClick={onDelete}
          />
        </div>
      </td>
    </tr>
  );
}