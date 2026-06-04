type HistoryItemProps = {
  icon: string;
  title: string;
  meta: string;
  description?: string;
  active?: boolean;
  last?: boolean;
};

export default function HistoryItem({
  icon,
  title,
  meta,
  description,
  active = false,
  last = false,
}: HistoryItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
            active
              ? "bg-[#005696] text-[#a5cbff]"
              : "bg-[#d8e3fb] text-[#414750]"
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">{icon}</span>
        </div>

        {!last && <div className="w-[2px] h-full bg-[#c1c7d2] mt-2" />}
      </div>

      <div className={last ? "" : "pb-6"}>
        <p className="text-sm font-bold text-[#111c2d]">{title}</p>
        <p className="text-xs text-[#414750] mb-2">{meta}</p>
        {description && <p className="text-sm text-[#111c2d]">{description}</p>}
      </div>
    </div>
  );
}