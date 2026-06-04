type FeatureItemProps = {
  icon: string;
  title: string;
  description: string;
};

export default function FeatureItem({
  icon,
  title,
  description,
}: FeatureItemProps) {
  return (
    <div className="bg-white border border-[#c1c7d2] rounded-2xl p-4 shadow-sm flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#d2e4ff] flex items-center justify-center flex-shrink-0">
        <span className="material-symbols-outlined text-[#003e6f]">
          {icon}
        </span>
      </div>

      <div>
        <h3 className="text-sm font-bold text-[#111c2d]">{title}</h3>
        <p className="text-xs text-[#414750] mt-1">{description}</p>
      </div>
    </div>
  );
}