"use client";
import Head from "next/head";
import {
  MdGroup,
  MdMenu,
  MdNotifications,
  MdSearch,
  MdExpandMore,
  MdPictureAsPdf,
  MdTableView,
  MdCalendarMonth,
  MdTrendingUp,
  MdWarning,
  MdPlayArrow,
} from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { SlCalender } from "react-icons/sl";
import { IoFilter } from "react-icons/io5";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Sidebar from "@/app/components/lecturer/Sidebar";

const gradeData = [
  { grade: "A", students: 18 },
  { grade: "B", students: 42 },
  { grade: "C", students: 36 },
  { grade: "D", students: 14 },
  { grade: "F", students: 10 },
];

export default function LecturerReportsPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lecturer Reports Page</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .icon-fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .custom-scrollbar::-webkit-scrollbar {
            height: 8px;
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 4px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #475569;
          }
        `}</style>
      </Head>
      <body className="bg-[#f6f6f8] dark:bg-[#101422] font-['Inter'] text-[#111318] dark:text-gray-100 overflow-hidden">
        <div className="flex h-screen w-full overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            <header className="bg-white dark:bg-[#1e2330] border-b border-[#f0f1f4] dark:border-gray-800 px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-4 lg:hidden">
                <button className="text-[#616b89] dark:text-gray-400">
                  <MdMenu />
                </button>
                <span className="text-lg font-bold text-[#0f38bd] dark:text-blue-400">
                  StudentMonitor
                </span>
              </div>
              <div className="hidden lg:flex items-center gap-4">
                <h2 className="text-xl font-bold text-[#111318] dark:text-white">
                  Reports Center
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative hidden md:flex items-center">
                  <MdSearch className="absolute left-3 text-[#616b89]" />
                  <input
                    className="pl-10 pr-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-64 border-none text-[#111318] dark:text-white placeholder-[#616b89]"
                    placeholder="Search reports..."
                    type="text"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <button className="relative p-2 text-[#616b89] hover:bg-[#f0f1f4] dark:hover:bg-gray-800 rounded-full transition-colors">
                    <MdNotifications />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-[#1e2330]"></span>
                  </button>
                  <div className="h-8 w-px bg-[#f0f1f4] dark:bg-gray-700 mx-1"></div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-cover bg-center border border-[#f0f1f4] dark:border-gray-700"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF9hnP_0HdZB8qChSE4Z7bJWP0JuPX8uYbUVSB-Jo-SxGj8-ZLLpKbnVBSYeILS0fK__h7JjkX7pTW5hbDlE8k34o-bOfpxSWzR_loj-KPmdrhstOZJ4SQX2sfoqWj9GYmX1PiIxL1a71M9I6qh2QH_29xky7VXFwjZB7CPT3M2pMTf-QybOWlFLgvDC5X40dMMvKGmm8baOG1OcWrkoag0lQi9GgBcwOJsV7LwhhdKq26MDotlHK0g4rxg1dDfcihvpIe4hlbJZl3')",
                      }}
                    ></div>
                    <div className="hidden md:block">
                      <p className="text-sm font-medium text-[#111318] dark:text-white">
                        Dr. Adebayo
                      </p>
                      <p className="text-xs text-[#616b89] dark:text-gray-400">
                        Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth bg-[#f8f9fc] dark:bg-[#101422]">
              <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#111318] dark:text-white">
                      Generate Reports
                    </h1>
                    <p className="text-[#616b89] dark:text-gray-400 text-sm mt-1">
                      Access detailed analytics on student performance and
                      attendance.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e2330] border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all shadow-sm">
                      <GoHistory className="text-[20px]" />
                      <span>Recent Reports</span>
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2330] rounded-xl shadow-sm border border-[#dbdee6] dark:border-gray-800 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                        Report Type
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#f8f9fc] dark:bg-gray-800 border-none rounded-lg py-2.5 pl-3 pr-10 text-sm font-medium text-[#111318] dark:text-white focus:ring-2 focus:ring-[#0f38bd]/20 focus:ring-offset-0">
                          <option>Performance Summary</option>
                          <option>Attendance Report</option>
                          <option>At-Risk Student List</option>
                          <option>Grade Distribution</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#616b89]">
                          <MdExpandMore className="text-[20px]" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                        Course
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#f8f9fc] dark:bg-gray-800 border-none rounded-lg py-2.5 pl-3 pr-10 text-sm font-medium text-[#111318] dark:text-white focus:ring-2 focus:ring-[#0f38bd]/20 focus:ring-offset-0">
                          <option>CSC 201 - Data Structures</option>
                          <option>CSC 405 - Artificial Intelligence</option>
                          <option>GNS 101 - Use of English</option>
                          <option>All Courses</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#616b89]">
                          <MdExpandMore className="text-[20px]" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                        Session / Semester
                      </label>
                      <div className="relative">
                        <select className="w-full bg-[#f8f9fc] dark:bg-gray-800 border-none rounded-lg py-2.5 pl-3 pr-10 text-sm font-medium text-[#111318] dark:text-white focus:ring-2 focus:ring-[#0f38bd]/20 focus:ring-offset-0">
                          <option>2023/2024 - 2nd Semester</option>
                          <option>2023/2024 - 1st Semester</option>
                          <option>2022/2023 - 2nd Semester</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-[#616b89]">
                          <MdCalendarMonth className="text-[20px]" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-end">
                      <button className="w-full py-2.5 bg-[#0f38bd] hover:bg-[#0f38bd]/90 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                        <MdPlayArrow className="text-[20px]" />
                        Generate Report
                      </button>
                    </div>
                  </div>
                </div>
                <div className="space-y-6 animate-fade-in">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-[#dbdee6] dark:border-gray-800 pb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                          Generated
                        </span>
                        <span className="text-xs text-[#616b89] dark:text-gray-400">
                          Just now
                        </span>
                      </div>
                      <h2 className="text-xl font-bold text-[#111318] dark:text-white">
                        Performance Summary: CSC 201
                      </h2>
                      <p className="text-sm text-[#616b89] dark:text-gray-400">
                        Data Structures & Algorithms • 2023/2024 Session
                      </p>
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-[#1e2330] border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all">
                        <MdPictureAsPdf className="text-[18px]" />
                        Export PDF
                      </button>
                      <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white dark:bg-[#1e2330] border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all">
                        <MdTableView className="text-[18px]" />
                        Export CSV
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm">
                      <p className="text-[#616b89] dark:text-gray-400 text-xs font-semibold uppercase tracking-wide">
                        Total Students
                      </p>
                      <div className="flex items-end justify-between mt-2">
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white">
                          120
                        </h3>
                        <div className="h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-[#0f38bd] dark:text-blue-400">
                          <MdGroup className="text-[18px]" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm">
                      <p className="text-[#616b89] dark:text-gray-400 text-xs font-semibold uppercase tracking-wide">
                        Average Score
                      </p>
                      <div className="flex items-end justify-between mt-2">
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white">
                          68.5%
                        </h3>
                        <div className="h-8 w-8 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                          <MdTrendingUp className="text-[18px]" />
                        </div>
                      </div>
                      <p className="text-xs text-emerald-600 mt-1">
                        +2.4% vs last year
                      </p>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm">
                      <p className="text-[#616b89] dark:text-gray-400 text-xs font-semibold uppercase tracking-wide">
                        Avg. Attendance
                      </p>
                      <div className="flex items-end justify-between mt-2">
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white">
                          82%
                        </h3>
                        <div className="h-8 w-8 rounded-full bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                          <SlCalender className="text-[18px]" />
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm">
                      <p className="text-[#616b89] dark:text-gray-400 text-xs font-semibold uppercase tracking-wide">
                        At-Risk Students
                      </p>
                      <div className="flex items-end justify-between mt-2">
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white">
                          5
                        </h3>
                        <div className="h-8 w-8 rounded-full bg-red-50 dark:bg-red-900/20 flex items-center justify-center text-red-600 dark:text-red-400">
                          <MdWarning className="text-[18px]" />
                        </div>
                      </div>
                      <p className="text-xs text-red-600 mt-1">
                        Requires attention
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white dark:bg-[#1e2330] rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm p-6">
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-[#111318] dark:text-white">
                          Grade Distribution
                        </h3>
                        <button className="text-xs text-[#0f38bd] font-medium hover:underline">
                          View Details
                        </button>
                      </div>
                      <div className="h-48 flex items-end justify-between gap-4 px-2">
                        <ResponsiveContainer width="100%" height={192}>
                          <BarChart data={gradeData} barGap={8}>
                            <XAxis
                              dataKey="grade"
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 12, fill: "#616b89" }}
                            />
                            <YAxis hide={true} />
                            <Tooltip />
                            <Bar
                              dataKey="students"
                              fill="#0f38bd"
                              radius={[4, 4, 0, 0]}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm p-6 flex flex-col justify-between">
                      <h3 className="font-bold text-[#111318] dark:text-white mb-4">
                        Key Insights
                      </h3>
                      <div className="space-y-4">
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              Top Performance
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              Emeka Obi scored highest (94%) in the recent CA.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              Attendance Drop
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              Attendance fell by 5% in the last 2 weeks.
                            </p>
                          </div>
                        </div>
                        <div className="flex gap-3 items-start">
                          <div className="mt-0.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                          <div>
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              Intervention Needed
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              5 students have missed 3 consecutive classes.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 pt-4 border-t border-[#f0f1f4] dark:border-gray-800">
                        <button className="w-full text-center text-sm font-medium text-[#0f38bd] hover:text-[#0f38bd]/80">
                          Message At-Risk Students
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#dbdee6] dark:border-gray-800 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-[#f0f1f4] dark:border-gray-800 flex justify-between items-center">
                      <h3 className="font-bold text-[#111318] dark:text-white">
                        Detailed Student Data
                      </h3>
                      <button className="text-[#616b89] hover:text-[#0f38bd] transition-colors">
                        <IoFilter />
                      </button>
                    </div>
                    <div className="overflow-x-auto custom-scrollbar">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-[#f8f9fc] dark:bg-gray-800/50 border-b border-[#f0f1f4] dark:border-gray-800">
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              Student Name
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              Matric No.
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              Attendance
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              CA Score (40)
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              Exam (60)
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              Total
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400">
                              Grade
                            </th>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-[#616b89] dark:text-gray-400 text-right">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#f0f1f4] dark:divide-gray-800">
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">
                                  EO
                                </div>
                                <span className="font-medium text-[#111318] dark:text-white">
                                  Emeka Obi
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#616b89] dark:text-gray-400">
                              CSC/2021/045
                            </td>
                            <td className="px-6 py-4">
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                                <div
                                  className="bg-emerald-500 h-1.5 rounded-full"
                                  style={{ width: "95%" }}
                                ></div>
                              </div>
                              <span className="text-xs text-emerald-600 font-medium">
                                95%
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              35
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              54
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-[#111318] dark:text-white">
                              89
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-emerald-600">
                              A
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                Good Standing
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">
                                  FA
                                </div>
                                <span className="font-medium text-[#111318] dark:text-white">
                                  Fatima Ahmed
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#616b89] dark:text-gray-400">
                              CSC/2021/082
                            </td>
                            <td className="px-6 py-4">
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                                <div
                                  className="bg-blue-500 h-1.5 rounded-full"
                                  style={{ width: "82%" }}
                                ></div>
                              </div>
                              <span className="text-xs text-blue-600 font-medium">
                                82%
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              28
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              45
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-[#111318] dark:text-white">
                              73
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-blue-600">
                              B
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                Good Standing
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs font-bold">
                                  CO
                                </div>
                                <span className="font-medium text-[#111318] dark:text-white">
                                  Chinedu Okeke
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#616b89] dark:text-gray-400">
                              CSC/2021/012
                            </td>
                            <td className="px-6 py-4">
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                                <div
                                  className="bg-amber-500 h-1.5 rounded-full"
                                  style={{ width: "65%" }}
                                ></div>
                              </div>
                              <span className="text-xs text-amber-600 font-medium">
                                65%
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              18
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              32
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-[#111318] dark:text-white">
                              50
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-amber-600">
                              C
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400">
                                Warning
                              </span>
                            </td>
                          </tr>
                          <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs font-bold">
                                  YB
                                </div>
                                <span className="font-medium text-[#111318] dark:text-white">
                                  Yusuf Bello
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-[#616b89] dark:text-gray-400">
                              CSC/2021/099
                            </td>
                            <td className="px-6 py-4">
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mb-1">
                                <div
                                  className="bg-red-500 h-1.5 rounded-full"
                                  style={{ width: "45%" }}
                                ></div>
                              </div>
                              <span className="text-xs text-red-600 font-medium">
                                45%
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              12
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-[#111318] dark:text-white">
                              25
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-[#111318] dark:text-white">
                              37
                            </td>
                            <td className="px-6 py-4 text-sm font-bold text-red-600">
                              F
                            </td>
                            <td className="px-6 py-4 text-right">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                                At-Risk
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="px-6 py-4 border-t border-[#f0f1f4] dark:border-gray-800 bg-[#f8f9fc] dark:bg-[#1e2330] flex items-center justify-between">
                      <span className="text-xs text-[#616b89] dark:text-gray-400">
                        Showing 1 to 4 of 120 entries
                      </span>
                      <div className="flex gap-2">
                        <button className="px-3 py-1 text-xs font-medium rounded border border-[#dbdee6] dark:border-gray-700 text-[#616b89] hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors">
                          Previous
                        </button>
                        <button className="px-3 py-1 text-xs font-medium rounded border border-[#dbdee6] dark:border-gray-700 text-[#616b89] hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-8"></div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
