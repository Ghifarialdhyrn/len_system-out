import { KpiCardItem } from "@/components/admin/dashboard/types";

type DashboardKpiCardsProps = {
  cards: KpiCardItem[];
};

export default function DashboardKpiCards({ cards }: DashboardKpiCardsProps) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {cards.map((card) => (
        <div
          key={card.label}
          className="bg-white p-6 border border-[#c1c7d2] rounded-xl flex flex-col justify-between shadow-sm hover:border-[#003e6f] transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <span
              className={`material-symbols-outlined p-2 rounded-lg ${
                card.danger
                  ? "text-[#ba1a1a] bg-[#ffdad6]"
                  : "text-[#003e6f] bg-[#d2e4ff]"
              }`}
            >
              {card.icon}
            </span>

            <span className="text-xs font-semibold text-[#414750] bg-[#d8e3fb] px-2 py-1 rounded">
              {card.label}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#111c2d]">
              {card.value.toLocaleString("id-ID")}
            </h3>

            <div className="flex items-center gap-1 mt-1">
              <span
                className={`material-symbols-outlined text-[16px] ${
                  card.danger ? "text-[#ba1a1a]" : "text-[#003e6f]"
                }`}
              >
                {card.noteIcon}
              </span>

              <span
                className={`text-xs ${
                  card.danger ? "text-[#ba1a1a]" : "text-[#003e6f]"
                }`}
              >
                {card.note}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}