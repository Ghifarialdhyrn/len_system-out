type ChecklistItemProps = {
  title: string;
  description: string;
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
};

export default function ChecklistItem({
  title,
  description,
  checked,
  disabled,
  onChange,
}: ChecklistItemProps) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#c1c7d2] hover:border-[#003e6f]/30 transition-colors">
      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            checked
              ? "bg-green-100 text-green-700"
              : "bg-[#d2e4ff] text-[#003e6f]"
          }`}
        >
          <span className="material-symbols-outlined">
            {checked ? "check_circle" : "pending"}
          </span>
        </div>

        <div>
          <p className="text-base font-bold text-[#111c2d]">{title}</p>
          <p className="text-xs text-[#414750]">{description}</p>
        </div>
      </div>

      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          className="sr-only peer"
          type="checkbox"
        />
        <div className="w-11 h-6 bg-[#d8e3fb] rounded-full peer peer-checked:bg-[#003e6f] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-disabled:opacity-50" />
      </label>
    </div>
  );
}