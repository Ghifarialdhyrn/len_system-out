export default function AdminLoginHeader() {
  return (
    <header className="bg-white border-b border-[#c1c7d2]">
      <div className="flex justify-between items-center px-6 w-full max-w-[1440px] mx-auto h-16">
        <a href="/" className="text-2xl font-bold text-[#003e6f]">
          LEN InternAdmin
        </a>

        <a
          href="/"
          className="px-4 py-2 rounded-xl text-xs font-semibold text-[#003e6f] hover:bg-[#f0f3ff] transition-all"
        >
          Public Search
        </a>
      </div>
    </header>
  );
}