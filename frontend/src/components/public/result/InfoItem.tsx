type InfoItemProps = {
  label: string;
  value: string;
};

export default function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-semibold text-[#727781] uppercase tracking-wider">
        {label}
      </span>

      <span className="text-lg font-semibold text-[#111c2d]">
        {value}
      </span>
    </div>
  );
}