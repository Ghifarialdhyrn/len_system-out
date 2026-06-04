export default function DashboardFooter() {
  return (
    <footer className="md:ml-[260px] bg-[#e7eeff] border-t border-[#c1c7d2] mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 px-6 w-full gap-4">
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