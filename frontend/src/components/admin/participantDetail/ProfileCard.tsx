import ProfileInfo from "@/components/admin/participantDetail/ProfileInfo";

type ProfileCardProps = {
  initials: string;
  nama: string;
  email: string;
  noHp: string;
  instansi: string;
  status: string;
};

export default function ProfileCard({
  initials,
  nama,
  email,
  noHp,
  instansi,
  status,
}: ProfileCardProps) {
  const isAktif = status === "aktif";

  return (
    <section className="bg-white/80 backdrop-blur-lg border border-slate-200 rounded-xl p-6 shadow-sm">
      <div className="flex flex-col items-center mb-6">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md bg-[#d2e4ff] flex items-center justify-center">
            <span className="text-3xl font-bold text-[#003e6f]">
              {initials}
            </span>
          </div>

          <div
            className={`absolute bottom-1 right-1 w-5 h-5 border-2 border-white rounded-full ${
              isAktif ? "bg-green-500" : "bg-[#727781]"
            }`}
            title={isAktif ? "Aktif" : "Selesai"}
          />
        </div>

        <h3 className="text-lg font-semibold text-[#111c2d]">{nama}</h3>

        <span className="bg-[#d2e4ff] text-[#001c37] px-3 py-1 rounded-full text-xs font-semibold mt-2">
          {isAktif ? "Peserta Aktif" : "Alumni Magang"}
        </span>
      </div>

      <div className="space-y-4">
        <ProfileInfo icon="mail" label="Email Address" value={email} />
        <ProfileInfo icon="phone" label="Phone Number" value={noHp} />
        <ProfileInfo icon="school" label="Institution" value={instansi} />
      </div>
    </section>
  );
}