type ChartItem = {
  month: string;
  total: number;
  height: string;
  active: boolean;
};

type ApplicationTrendsProps = {
  chartData: ChartItem[];
};

export default function ApplicationTrends({
  chartData,
}: ApplicationTrendsProps) {
  return (
    <div className="lg:col-span-8 bg-white border border-[#c1c7d2] rounded-xl p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h4 className="text-lg font-semibold text-[#111c2d]">
            Application Trends
          </h4>
          <p className="text-xs text-[#414750]">
            Monthly submission volume from peserta database.
          </p>
        </div>

        <div className="flex gap-2">
          <button className="px-4 py-1 border border-[#c1c7d2] rounded-lg text-xs font-semibold hover:bg-[#f0f3ff] transition-all">
            Month
          </button>

          <button className="px-4 py-1 bg-[#003e6f] text-white rounded-lg text-xs font-semibold">
            Year
          </button>
        </div>
      </div>

      <div className="h-[300px] w-full flex items-end gap-2 px-2 pb-8 relative border-b border-l border-[#c1c7d2]">
        {chartData.length > 0 ? (
          chartData.map((item) => (
            <div
              key={item.month}
              className="flex-1 flex flex-col justify-end gap-2 group relative h-full"
            >
              <div
                className={`w-full rounded-t-lg transition-all ${
                  item.active
                    ? "bg-[#003e6f] hover:opacity-80"
                    : "bg-[#005696]/20 hover:bg-[#005696]/40"
                }`}
                style={{ height: item.height }}
              />

              <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-[#003e6f]">
                {item.total}
              </div>

              <div
                className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs ${
                  item.active ? "font-bold text-[#003e6f]" : "text-[#414750]"
                }`}
              >
                {item.month}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full h-full flex items-center justify-center text-sm text-[#727781]">
            Belum ada data tren aplikasi.
          </div>
        )}
      </div>
    </div>
  );
}