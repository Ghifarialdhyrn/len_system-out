"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutAdmin } from "@/services/authService";

const menuItems = [
  {
    icon: "dashboard",
    label: "Overview",
    href: "/admin/dashboard",
  },
  {
    icon: "calendar_today",
    label: "Daftar Peserta",
    href: "/admin/listPeserta",
  },
  {
    icon: "assignment_turned_in",
    label: "Administrasi",
    href: "/admin/peserta",
  },
];

type AdminSidebarProps = {
  mobileOpen?: boolean;
  setMobileOpen?: (value: boolean) => void;
};

export default function AdminSidebar({
  mobileOpen = false,
  setMobileOpen,
}: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem("sidebar-open");

    if (savedState) {
      setIsOpen(savedState === "true");
    }
  }, []);

  function closeMobileSidebar() {
    setMobileOpen?.(false);
  }

  function toggleSidebar() {
    const newState = !isOpen;

    setIsOpen(newState);
    localStorage.setItem("sidebar-open", String(newState));
  }

  async function handleLogout() {
    try {
      await logoutAdmin();
    } finally {
      localStorage.removeItem("sidebar-open");
      closeMobileSidebar();
      router.push("/admin/login");
    }
  }

  return (
    <>
      {mobileOpen && (
        <div
          onClick={closeMobileSidebar}
          className="md:hidden fixed inset-0 bg-black/40 z-40"
        />
      )}

      <aside
        className={`
          fixed left-0 top-16
          h-[calc(100vh-4rem)]
          bg-[#f9f9ff]
          border-r border-[#c1c7d2]
          flex flex-col
          p-4 gap-2
          z-50
          transition-all duration-300
          w-[260px]
          ${isOpen ? "md:w-[260px]" : "md:w-[80px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div className="flex items-center justify-between mb-4">
          <div className={`${isOpen ? "md:block" : "md:hidden"} block`}>
            <h2 className="text-lg font-bold text-[#111c2d] whitespace-nowrap">
              PT LEN Industri
            </h2>

            <p className="text-xs font-semibold text-[#414750] opacity-70 whitespace-nowrap">
              Internship Program
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (window.innerWidth < 768) {
                closeMobileSidebar();
              } else {
                toggleSidebar();
              }
            }}
            className="w-10 h-10 rounded-xl hover:bg-[#dee8ff] flex items-center justify-center transition text-[#414750]"
            title={mobileOpen ? "Close Sidebar" : "Toggle Sidebar"}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? "close" : isOpen ? "menu_open" : "menu"}
            </span>
          </button>
        </div>

        <nav className="flex flex-col gap-1 flex-grow">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");

            return (
              <Link
                key={item.label}
                href={item.href}
                title={item.label}
                onClick={closeMobileSidebar}
                className={`
                  flex items-center
                  gap-4 md:gap-0
                  px-4 md:px-0
                  py-3 rounded-xl
                  transition-all text-xs font-semibold
                  ${isOpen ? "md:gap-4 md:px-4" : "md:justify-center"}
                  ${
                    isActive
                      ? "bg-[#d2e4ff] text-[#001c37]"
                      : "text-[#414750] hover:bg-[#dee8ff]"
                  }
                `}
              >
                <span className="material-symbols-outlined">{item.icon}</span>

                <span className={`${isOpen ? "md:inline" : "md:hidden"}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}

          <button
            type="button"
            onClick={handleLogout}
            title="Logout"
            className={`
              mt-2 flex items-center
              gap-4 md:gap-0
              px-4 md:px-0
              py-3 rounded-xl
              transition-all text-xs font-semibold
              text-red-600 hover:bg-red-50
              ${isOpen ? "md:gap-4 md:px-4" : "md:justify-center"}
            `}
          >
            <span className="material-symbols-outlined">logout</span>

            <span className={`${isOpen ? "md:inline" : "md:hidden"}`}>
              Logout
            </span>
          </button>
        </nav>

        <div className="pt-4 border-t border-[#c1c7d2] flex flex-col gap-1">
          <button
            type="button"
            className="bg-[#003e6f] text-white rounded-xl py-3 text-xs font-semibold hover:opacity-90 transition-all mb-4 flex items-center justify-center gap-2"
          >
            <span
              className={`material-symbols-outlined ${
                isOpen ? "md:hidden" : "md:inline"
              } hidden`}
            >
              description
            </span>

            <span className={`${isOpen ? "md:inline" : "md:hidden"}`}>
              Generate Report
            </span>
          </button>

          <button
            type="button"
            title="Support"
            className={`
              flex items-center
              gap-4 md:gap-0
              px-4 md:px-0
              py-3 rounded-xl
              transition-all text-xs font-semibold
              text-[#414750] hover:bg-[#dee8ff]
              ${isOpen ? "md:gap-4 md:px-4" : "md:justify-center"}
            `}
          >
            <span className="material-symbols-outlined">contact_support</span>

            <span className={`${isOpen ? "md:inline" : "md:hidden"}`}>
              Support
            </span>
          </button>

          <button
            type="button"
            title="Help Center"
            className={`
              flex items-center
              gap-4 md:gap-0
              px-4 md:px-0
              py-3 rounded-xl
              transition-all text-xs font-semibold
              text-[#414750] hover:bg-[#dee8ff]
              ${isOpen ? "md:gap-4 md:px-4" : "md:justify-center"}
            `}
          >
            <span className="material-symbols-outlined">help</span>

            <span className={`${isOpen ? "md:inline" : "md:hidden"}`}>
              Help Center
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}