import { SearchPesertaResponse } from "@/types/peserta";

type ResultHeaderProps = {
  result: SearchPesertaResponse;
};

export default function ResultHeader({ result }: ResultHeaderProps) {
  const peserta = result.data;

  return (
    <div className="bg-[#003e6f] p-6 text-white flex flex-col md:flex-row justify-between gap-6">
      <div>
        <span className="bg-white/20 text-white text-xs font-semibold px-4 py-1 rounded-full inline-block mb-2">
          ADMINISTRATION RESULT
        </span>

        <h1 className="text-4xl font-bold tracking-tight mb-1">
          {peserta.nama}
        </h1>

        <p className="text-white/80 text-base">
          Nomor Peserta: {peserta.no_peserta}
        </p>
      </div>

      <div className="flex flex-col md:items-end">
        <div
          className={`font-bold px-6 py-2 rounded-xl mb-2 flex items-center gap-2 ${
            result.administrasi_lengkap
              ? "bg-[#d8e3fb] text-[#003e6f]"
              : "bg-[#ffdad6] text-[#93000a]"
          }`}
        >
          <span className="material-symbols-outlined">
            {result.administrasi_lengkap ? "verified" : "warning"}
          </span>
          {result.administrasi_lengkap ? "Completed" : "Belum Lengkap"}
        </div>

        <span className="text-xs text-white/70">
          Status Magang: {peserta.status_magang}
        </span>
      </div>
    </div>
  );
}