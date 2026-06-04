"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import PublicNavbar from "@/components/public/PublicNavbar";
import PublicFooter from "@/components/public/PublicFooter";
import ResultLoading from "@/components/public/result/ResultLoading";
import ResultNotFound from "@/components/public/result/ResultNotFound";
import ResultCard from "@/components/public/result/ResultCard";
import { searchPeserta } from "@/services/pesertaService";
import { SearchPesertaResponse } from "@/types/peserta";

export default function ResultPage() {
  const searchParams = useSearchParams();
  const noPeserta = searchParams.get("no_peserta") || "";

  const [result, setResult] = useState<SearchPesertaResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await searchPeserta(noPeserta);

        setResult(response);
      } catch (error) {
        setResult(null);
        setErrorMessage(
          error instanceof Error ? error.message : "Peserta tidak ditemukan"
        );
      } finally {
        setLoading(false);
      }
    }

    if (noPeserta) {
      fetchData();
    } else {
      setLoading(false);
      setErrorMessage("Nomor peserta tidak boleh kosong.");
    }
  }, [noPeserta]);

  if (loading) {
    return <ResultLoading />;
  }

  if (!result) {
    return <ResultNotFound message={errorMessage} />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d] font-sans">
      <PublicNavbar />

      <main className="flex-grow p-6">
        <div className="max-w-4xl mx-auto">
          <ResultCard result={result} />
        </div>
      </main>

      <PublicFooter />
    </div>
  );
}