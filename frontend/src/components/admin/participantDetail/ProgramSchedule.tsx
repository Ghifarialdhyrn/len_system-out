import ScheduleItem from "@/components/admin/participantDetail/ScheduleItem";

type ProgramScheduleProps = {
  tanggalMulai: string;
  tanggalSelesai: string;
  progress: number;
};

export default function ProgramSchedule({
  tanggalMulai,
  tanggalSelesai,
  progress,
}: ProgramScheduleProps) {
  return (
    <section className="bg-[#f0f3ff] rounded-xl p-6 border border-[#c1c7d2]">
      <h4 className="text-xs font-semibold text-[#003e6f] mb-4 flex items-center gap-1">
        <span className="material-symbols-outlined text-[18px]">event</span>
        PROGRAM SCHEDULE
      </h4>

      <div className="space-y-6">
        <ScheduleItem label="Start Date" value={tanggalMulai} active />
        <ScheduleItem label="End Date" value={tanggalSelesai} />

        <div className="mt-4">
          <div className="flex justify-between text-xs font-semibold mb-2">
            <span>Administration Progress</span>
            <span>{progress}%</span>
          </div>

          <div className="h-2 w-full bg-[#d8e3fb] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#003e6f] transition-all duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}