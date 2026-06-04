import { PaginatedPeserta } from "@/components/admin/participants/types";

type ParticipantPaginationProps = {
  pagination: PaginatedPeserta | null;
  page: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

export default function ParticipantPagination({
  pagination,
  page,
  onPageChange,
}: ParticipantPaginationProps) {
  return (
    <div className="px-6 py-4 border-t border-[#c1c7d2] flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#f0f3ff]">
      <div className="text-xs text-[#5c5f60]">
        Showing{" "}
        <span className="font-bold text-[#111c2d]">
          {pagination?.from || 0}-{pagination?.to || 0}
        </span>{" "}
        of{" "}
        <span className="font-bold text-[#111c2d]">
          {pagination?.total || 0}
        </span>{" "}
        entries
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange((current) => Math.max(current - 1, 1))}
          disabled={page === 1}
          className="p-2 border border-[#c1c7d2] rounded-lg disabled:opacity-30 hover:bg-[#e7eeff] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_left
          </span>
        </button>

        <span className="text-xs font-semibold text-[#414750]">
          Page {pagination?.current_page || 1} of {pagination?.last_page || 1}
        </span>

        <button
          onClick={() =>
            onPageChange((current) =>
              Math.min(current + 1, pagination?.last_page || 1)
            )
          }
          disabled={page === pagination?.last_page}
          className="p-2 border border-[#c1c7d2] rounded-lg disabled:opacity-30 hover:bg-[#e7eeff] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">
            chevron_right
          </span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-xs text-[#5c5f60]">Go to page:</span>

        <input
          className="w-16 px-2 py-1 border border-[#c1c7d2] rounded-lg text-sm focus:outline-none focus:border-[#003e6f] bg-white"
          type="number"
          min={1}
          max={pagination?.last_page || 1}
          value={page}
          onChange={(e) => {
            const value = Number(e.target.value);
            if (!value) return;
            onPageChange(value);
          }}
        />
      </div>
    </div>
  );
}