type ParticipantFilterProps = {
  search: string;
  onSearchChange: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
};

export default function ParticipantFilter({
  search,
  onSearchChange,
  onSubmit,
  onReset,
}: ParticipantFilterProps) {
  return (
    <form
      onSubmit={onSubmit}
      className="p-4 bg-[#f0f3ff] border-b border-[#c1c7d2] flex flex-wrap items-center gap-4"
    >
      <div className="flex-1 min-w-[240px]">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#727781] text-[20px]">
            filter_list
          </span>

          <input
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-[#c1c7d2] rounded-lg text-sm focus:ring-2 focus:ring-[#003e6f]/10 focus:border-[#003e6f] bg-white outline-none"
            placeholder="Cari nama, nomor peserta, atau instansi..."
            type="text"
          />
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-[#003e6f] text-white rounded-lg text-xs font-semibold hover:bg-[#005696]"
      >
        Search
      </button>

      <button
        type="button"
        onClick={onReset}
        className="p-2 text-[#414750] hover:bg-[#d8e3fb] rounded-lg transition-colors"
        title="Reset Filters"
      >
        <span className="material-symbols-outlined">restart_alt</span>
      </button>
    </form>
  );
}