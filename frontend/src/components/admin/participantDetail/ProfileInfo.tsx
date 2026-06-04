type ProfileInfoProps = {
  icon: string;
  label: string;
  value: string;
};

export default function ProfileInfo({ icon, label, value }: ProfileInfoProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-[#003e6f]">{icon}</span>

      <div className="flex flex-col">
        <span className="text-xs font-semibold text-[#414750]">{label}</span>
        <span className="text-sm text-[#111c2d]">{value}</span>
      </div>
    </div>
  );
}