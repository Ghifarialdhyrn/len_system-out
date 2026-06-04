type EditInputProps = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
};

export default function EditInput({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: EditInputProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#414750] mb-2">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        className="w-full px-4 py-3 border border-[#c1c7d2] rounded-xl text-sm focus:outline-none focus:border-[#003e6f]"
      />
    </div>
  );
}