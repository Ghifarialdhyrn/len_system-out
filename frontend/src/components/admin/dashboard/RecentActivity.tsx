type Activity = {
  action: string;
  user: string;
  department: string;
  date: string;
  status: string;
};

type RecentActivityProps = {
  activities: Activity[];
};

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="lg:col-span-12 bg-white border border-[#c1c7d2] rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-semibold text-[#111c2d]">
          Recent Activity
        </h4>

        <button className="text-[#003e6f] text-xs font-semibold flex items-center gap-1">
          View Full History
          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#c1c7d2]">
              <th className="py-4 px-4 text-xs font-semibold text-[#414750] uppercase tracking-wider">
                Action
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#414750] uppercase tracking-wider">
                User/Intern
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#414750] uppercase tracking-wider">
                Department
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#414750] uppercase tracking-wider">
                Date
              </th>
              <th className="py-4 px-4 text-xs font-semibold text-[#414750] uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-[#c1c7d2]">
            {activities.length > 0 ? (
              activities.map((activity, index) => (
                <tr
                  key={`${activity.user}-${index}`}
                  className="hover:bg-[#f0f3ff] transition-colors"
                >
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#003e6f]">
                        person_add
                      </span>

                      <span className="text-sm text-[#111c2d]">
                        {activity.action}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4 text-sm text-[#111c2d]">
                    {activity.user}
                  </td>

                  <td className="py-4 px-4 text-sm text-[#414750]">
                    {activity.department}
                  </td>

                  <td className="py-4 px-4 text-sm text-[#414750]">
                    {activity.date}
                  </td>

                  <td className="py-4 px-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        activity.status === "aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-[#d2e4ff] text-[#001c37]"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-sm text-[#727781]"
                >
                  Belum ada aktivitas terbaru.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}