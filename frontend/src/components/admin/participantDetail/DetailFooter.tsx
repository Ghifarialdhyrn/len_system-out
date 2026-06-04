export default function DetailFooter() {
  return (
    <footer className="bg-[#e7eeff] border-t border-[#c1c7d2] py-4 px-6 w-full mt-auto md:ml-[260px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-xs text-[#5c5f60]">
          © 2026 PT LEN Industri. All Rights Reserved.
        </span>

        <div className="flex gap-6">
          <a className="text-xs text-[#5c5f60] hover:text-[#003e6f]" href="#">
            Privacy Policy
          </a>
          <a className="text-xs text-[#5c5f60] hover:text-[#003e6f]" href="#">
            Terms of Service
          </a>
          <a className="text-xs text-[#5c5f60] hover:text-[#003e6f]" href="#">
            Contact Admin
          </a>
        </div>
      </div>
    </footer>
  );
}