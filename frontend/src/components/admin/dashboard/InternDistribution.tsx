type Department = {
  name: string;
  total: number;
  percentage: number;
};

type InternDistributionProps = {
  departments: Department[];
  paginatedDepartments: Department[];
  distributionPage: number;
  distributionPerPage: number;
  totalDistributionPages: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
};

export default function InternDistribution({
  departments,
  paginatedDepartments,
  distributionPage,
  distributionPerPage,
  totalDistributionPages,
  onPageChange,
}: InternDistributionProps) {
  return (
    <div className="lg:col-span-4 bg-white border border-[#c1c7d2] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h4 className="text-lg font-semibold text-[#111c2d]">
            Intern Distribution
          </h4>

          <p className="text-xs text-[#727781]">
            Diurutkan dari peserta terbanyak
          </p>
        </div>

        <span className="text-xs font-semibold text-[#003e6f] bg-[#d2e4ff] px-2 py-1 rounded">
          {departments.length} kategori
        </span>
      </div>

      <div className="space-y-6 mt-6 min-h-[260px]">
        {paginatedDepartments.length > 0 ? (
          paginatedDepartments.map((department, index) => {
            const rank =
              (distributionPage - 1) * distributionPerPage + index + 1;

            return (
              <div key={department.name}>
                <div className="flex justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#d2e4ff] text-[#003e6f] flex items-center justify-center text-[11px] font-bold">
                      {rank}
                    </span>

                    <span className="text-xs font-semibold text-[#111c2d]">
                      {department.name}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#003e6f]">
                    {department.percentage}%
                  </span>
                </div>

                <div className="w-full h-2 bg-[#e7eeff] rounded-full overflow-hidden">
                  <div
                    className="bg-[#003e6f] h-full rounded-full"
                    style={{
                      width: `${department.percentage}%`,
                    }}
                  />
                </div>

                <p className="text-[11px] text-[#727781] mt-1">
                  {department.total} peserta
                </p>
              </div>
            );
          })
        ) : (
          <div className="text-sm text-[#727781]">
            Belum ada data distribusi peserta.
          </div>
        )}
      </div>

      {totalDistributionPages > 1 && (
        <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#c1c7d2]">
          <button
            onClick={() => onPageChange((page) => Math.max(page - 1, 1))}
            disabled={distributionPage === 1}
            className="px-3 py-2 border border-[#c1c7d2] rounded-lg text-xs font-semibold text-[#414750] hover:bg-[#f0f3ff] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Prev
          </button>

          <span className="text-xs font-semibold text-[#414750]">
            Page {distributionPage} of {totalDistributionPages}
          </span>

          <button
            onClick={() =>
              onPageChange((page) => Math.min(page + 1, totalDistributionPages))
            }
            disabled={distributionPage === totalDistributionPages}
            className="px-3 py-2 border border-[#c1c7d2] rounded-lg text-xs font-semibold text-[#414750] hover:bg-[#f0f3ff] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}