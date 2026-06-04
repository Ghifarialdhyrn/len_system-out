import InfoCard from "@/components/public/InfoCard";

const instructionCards = [
  {
    icon: "fingerprint",
    title: "Secure Entry",
    description:
      "Gunakan nomor peserta unik yang diberikan selama proses pendaftaran magang.",
  },
  {
    icon: "fact_check",
    title: "Validate Results",
    description:
      "Cek status administrasi, absensi, laporan akhir, dan kelengkapan lainnya secara langsung.",
  },
  {
    icon: "card_membership",
    title: "Digital Credentials",
    description:
      "Peserta yang telah menyelesaikan administrasi dapat mengunduh sertifikat digital.",
  },
];

export default function InstructionCards() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 -mt-12 relative z-20 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {instructionCards.map((card) => (
          <InfoCard
            key={card.title}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}