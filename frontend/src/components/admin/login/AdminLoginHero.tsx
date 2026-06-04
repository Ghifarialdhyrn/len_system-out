import FeatureItem from "@/components/admin/login/FeatureItem";

export default function AdminLoginHero() {
  return (
    <section className="hidden lg:block">
      <div className="inline-flex items-center gap-2 bg-[#d2e4ff] px-4 py-1 rounded-full border border-[#005696]/20 mb-6">
        <span className="material-symbols-outlined text-[18px] text-[#003e6f]">
          admin_panel_settings
        </span>
        <span className="text-xs font-semibold text-[#001c37] uppercase tracking-widest">
          Admin Access Portal
        </span>
      </div>

      <h1 className="text-5xl leading-tight font-bold tracking-tight text-[#003e6f] mb-4">
        Kelola Administrasi Magang dengan Aman
      </h1>

      <p className="text-base text-[#414750] max-w-lg mb-8">
        Masuk ke dashboard admin untuk mengelola data peserta magang,
        memperbarui status administrasi, dan menerbitkan sertifikat selesai
        magang.
      </p>

      <div className="grid grid-cols-1 gap-4 max-w-md">
        <FeatureItem
          icon="verified_user"
          title="Secure Admin Login"
          description="Akses khusus admin untuk pengelolaan data internal."
        />

        <FeatureItem
          icon="assignment_turned_in"
          title="Checklist Administrasi"
          description="Update status laporan, absensi, aset, dan penilaian."
        />

        <FeatureItem
          icon="workspace_premium"
          title="Sertifikat Otomatis"
          description="Generate sertifikat setelah seluruh administrasi lengkap."
        />
      </div>
    </section>
  );
}