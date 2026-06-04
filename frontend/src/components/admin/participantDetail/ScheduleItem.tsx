type ScheduleItemProps = {
  label: string;
  value: string;
  active?: boolean;
};

export default function ScheduleItem({
  label,
  value,
  active = false,
}: ScheduleItemProps) {
  return (
    <div className="relative pl-6 border-l-2 border-[#c1c7d2]">
      <div
        className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ${
          active ? "bg-[#003e6f]" : "bg-[#c1c7d2]"
        }`}
      />

      <p className="text-xs font-semibold text-[#414750]">{label}</p>
      <p className="text-lg font-semibold text-[#111c2d]">{value}</p>
    </div>
  );
}