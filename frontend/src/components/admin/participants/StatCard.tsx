type StatCardProps = {
  label: string;
  value: string;
  note?: string;
  progress?: boolean;
  danger?: boolean;
  verified?: boolean;
};

export default function StatCard({
  label,
  value,
  note,
  progress,
  danger,
  verified,
}: StatCardProps) {
  return (
    <div className="bg-white border border-[#c1c7d2] p-4 rounded-xl">
      <span className="text-xs text-[#5c5f60] uppercase tracking-wider">
        {label}
      </span>

      <div className="flex items-end justify-between mt-1">
        <span className="text-2xl font-bold text-[#111c2d]">{value}</span>

        {note && (
          <span className="text-xs text-green-600 flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-full">
            {note}
            <span className="material-symbols-outlined text-[14px]">
              trending_up
            </span>
          </span>
        )}

        {progress && (
          <div className="w-16 h-1 bg-[#d8e3fb] rounded-full overflow-hidden">
            <div className="w-3/4 h-full bg-[#003e6f]" />
          </div>
        )}

        {danger && (
          <span className="text-xs text-[#ba1a1a] bg-[#ffdad6] px-2 py-0.5 rounded-full font-bold">
            Priority
          </span>
        )}

        {verified && (
          <span className="material-symbols-outlined text-[#003e6f]">
            verified
          </span>
        )}
      </div>
    </div>
  );
}