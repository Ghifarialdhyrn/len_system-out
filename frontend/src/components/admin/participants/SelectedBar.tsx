type SelectedBarProps = {
  selectedCount: number;
  onClear: () => void;
};

export default function SelectedBar({
  selectedCount,
  onClear,
}: SelectedBarProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#263143] text-[#ecf1ff] px-6 py-3 rounded-full shadow-xl flex items-center gap-6 z-50 border border-white/10">
      <span className="text-xs font-bold">
        {selectedCount} Participants Selected
      </span>

      <button onClick={onClear} className="p-1 hover:bg-white/20 rounded-full">
        <span className="material-symbols-outlined text-[20px]">close</span>
      </button>
    </div>
  );
}