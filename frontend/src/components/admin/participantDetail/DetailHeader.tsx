import { PesertaMagang } from "@/types/peserta";

type DetailHeaderProps = {
  peserta: PesertaMagang;
  onEdit: () => void;
};

export default function DetailHeader({ peserta, onEdit }: DetailHeaderProps) {
  return (
    <div className="mb-8 flex flex-col md:flex-row justify-between md:items-end gap-4">
      <div>
        <nav className="flex items-center gap-1 text-[#5c5f60] text-xs font-semibold mb-2">
          <span>Participants</span>
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
          <span className="text-[#003e6f]">
            {peserta.program_studi || "Detail Peserta"}
          </span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-[#111c2d]">
          {peserta.nama}
        </h1>

        <p className="text-sm text-[#414750]">
          Nomor Peserta: {peserta.no_peserta} • {peserta.program_studi || "-"}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          type="button"
          onClick={onEdit}
          className="px-6 py-2 border border-[#727781] text-[#003e6f] rounded-full text-xs font-semibold hover:bg-[#e7eeff] transition-colors"
        >
          Edit Profile
        </button>

        <button className="px-6 py-2 bg-[#003e6f] text-white rounded-full text-xs font-semibold shadow-sm hover:shadow-md transition-all">
          Actions
        </button>
      </div>
    </div>
  );
}