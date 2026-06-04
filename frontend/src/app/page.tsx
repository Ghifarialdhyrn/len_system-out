"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PublicNavbar from "@/components/public/PublicNavbar";
import HeroSearchSection from "@/components/public/HeroSearchSection";
import InstructionCards from "@/components/public/InstructionCards";
import HelpSection from "@/components/public/HelpSection";
import PublicFooter from "@/components/public/PublicFooter";

export default function HomePage() {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");
  const [isLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSearch = () => {
    const value = keyword.trim();

    if (!value) {
      setIsError(true);

      setTimeout(() => {
        setIsError(false);
      }, 500);

      return;
    }

    router.push(`/hasil?no_peserta=${encodeURIComponent(value)}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9ff] text-[#111c2d] font-sans">
      <PublicNavbar />

      <main className="flex-grow">
        <HeroSearchSection
          keyword={keyword}
          isLoading={isLoading}
          isError={isError}
          onKeywordChange={setKeyword}
          onSearch={handleSearch}
        />

        <InstructionCards />

        <HelpSection />
      </main>

      <PublicFooter />
    </div>
  );
}