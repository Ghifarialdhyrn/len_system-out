type InfoCardProps = {
  icon: string;
  title: string;
  description: string;
};

export default function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-[#c1c7d2] shadow-sm hover:shadow-md transition-shadow">
      <div className="w-12 h-12 rounded-xl bg-[#d2e4ff] flex items-center justify-center mb-4">
        <span className="material-symbols-outlined text-[#003e6f]">
          {icon}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-[#111c2d] mb-2">{title}</h3>

      <p className="text-sm text-[#414750]">{description}</p>
    </div>
  );
}