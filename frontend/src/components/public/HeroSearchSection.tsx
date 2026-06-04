type HeroSearchSectionProps = {
  keyword: string;
  isLoading: boolean;
  isError: boolean;
  onKeywordChange: (value: string) => void;
  onSearch: () => void;
};

export default function HeroSearchSection({
  keyword,
  isLoading,
  isError,
  onKeywordChange,
  onSearch,
}: HeroSearchSectionProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-24 bg-[#f0f3ff]">
      <div className="absolute inset-0 z-0 opacity-10">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #003e6f 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 bg-[#d2e4ff] px-4 py-1 rounded-full border border-[#005696]/20">
          <span className="material-symbols-outlined text-[18px] text-[#003e6f]">
            verified_user
          </span>

          <span className="text-xs font-semibold text-[#001c37] uppercase tracking-widest">
            Official Verification Portal
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl leading-tight font-bold tracking-tight text-[#003e6f] max-w-3xl mb-4">
          Participant Enrollment & Status Verification
        </h1>

        <p className="text-base md:text-lg text-[#414750] max-w-2xl mb-8">
          Access the official PT LEN Industri internship database. Verify
          internship status, certificates, and program participation using your
          registration number.
        </p>

        <div className="w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 shadow-lg">
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-grow relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#727781]">
                search
              </span>

              <input
                value={keyword}
                onChange={(e) => onKeywordChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") onSearch();
                }}
                className={`w-full pl-12 pr-4 py-4 rounded-xl border bg-white focus:ring-2 focus:ring-[#003e6f] focus:border-[#003e6f] text-base transition-all outline-none ${
                  isError
                    ? "border-[#ba1a1a] animate-shake"
                    : "border-[#c1c7d2]"
                }`}
                placeholder="Masukkan Nomor Peserta Magang..."
                type="text"
              />
            </div>

            <button
              onClick={onSearch}
              disabled={isLoading}
              className="bg-[#003e6f] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-[#005696] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Memeriksa...
                </>
              ) : (
                "Verify Status"
              )}
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-1 text-xs text-[#5c5f60]">
            <span className="material-symbols-outlined text-[16px]">info</span>
            <span>Format: Nomor peserta, contoh MGG-0123</span>
          </div>
        </div>
      </div>
    </section>
  );
}
