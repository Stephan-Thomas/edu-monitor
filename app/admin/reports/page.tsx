import { Inter } from "next/font/google";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LineChart,
  Line,
  Legend,
} from "recharts";
import {
  MdSchool,
  MdDashboard,
  MdGroup,
  MdMenuBook,
  MdDomain,
  MdDescription,
  MdSettings,
  MdLogout,
  MdMenu,
  MdSearch,
  MdNotifications,
  MdDownload,
  MdCalendarMonth,
  MdBarChart,
  MdWarning,
  MdPictureAsPdf,
  MdTableChart,
  MdSupervisorAccount,
  MdUpdate,
  MdPriorityHigh,
} from "react-icons/md";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const performanceData = [
  { semester: "Sem 1 '21", Sciences: 3.8, Engineering: 3.4, Arts: 2.8 },
  { semester: "Sem 2 '21", Sciences: 4.0, Engineering: 3.2, Arts: 3.0 },
  { semester: "Sem 1 '22", Sciences: 3.88, Engineering: 3.6, Arts: 2.92 },
  { semester: "Sem 2 '22", Sciences: 4.2, Engineering: 3.48, Arts: 3.2 },
  { semester: "Sem 1 '23", Sciences: 4.28, Engineering: 3.8, Arts: 3.08 },
  { semester: "Sem 2 '23", Sciences: 4.4, Engineering: 4.0, Arts: 3.4 },
];

