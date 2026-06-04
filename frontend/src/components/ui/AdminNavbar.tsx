"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Dashboard",
    href: "/admin/dashboard",
  },
  {
    label: "Participants",
    href: "/admin/listPeserta",
  },
];

type AdminNavbarProps = {
  onOpenSidebar?: () => void;
};

export default function AdminNavbar({ onOpenSidebar }: AdminNavbarProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-[#c1c7d2] h-16">
      <div className="flex justify-between items-center px-6 w-full max-w-[1440px] mx-auto h-full">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onOpenSidebar}
            className="md:hidden w-10 h-10 rounded-xl hover:bg-[#e8f1fa] flex items-center justify-center text-[#003e6f]"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          <Link
            href="/admin/dashboard"
            className="text-2xl font-bold text-[#003e6f]"
          >
            LEN Internships
          </Link>

          <nav className="hidden md:flex items-center gap-6 ml-4">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? "text-[#003e6f] font-bold border-b-2 border-[#003e6f] pb-1"
                      : "text-[#414750] hover:text-[#003e6f]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">Admin</span>

          <div className="w-8 h-8 rounded-full border border-[#c1c7d2] bg-[#d2e4ff] flex items-center justify-center">
            <span className="material-symbols-outlined text-[#003e6f] text-[20px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}