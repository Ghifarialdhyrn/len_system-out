type ActionButtonProps = {
  icon: string;
  title: string;
  danger?: boolean;
  onClick?: () => void;
};

export default function ActionButton({
  icon,
  title,
  danger = false,
  onClick,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-1.5 rounded-md text-[#414750] transition-colors ${
        danger
          ? "hover:bg-[#ffdad6] hover:text-[#ba1a1a]"
          : "hover:bg-[#d8e3fb]"
      }`}
      title={title}
    >
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
    </button>
  );
}