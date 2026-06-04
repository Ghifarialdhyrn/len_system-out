export default function ParticipantFooter() {
  return (
    <footer className="bg-[#e7eeff] border-t border-[#c1c7d2]">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 w-full mt-auto gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold text-[#5c5f60]">
            LEN InternAdmin
          </span>
          <span className="text-xs text-[#5c5f60] opacity-80">
            © 2026 PT LEN Industri. All Rights Reserved.
          </span>
        </div>

        <div className="flex gap-6">
          <a
            className="text-xs text-[#5c5f60] hover:text-[#003e6f] hover:underline"
            href="#"
          >
            Privacy Policy
          </a>

          <a
            className="text-xs text-[#5c5f60] hover:text-[#003e6f] hover:underline"
            href="#"
          >
            Terms of Service
          </a>

          <a
            className="text-xs text-[#5c5f60] hover:text-[#003e6f] hover:underline"
            href="#"
          >
            Contact Admin
          </a>
        </div>
      </div>
    </footer>
  );
}