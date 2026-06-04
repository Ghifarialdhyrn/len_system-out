import { getSertifikatDownloadUrl } from "@/services/pesertaService";
import { SearchPesertaResponse } from "@/types/peserta";
import ResultHeader from "@/components/public/result/ResultHeader";
import ResultInfoGrid from "@/components/public/result/ResultInfoGrid";
import ChecklistSection from "@/components/public/result/ChecklistSection";
import CertificateSection from "@/components/public/result/CertificateSection";

type ResultCardProps = {
  result: SearchPesertaResponse;
};

export default function ResultCard({ result }: ResultCardProps) {
  const peserta = result.data;

  const downloadUrl =
    result.download_url || getSertifikatDownloadUrl(peserta.no_peserta);

  return (
    <section className="bg-white rounded-xl border border-[#c1c7d2] overflow-hidden mb-6">
      <ResultHeader result={result} />

      <ResultInfoGrid peserta={peserta} />

      <ChecklistSection administrasi={peserta.administrasi} />

      <CertificateSection
        result={result}
        downloadUrl={downloadUrl}
      />
    </section>
  );
}