import { SearchPesertaResponse } from "@/types/peserta";

type CertificateSectionProps = {
  result: SearchPesertaResponse;
  downloadUrl: string;
};

export default function CertificateSection({
  result,
  downloadUrl,
}: CertificateSectionProps) {
  const peserta = result.data;

  if (!result.administrasi_lengkap) {
    return (
      <div className="p-6 bg-[#ffdad6] text-[#93000a] text-sm font-semibold">
        Administrasi belum lengkap. Silakan lengkapi persyaratan yang belum
        selesai.
      </div>
    );
  }

  return (
    <div className="p-6 bg-[#f0f3ff] flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-[#003e6f]">
          Internship Completion Certificate
        </h3>

        <p className="text-xs text-[#5c5f60]">
          {peserta.sertifikat
            ? `Nomor Sertifikat: ${peserta.sertifikat.nomor_sertifikat}`
            : "Sertifikat sedang dibuat otomatis"}
        </p>
      </div>

      {result.sertifikat_tersedia ? (
        <a
          href={downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#003e6f] text-white flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold hover:bg-[#005696]"
        >
          <span className="material-symbols-outlined">download</span>
          Download Certificate
        </a>
      ) : (
        <button
          disabled
          className="bg-[#727781] text-white flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-xs font-semibold cursor-not-allowed"
        >
          <span className="material-symbols-outlined">download</span>
          Certificate Not Available
        </button>
      )}
    </div>
  );
}