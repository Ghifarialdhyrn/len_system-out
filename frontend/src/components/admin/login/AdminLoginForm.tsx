type AdminLoginFormProps = {
  email: string;
  password: string;
  showPassword: boolean;
  isLoading: boolean;
  errorMessage: string;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onTogglePassword: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function AdminLoginForm({
  email,
  password,
  showPassword,
  isLoading,
  errorMessage,
  onEmailChange,
  onPasswordChange,
  onTogglePassword,
  onSubmit,
}: AdminLoginFormProps) {
  return (
    <section className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-lg p-6 md:p-8">
      <div className="mb-8 text-center">
        <div className="w-14 h-14 bg-[#d2e4ff] rounded-2xl flex items-center justify-center mx-auto mb-4">
          <span className="material-symbols-outlined text-[#003e6f] text-3xl">
            lock
          </span>
        </div>

        <h2 className="text-2xl font-bold text-[#003e6f]">Login Admin</h2>

        <p className="text-sm text-[#414750] mt-2">
          Masukkan akun admin untuk melanjutkan.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-5 bg-[#ffdad6] text-[#93000a] border border-[#ba1a1a]/20 rounded-xl px-4 py-3 text-sm font-semibold flex items-center gap-2">
          <span className="material-symbols-outlined text-[20px]">
            warning
          </span>
          {errorMessage}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold text-[#414750] mb-2">
            Email Admin
          </label>

          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#727781]">
              mail
            </span>

            <input
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              type="email"
              placeholder="admin@len.co.id"
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-[#c1c7d2] bg-white focus:ring-2 focus:ring-[#003e6f] focus:border-[#003e6f] text-sm outline-none transition-all"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#414750] mb-2">
            Password
          </label>

          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#727781]">
              key
            </span>

            <input
              value={password}
              onChange={(e) => onPasswordChange(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              className="w-full pl-12 pr-12 py-4 rounded-xl border border-[#c1c7d2] bg-white focus:ring-2 focus:ring-[#003e6f] focus:border-[#003e6f] text-sm outline-none transition-all"
            />

            <button
              type="button"
              onClick={onTogglePassword}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#727781] hover:text-[#003e6f]"
            >
              <span className="material-symbols-outlined">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-xs text-[#414750]">
            <input
              type="checkbox"
              className="rounded border-[#c1c7d2] text-[#003e6f]"
            />
            Ingat saya
          </label>

          <button
            type="button"
            className="text-xs font-semibold text-[#003e6f] hover:underline"
          >
            Lupa password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#003e6f] text-white px-8 py-4 rounded-xl text-sm font-semibold hover:bg-[#005696] transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Memproses...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-[20px]">
                login
              </span>
              Masuk Dashboard
            </>
          )}
        </button>
      </form>

      <div className="mt-6 pt-6 border-t border-[#c1c7d2] text-center">
        <p className="text-xs text-[#5c5f60]">
          Akses ini hanya untuk admin PT LEN Industri.
        </p>
      </div>
    </section>
  );
}