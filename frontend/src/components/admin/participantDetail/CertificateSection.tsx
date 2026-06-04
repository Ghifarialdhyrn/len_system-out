type CertificateSectionProps = {
  isCompleted: boolean;
  noPeserta: string;
  hasCertificate: boolean;
};

export default function CertificateSection({
  isCompleted,
  noPeserta,
  hasCertificate,
}: CertificateSectionProps) {
  const downloadUrl = `${process.env.NEXT_PUBLIC_API_URL}/sertifikat/${noPeserta}/download`;

  return (
    <section className="bg-[#2e3e53] text-white rounded-xl p-6 overflow-hidden relative">
      <div className="absolute right-[-20px] top-[-20px] opacity-10">
        <span className="material-symbols-outlined text-[180px]">
          workspace_premium
        </span>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-1">Certificate Generation</h3>

          <p className="text-[#b7c8e1] text-sm max-w-md">
            Sertifikat dapat diunduh setelah seluruh administrasi peserta
            lengkap.
          </p>

          <p className="text-xs text-[#b7c8e1] mt-2">
            Status: {hasCertificate ? "Sertifikat tersedia" : "Belum tersedia"}
          </p>
        </div>

        {isCompleted ? (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#d2e4ff] text-[#001c37] px-6 py-3 rounded-full text-xs font-semibold flex items-center gap-2 hover:brightness-105 transition-all"
          >
            <span className="material-symbols-outlined">download</span>
            Download
          </a>
        ) : (
          <button
            disabled
            className="bg-[#727781] text-[#cfdaf2] cursor-not-allowed px-6 py-3 rounded-full text-xs font-semibold flex items-center gap-2"
          >
            <span className="material-symbols-outlined">lock</span>
            Locked
          </button>
        )}
      </div>
    </section>
  );
}