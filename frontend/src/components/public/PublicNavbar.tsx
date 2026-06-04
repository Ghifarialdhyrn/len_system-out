export default function PublicNavbar() {
  return (
    <header className="bg-white border-b border-[#c1c7d2] sticky top-0 z-50">
      <div className="flex justify-between items-center px-6 w-full max-w-[1440px] mx-auto h-16">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-[#003e6f]">
            LEN Internships
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-sm text-[#003e6f] font-bold border-b-2 border-[#003e6f] pb-1"
            href="#"
          >
            Search
          </a>

          <a
            className="text-sm text-[#414750] hover:text-[#003e6f] transition-colors"
            href="#"
          >
            Information
          </a>

          <a
            className="text-sm text-[#414750] hover:text-[#003e6f] transition-colors"
            href="#"
          >
            Contact
          </a>
        </nav>

        <a
          href="/admin/login"
          className="px-4 py-2 rounded-xl text-xs font-semibold text-[#003e6f] hover:bg-[#f0f3ff] transition-all"
        >
          Admin Portal
        </a>
      </div>
    </header>
  );
}