export default function AdminReportsAnalytics() {
  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} bg-[#f6f6f8] dark:bg-[#101422] text-slate-900 dark:text-white overflow-hidden`}
      >
        <div className="flex h-screen w-full overflow-hidden">
          {/* Sidebar Navigation */}
          <aside className="w-64 bg-[#0f38bd] flex-shrink-0 flex flex-col h-full text-white shadow-xl z-20 hidden md:flex">
            <div className="p-6 flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <MdSchool className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight">UniAdmin</h1>
                <p className="text-blue-200 text-xs text-nowrap">
                  Student Perf. Monitor
                </p>
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
                href="#"
              >
                <MdDashboard />
                <span>Dashboard</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
                href="#"
              >
                <MdGroup />
                <span>Students</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
                href="#"
              >
                <MdMenuBook />
                <span>Courses</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
                href="#"
              >
                <MdDomain />
                <span>Departments</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
                href="#"
              >
                <MdSupervisorAccount />
                <span>Lecturers</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/10 text-white font-medium"
                href="#"
              >
                <MdDescription />
                <span>Reports</span>
              </a>
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
                href="#"
              >
                <MdSettings />
                <span>Settings</span>
              </a>
            </nav>
            <div className="p-4 border-t border-blue-800">
              <div className="flex items-center gap-3 px-3 py-2 text-blue-200 hover:text-white cursor-pointer">
                <MdLogout />
                <span className="text-sm font-medium">Log Out</span>
              </div>
            </div>
          </aside>
          {/* Main Content */}
          <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-[#f6f6f8] dark:bg-[#101422]">
            {/* Top Header */}
            <header className="h-16 bg-white dark:bg-[#1e2330] border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 sm:px-8 z-10 flex-shrink-0">
              <div className="flex items-center gap-4">
                <button className="md:hidden text-slate-500 hover:text-[#0f38bd]">
                  <MdMenu />
                </button>
                <h2 className="hidden lg:block text-xl font-bold text-slate-900 dark:text-white">
                  Reports & Analytics
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64 md:w-80 border border-transparent focus-within:border-[#0f38bd]/50 focus-within:bg-white dark:focus-within:bg-slate-900 transition-all">
                  <MdSearch className="text-slate-400" />
                  <input
                    className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400 ml-2"
                    placeholder="Search reports..."
                    type="text"
                  />
                </div>
                <button className="relative p-2 text-slate-500 hover:text-[#0f38bd] hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
                  <MdNotifications />
                  <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#1e2330]"></span>
                </button>
                <div className="flex items-center gap-3 pl-4 border-l border-slate-200 dark:border-slate-700">
                  <div className="text-right hidden md:block">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">
                      Dr. Adegoke
                    </p>
                    <p className="text-xs text-slate-500">Super Admin</p>
                  </div>
                  <div
                    className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white dark:border-slate-600 shadow-sm"
                    style={{
                      backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUbugpNvIVAhEpJ6hdW9UdtKbm0LteeYKk7catVkaMWge_2ze1XcSqENGSX9hcrMI5s679HxNXQWjry-2jkjxDuUn1H3-v71ftgDr5B9tZ7MUXi22Akez9t3NXp8C5qDR8JM-1SzxvVx06aTXZdRaC-7WC52NQAqo631pyr0Pg-xsovGfg18YCXVauV2MRgUojCCAnYvO48zIOw7Yif3t2wUWaQtJJS936RUmCR3ZiRN_8-oKLb2WA8SIZb5H1tjuKHktoMyspBhL-')`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </div>
              </div>
            </header>
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-8">
              <div className="max-w-[1400px] mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Reports Dashboard
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Generate insights and export system data.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0f38bd] text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-colors">
                      <MdDownload className="text-[20px]" />
                      Export All Data
                    </button>
                  </div>
                </div>
                <section>
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide mb-4">
                    Quick Reports
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-emerald-500/30 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-lg bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
                          <MdCalendarMonth className="text-2xl" />
                        </div>
                        <MdDownload className="text-slate-400 group-hover:text-emerald-600 transition-colors" />
                      </div>
                      <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Attendance Summary
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Download daily student attendance logs grouped by
                        faculty.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                        <MdUpdate className="text-[16px]" /> Updated 2 hrs ago
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-[#0f38bd]/30 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                          <MdBarChart className="text-2xl" />
                        </div>
                        <MdDownload className="text-slate-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                      <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        Grade Distribution
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Semester performance analysis and CGPA distribution
                        charts.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-blue-600 dark:text-blue-400">
                        <MdUpdate className="text-[16px]" /> Updated yesterday
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md hover:border-amber-500/30 transition-all cursor-pointer group">
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-lg bg-amber-100 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center">
                          <MdWarning className="text-2xl" />
                        </div>
                        <MdDownload className="text-slate-400 group-hover:text-amber-600 transition-colors" />
                      </div>
                      <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                        At-Risk Student List
                      </h5>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Students with attendance below 70% or CGPA below 2.0.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-amber-600 dark:text-amber-400">
                        <MdPriorityHigh className="text-[16px]" /> 15 New Alerts
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                          System-Wide Performance
                        </h4>
                        <p className="text-sm text-slate-500">
                          Average CGPA comparison across faculties (Last 6
                          Semesters)
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-[#0f38bd]"></span>
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            Sciences
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            Engineering
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                          <span className="text-xs text-slate-600 dark:text-slate-300">
                            Arts
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={performanceData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <XAxis dataKey="semester" tick={{ fontSize: 12 }} />
                          <YAxis domain={[1, 5]} tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Line
                            type="monotone"
                            dataKey="Sciences"
                            stroke="#0f38bd"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="Engineering"
                            stroke="#10b981"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                          <Line
                            type="monotone"
                            dataKey="Arts"
                            stroke="#f59e0b"
                            strokeWidth={2}
                            dot={{ r: 4 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                        Recent Reports History
                      </h4>
                      <button className="text-sm text-[#0f38bd] font-medium hover:underline">
                        View All History
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Report Name
                            </th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Date Generated
                            </th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                              Generated By
                            </th>
                            <th className="py-4 px-6 text-xs font-semibold uppercase tracking-wider text-slate-500 text-right">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                                  <MdPictureAsPdf className="text-lg" />
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white">
                                  Monthly Attendance_Oct.pdf
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Oct 31, 2023
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              System Auto-Gen
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                                <MdDownload />
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                  <MdTableChart className="text-lg" />
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white">
                                  Faculty_Perf_Q3.csv
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Oct 28, 2023
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Dr. Adegoke
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                                <MdDownload />
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-red-100 dark:bg-red-900/20 flex items-center justify-center text-red-600">
                                  <MdPictureAsPdf className="text-lg" />
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white">
                                  At_Risk_Warning_List.pdf
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Oct 25, 2023
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Prof. Okeke
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                                <MdDownload />
                              </button>
                            </td>
                          </tr>
                          <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-green-100 dark:bg-green-900/20 flex items-center justify-center text-green-600">
                                  <MdTableChart className="text-lg" />
                                </div>
                                <span className="font-medium text-slate-900 dark:text-white">
                                  Course_Reg_Summary.xlsx
                                </span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Oct 20, 2023
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-600 dark:text-slate-300">
                              Registry Office
                            </td>
                            <td className="py-4 px-6 text-right">
                              <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                                <MdDownload />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
