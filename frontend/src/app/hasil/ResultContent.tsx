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

export default function ResultContent() {
  const searchParams = useSearchParams();
  const noPeserta = searchParams.get("no_peserta") ?? "";

  const [result, setResult] = useState<SearchPesertaResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!noPeserta) return;

    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);
        setErrorMessage("");

        const response = await searchPeserta(noPeserta);

        if (!isMounted) return;

        setResult(response);
      } catch (error) {
        if (!isMounted) return;

        setResult(null);
        setErrorMessage(
          error instanceof Error
            ? error.message
            : "Peserta tidak ditemukan."
        );
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [noPeserta]);

  if (!noPeserta) {
    return <ResultNotFound message="Nomor peserta tidak boleh kosong." />;
  }

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