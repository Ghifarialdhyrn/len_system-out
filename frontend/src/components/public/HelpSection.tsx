export default function HelpSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 py-8">
      <div className="bg-[#dee8ff] rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex-grow">
          <h2 className="text-xl font-semibold text-[#003e6f] mb-2">
            Butuh bantuan dengan pencarian?
          </h2>

          <p className="text-sm text-[#414750] max-w-xl">
            Jika data Anda tidak ditemukan atau lupa nomor peserta, silakan
            hubungi tim administrasi magang PT LEN Industri.
          </p>
        </div>

        <div className="flex flex-shrink-0 gap-4">
          <a
            className="px-6 py-2 rounded-full border border-[#003e6f] text-[#003e6f] text-xs font-semibold hover:bg-[#003e6f] hover:text-white transition-all flex items-center gap-2"
            href="mailto:admin@len.co.id"
          >
            <span className="material-symbols-outlined text-[18px]">mail</span>
            Contact Support
          </a>

          <a
            className="px-6 py-2 rounded-full bg-[#003e6f] text-white text-xs font-semibold hover:bg-[#005696] transition-all flex items-center gap-2"
            href="#"
          >
            <span className="material-symbols-outlined text-[18px]">
              help_center
            </span>
            Help Center
          </a>
        </div>
      </div>
    </section>
  );
}