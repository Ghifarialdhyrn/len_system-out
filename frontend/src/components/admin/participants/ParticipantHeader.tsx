type ParticipantHeaderProps = {
  onAdd: () => void;
};

export default function ParticipantHeader({ onAdd }: ParticipantHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
      <div>
        <h1 className="text-4xl font-bold tracking-tight text-[#003e6f]">
          Participant Directory
        </h1>

        <p className="text-[#414750] text-sm">
          Manage and monitor all internship participants across departments.
        </p>
      </div>

      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 border border-[#003e6f] text-[#003e6f] text-xs font-semibold rounded-xl hover:bg-[#d2e4ff] transition-colors">
          <span className="material-symbols-outlined text-[18px]">
            file_download
          </span>
          Export CSV
        </button>

        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-2 px-4 py-2 bg-[#003e6f] text-white text-xs font-semibold rounded-xl shadow-sm hover:bg-[#005696] transition-colors"
        >
          <span className="material-symbols-outlined text-[18px]">
            person_add
          </span>
          Add Participant
        </button>
      </div>
    </div>
  );
}