import { PesertaMagang } from "@/types/peserta";
import InfoItem from "@/components/public/result/InfoItem";

type ResultInfoGridProps = {
  peserta: PesertaMagang;
};

export default function ResultInfoGrid({ peserta }: ResultInfoGridProps) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#c1c7d2]">
      <InfoItem label="Institution" value={peserta.instansi} />

      <InfoItem
        label="Program Period"
        value={`${peserta.tanggal_mulai} - ${peserta.tanggal_selesai}`}
      />

      <InfoItem
        label="Program Studi"
        value={peserta.program_studi || "-"}
      />
    </div>
  );
}