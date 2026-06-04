type ResultNotFoundProps = {
  message?: string;
};

export default function ResultNotFound({ message }: ResultNotFoundProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9f9ff] px-6">
      <div className="bg-white border border-[#c1c7d2] rounded-2xl p-8 max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#ba1a1a] mb-2">
          Data Tidak Ditemukan
        </h1>

        <p className="text-sm text-[#414750] mb-6">
          {message || "Nomor peserta tidak ditemukan."}
        </p>

        <a
          href="/"
          className="inline-flex items-center justify-center bg-[#003e6f] text-white px-6 py-3 rounded-xl text-xs font-semibold"
        >
          Kembali ke Pencarian
        </a>
      </div>
    </div>
  );
}