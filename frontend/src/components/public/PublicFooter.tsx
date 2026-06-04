export default function PublicFooter() {
  return (
    <footer className="bg-[#e7eeff] border-t border-[#c1c7d2] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 w-full max-w-[1440px] mx-auto gap-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-[#5c5f60]">
            LEN InternAdmin
          </span>
          <span className="text-xs text-[#5c5f60]">
            © 2026 PT LEN Industri. All Rights Reserved.
          </span>
        </div>

        <div className="flex gap-6">
          <a
            className="text-xs text-[#5c5f60] hover:text-[#003e6f] transition-all"
            href="#"
          >
            Privacy Policy
          </a>

          <a
            className="text-xs text-[#5c5f60] hover:text-[#003e6f] transition-all"
            href="#"
          >
            Terms of Service
          </a>

          <a
            className="text-xs text-[#5c5f60] hover:text-[#003e6f] transition-all"
            href="#"
          >
            Contact Admin
          </a>
        </div>
      </div>
    </footer>
  );
}