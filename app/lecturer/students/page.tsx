"use client";
import Head from "next/head";
import {
  MdGroup,
  MdMenu,
  MdNotifications,
  MdSearch,
  MdVisibility,
  MdEditNote,
  MdFlag,
} from "react-icons/md";
import { IoWarning } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import Sidebar from "@/app/components/lecturer/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../api/axios";

type User = { id: string; fullName?: string };

export default function LecturerStudentsPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return router.push("/");
    api
      .get("/auth/me")
      .then((res) => setUser(res.data.user))
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        router.push("/");
      });
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lecturer Students Page</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .icon-fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
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
                  Student Directory
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative hidden md:flex items-center">
                  <MdSearch className="absolute left-3 text-[#616b89]" />
                  <input
                    className="pl-10 pr-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-64 border-none text-[#111318] dark:text-white placeholder-[#616b89]"
                    placeholder="Search students..."
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
                      data-alt="Profile picture of Dr. Adebayo"
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
            <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 scroll-smooth">
              <div className="max-w-7xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-[#111318] dark:text-white">
                      All Students
                    </h1>
                    <p className="text-[#616b89] dark:text-gray-400 mt-1 text-sm">
                      Manage and monitor students across your assigned courses.
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0f38bd]/10 text-[#0f38bd] dark:text-blue-400 text-sm font-medium border border-[#0f38bd]/20">
                      <MdGroup className="text-[18px]" />
                      450 Total
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm font-medium border border-red-200 dark:border-red-800">
                      <IoWarning className="text-[18px]" />5 At-Risk
                    </span>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2330] p-4 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm">
                  <div className="flex flex-col md:flex-row gap-4 justify-between">
                    <div className="flex flex-col md:flex-row gap-3 flex-1">
                      <div className="relative flex-1 max-w-md">
                        <MdSearch className="absolute left-3 top-2.5 text-[#616b89]" />
                        <input
                          className="pl-10 pr-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-full border-none text-[#111318] dark:text-white placeholder-[#616b89]"
                          placeholder="Search by name or matric no..."
                          type="text"
                        />
                      </div>
                      <div className="flex gap-3">
                        <select className="px-4 py-2 bg-white dark:bg-gray-800 border border-[#dbdee6] dark:border-gray-700 rounded-lg text-sm text-[#111318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f38bd] cursor-pointer">
                          <option value="">All Courses</option>
                          <option value="CSC201">CSC 201</option>
                          <option value="CSC405">CSC 405</option>
                          <option value="GNS101">GNS 101</option>
                        </select>
                        <select className="px-4 py-2 bg-white dark:bg-gray-800 border border-[#dbdee6] dark:border-gray-700 rounded-lg text-sm text-[#111318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#0f38bd] cursor-pointer">
                          <option value="">Risk Status</option>
                          <option value="low">Low Risk</option>
                          <option value="moderate">Moderate</option>
                          <option value="high">Critical</option>
                        </select>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1e2330] border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all">
                        <AiOutlineDownload className="text-[20px]" />
                        <span className="hidden sm:inline">Export</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden hidden md:block">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-[#f9fafb] dark:bg-gray-900/50 border-b border-[#f0f1f4] dark:border-gray-800">
                      <tr>
                        <th className="px-6 py-4 font-semibold text-[#111318] dark:text-white">
                          Student Info
                        </th>
                        <th className="px-6 py-4 font-semibold text-[#111318] dark:text-white">
                          Matric No
                        </th>
                        <th className="px-6 py-4 font-semibold text-[#111318] dark:text-white">
                          Courses Enrolled
                        </th>
                        <th className="px-6 py-4 font-semibold text-[#111318] dark:text-white">
                          Performance
                        </th>
                        <th className="px-6 py-4 font-semibold text-[#111318] dark:text-white">
                          Risk Status
                        </th>
                        <th className="px-6 py-4 font-semibold text-[#111318] dark:text-white text-right">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f0f1f4] dark:divide-gray-800">
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0f38bd] dark:text-blue-400 font-bold">
                              OO
                            </div>
                            <div>
                              <p className="font-medium text-[#111318] dark:text-white">
                                Oluwaseun Ojo
                              </p>
                              <p className="text-xs text-[#616b89] dark:text-gray-400">
                                Comp. Science
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#616b89] dark:text-gray-300 font-mono text-xs">
                          CSC/20/1045
                        </td>
                        <td className="px-6 py-4 text-[#111318] dark:text-gray-300">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              CSC 201
                            </span>
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              CSC 405
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[78%]"></div>
                            </div>
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                              78%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-800/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Good Standing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="View Profile"
                            >
                              <MdVisibility className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="Record Grades"
                            >
                              <MdEditNote className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
                              title="Flag Attendance"
                            >
                              <MdFlag className="text-[20px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">
                              CI
                            </div>
                            <div>
                              <p className="font-medium text-[#111318] dark:text-white">
                                Chinedu Ibe
                              </p>
                              <p className="text-xs text-[#616b89] dark:text-gray-400">
                                CSC/20/1102
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#616b89] dark:text-gray-300 font-mono text-xs">
                          CSC/20/1102
                        </td>
                        <td className="px-6 py-4 text-[#111318] dark:text-gray-300">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              CSC 201
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-red-500 w-[42%]"></div>
                            </div>
                            <span className="text-xs font-medium text-red-600 dark:text-red-400">
                              42%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-medium border border-red-100 dark:border-red-800/30">
                            <IoWarning className="text-[14px]" />
                            Critical Risk
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="View Profile"
                            >
                              <MdVisibility className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="Record Grades"
                            >
                              <MdEditNote className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-amber-600 bg-amber-50 dark:bg-amber-900/20 rounded-lg transition-colors"
                              title="Flag Attendance"
                            >
                              <MdFlag className="text-[20px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-700 dark:text-amber-400 font-bold">
                              AM
                            </div>
                            <div>
                              <p className="font-medium text-[#111318] dark:text-white">
                                Amina Mohammed
                              </p>
                              <p className="text-xs text-[#616b89] dark:text-gray-400">
                                CSC/21/2056
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#616b89] dark:text-gray-300 font-mono text-xs">
                          CSC/21/2056
                        </td>
                        <td className="px-6 py-4 text-[#111318] dark:text-gray-300">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              GNS 101
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-amber-500 w-[58%]"></div>
                            </div>
                            <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                              58%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-medium border border-amber-100 dark:border-amber-800/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                            Low Attendance
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="View Profile"
                            >
                              <MdVisibility className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="Record Grades"
                            >
                              <MdEditNote className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
                              title="Flag Attendance"
                            >
                              <MdFlag className="text-[20px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 font-bold">
                              KA
                            </div>
                            <div>
                              <p className="font-medium text-[#111318] dark:text-white">
                                Kemi Adeyemi
                              </p>
                              <p className="text-xs text-[#616b89] dark:text-gray-400">
                                SWE/20/0045
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-[#616b89] dark:text-gray-300 font-mono text-xs">
                          SWE/20/0045
                        </td>
                        <td className="px-6 py-4 text-[#111318] dark:text-gray-300">
                          <div className="flex flex-wrap gap-1">
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              CSC 405
                            </span>
                            <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700">
                              GNS 101
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-full bg-emerald-500 w-[85%]"></div>
                            </div>
                            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                              85%
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium border border-emerald-100 dark:border-emerald-800/30">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Good Standing
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="View Profile"
                            >
                              <MdVisibility className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-[#0f38bd] hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                              title="Record Grades"
                            >
                              <MdEditNote className="text-[20px]" />
                            </button>
                            <button
                              className="p-1.5 text-[#616b89] hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20 rounded-lg transition-colors"
                              title="Flag Attendance"
                            >
                              <MdFlag className="text-[20px]" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="px-6 py-4 border-t border-[#f0f1f4] dark:border-gray-800 flex items-center justify-between">
                    <p className="text-sm text-[#616b89] dark:text-gray-400">
                      Showing{" "}
                      <span className="font-medium text-[#111318] dark:text-white">
                        1-4
                      </span>{" "}
                      of{" "}
                      <span className="font-medium text-[#111318] dark:text-white">
                        450
                      </span>{" "}
                      students
                    </p>
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 border border-[#dbdee6] dark:border-gray-700 rounded text-sm text-[#616b89] hover:bg-gray-50 dark:hover:bg-gray-800 disabled:opacity-50 transition-colors"
                        disabled
                      >
                        Previous
                      </button>
                      <button className="px-3 py-1 border border-[#dbdee6] dark:border-gray-700 rounded text-sm text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Next
                      </button>
                    </div>
                  </div>
                </div>
                <div className="md:hidden space-y-4">
                  <div className="bg-white dark:bg-[#1e2330] p-4 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-[#0f38bd] dark:text-blue-400 font-bold">
                          OO
                        </div>
                        <div>
                          <p className="font-medium text-[#111318] dark:text-white">
                            Oluwaseun Ojo
                          </p>
                          <p className="text-xs text-[#616b89] dark:text-gray-400">
                            CSC/20/1045
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                        Good
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-1">
                      <div>
                        <p className="text-[#616b89] text-xs">Performance</p>
                        <p className="font-medium text-[#111318] dark:text-white">
                          78%
                        </p>
                      </div>
                      <div>
                        <p className="text-[#616b89] text-xs">Course</p>
                        <p className="font-medium text-[#111318] dark:text-white">
                          CSC 201
                        </p>
                      </div>
                    </div>
                    <div className="flex border-t border-[#f0f1f4] dark:border-gray-800 pt-3 mt-1 gap-2">
                      <button className="flex-1 py-1.5 text-xs font-medium text-[#111318] dark:text-white border border-[#dbdee6] dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Profile
                      </button>
                      <button className="flex-1 py-1.5 text-xs font-medium text-white bg-[#0f38bd] rounded hover:bg-[#0f38bd]/90 transition-colors">
                        Grade
                      </button>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] p-4 rounded-xl border border-red-200 dark:border-red-900/50 shadow-sm flex flex-col gap-3 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-red-100 dark:bg-red-900/20 rounded-full"></div>
                    <div className="flex justify-between items-start relative">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-400 font-bold">
                          CI
                        </div>
                        <div>
                          <p className="font-medium text-[#111318] dark:text-white">
                            Chinedu Ibe
                          </p>
                          <p className="text-xs text-[#616b89] dark:text-gray-400">
                            CSC/20/1102
                          </p>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 text-xs font-medium">
                        Critical
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm mt-1">
                      <div>
                        <p className="text-[#616b89] text-xs">Performance</p>
                        <p className="font-medium text-red-600 dark:text-red-400">
                          42%
                        </p>
                      </div>
                      <div>
                        <p className="text-[#616b89] text-xs">Course</p>
                        <p className="font-medium text-[#111318] dark:text-white">
                          CSC 201
                        </p>
                      </div>
                    </div>
                    <div className="flex border-t border-[#f0f1f4] dark:border-gray-800 pt-3 mt-1 gap-2">
                      <button className="flex-1 py-1.5 text-xs font-medium text-[#111318] dark:text-white border border-[#dbdee6] dark:border-gray-600 rounded hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                        Profile
                      </button>
                      <button className="flex-1 py-1.5 text-xs font-medium text-white bg-[#0f38bd] rounded hover:bg-[#0f38bd]/90 transition-colors">
                        Grade
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
