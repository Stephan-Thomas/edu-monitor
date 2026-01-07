"use client";
import Head from "next/head";
import {
  MdGroup,
  MdMenu,
  MdNotifications,
  MdSearch,
  MdMoreHoriz,
  MdQrCode2,
  MdGrade,
  MdOutlineUpdate,
  MdEvent,
  MdAssignment,
  MdVerified,
} from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoWarning } from "react-icons/io5";
import Sidebar from "@/app/components/lecturer/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../../api/axios";

type User = { id: string; fullName?: string };

export default function LecturerCoursesPage() {
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
        <title>Lecturer Courses Page</title>
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
                  My Courses
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative hidden md:flex items-center">
                  <MdSearch className="absolute left-3 text-[#616b89]" />
                  <input
                    className="pl-10 pr-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-64 border-none text-[#111318] dark:text-white placeholder-[#616b89]"
                    placeholder="Search courses..."
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
                      data-alt="Profile picture of Dr. Adebayo, an African man with glasses smiling"
                      style={{
                        backgroundImage:
                          "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF9hnP_0HdZB8qChSE4Z7bJWP0JuPX8uYbUVSB-Jo-SxGj8-ZLLpKbnVBSYeILS0fK__h7JjkX7pTW5hbDlE8k34o-bOfpxSWzR_loj-KPmdrhstOZJ4SQX2sfoqWj9GYmX1PiIxL1a71M9I6qh2QH_29xky7VXFwjZB7CPT3M2pMTf-QybOWlFLgvDC5X40dMMvKGmm8baOG1OcWrkoag0lQi9GgBcwOJsV7LwhhdKq26MDotlHK0g4rxg1dDfcihvpIe4hlbJZl3')",
                      }}
                    ></div>
                    <div className="hidden md:block">
                      <p className="text-sm font-medium text-[#111318] dark:text-white">
                        {user?.fullName ?? "Lecturer"}
                      </p>
                      <p className="text-xs text-[#616b89] dark:text-gray-400">
                        Computer Science
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth bg-[#f6f6f8] dark:bg-[#101422]">
              <div className="max-w-7xl mx-auto space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white tracking-tight">
                      Assigned Courses
                    </h1>
                    <p className="text-[#616b89] dark:text-gray-400 mt-1">
                      Manage your active subjects and access student performance
                      data for the 2023/2024 session.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <div className="relative md:hidden w-full">
                      <MdSearch className="absolute left-3 top-2.5 text-[#616b89]" />
                      <input
                        className="pl-10 pr-4 py-2 bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-full text-[#111318] dark:text-white placeholder-[#616b89]"
                        placeholder="Search..."
                        type="text"
                      />
                    </div>
                    <select className="bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white text-sm rounded-lg focus:ring-[#0f38bd] focus:border-[#0f38bd] block w-full sm:w-48 p-2.5">
                      <option selected>All Semesters</option>
                      <option value="1">First Semester</option>
                      <option value="2">Second Semester</option>
                    </select>
                    <select className="bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white text-sm rounded-lg focus:ring-[#0f38bd] focus:border-[#0f38bd] block w-full sm:w-48 p-2.5">
                      <option selected>Active Courses</option>
                      <option value="archived">Archived</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  <div className="flex flex-col bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-28 bg-linear-to-r from-blue-600 to-blue-800 p-5 relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-semibold tracking-wide">
                          CSC 201
                        </span>
                        <button className="text-white/80 hover:text-white transition-colors">
                          <MdMoreHoriz />
                        </button>
                      </div>
                      <h3 className="text-white font-bold text-xl leading-snug line-clamp-2">
                        Data Structures & Algorithms
                      </h3>
                    </div>
                    <div className="p-5 flex-1 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                          <MdGroup className="text-[20px]" />
                          <span className="font-medium">120 Students</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                          Active
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start gap-2">
                          <MdOutlineUpdate className="text-[#0f38bd] dark:text-blue-400 text-sm mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-[#111318] dark:text-white uppercase tracking-wider mb-0.5">
                              Recent Activity
                            </p>
                            <p className="text-sm text-[#616b89] dark:text-gray-400">
                              Mid-semester grades uploaded 2 days ago.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGroup className="text-[18px]" />
                          Students
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGrade className="text-[18px]" />
                          Grades
                        </button>
                        <button className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-[#0f38bd] hover:bg-[#0f38bd]/90 rounded-lg shadow-sm transition-all">
                          <MdQrCode2 className="text-[20px]" />
                          Generate Attendance Code
                        </button>
                        <button className="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0f38bd] dark:hover:text-blue-400 transition-colors py-1 flex items-center justify-center gap-1">
                          View Course Reports{" "}
                          <IoIosArrowRoundForward className="text-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-28 bg-linear-to-r from-gray-700 to-gray-900 p-5 relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-semibold tracking-wide">
                          CSC 405
                        </span>
                        <button className="text-white/80 hover:text-white transition-colors">
                          <MdMoreHoriz />
                        </button>
                      </div>
                      <h3 className="text-white font-bold text-xl leading-snug line-clamp-2">
                        Artificial Intelligence
                      </h3>
                    </div>
                    <div className="p-5 flex-1 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                          <MdGroup className="text-[20px]" />
                          <span className="font-medium">85 Students</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-semibold">
                          Warning
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start gap-2">
                          <IoWarning className="text-amber-600 dark:text-amber-400 text-sm mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-[#111318] dark:text-white uppercase tracking-wider mb-0.5">
                              Recent Activity
                            </p>
                            <p className="text-sm text-[#616b89] dark:text-gray-400">
                              5 students flagged for low attendance this week.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGroup className="text-[18px]" />
                          Students
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGrade className="text-[18px]" />
                          Grades
                        </button>
                        <button className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-[#0f38bd] hover:bg-[#0f38bd]/90 rounded-lg shadow-sm transition-all">
                          <MdQrCode2 className="text-[20px]" />
                          Generate Attendance Code
                        </button>
                        <button className="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0f38bd] dark:hover:text-blue-400 transition-colors py-1 flex items-center justify-center gap-1">
                          View Course Reports{" "}
                          <IoIosArrowRoundForward className="text-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-28 bg-linear-to-r from-teal-600 to-teal-800 p-5 relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-semibold tracking-wide">
                          GNS 101
                        </span>
                        <button className="text-white/80 hover:text-white transition-colors">
                          <MdMoreHoriz />
                        </button>
                      </div>
                      <h3 className="text-white font-bold text-xl leading-snug line-clamp-2">
                        Use of English
                      </h3>
                    </div>
                    <div className="p-5 flex-1 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                          <MdGroup className="text-[20px]" />
                          <span className="font-medium">450 Students</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                          Active
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start gap-2">
                          <MdEvent className="text-gray-400 text-sm mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-[#111318] dark:text-white uppercase tracking-wider mb-0.5">
                              Recent Activity
                            </p>
                            <p className="text-sm text-[#616b89] dark:text-gray-400">
                              Class cancelled for Nov 14th.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGroup className="text-[18px]" />
                          Students
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGrade className="text-[18px]" />
                          Grades
                        </button>
                        <button className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-[#0f38bd] hover:bg-[#0f38bd]/90 rounded-lg shadow-sm transition-all">
                          <MdQrCode2 className="text-[20px]" />
                          Generate Attendance Code
                        </button>
                        <button className="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0f38bd] dark:hover:text-blue-400 transition-colors py-1 flex items-center justify-center gap-1">
                          View Course Reports{" "}
                          <IoIosArrowRoundForward className="text-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-28 bg-linear-to-r from-purple-600 to-purple-800 p-5 relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-semibold tracking-wide">
                          CSC 304
                        </span>
                        <button className="text-white/80 hover:text-white transition-colors">
                          <MdMoreHoriz />
                        </button>
                      </div>
                      <h3 className="text-white font-bold text-xl leading-snug line-clamp-2">
                        Software Engineering
                      </h3>
                    </div>
                    <div className="p-5 flex-1 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                          <MdGroup className="text-[20px]" />
                          <span className="font-medium">95 Students</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                          Active
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start gap-2">
                          <MdAssignment className="text-purple-600 dark:text-purple-400 text-sm mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-[#111318] dark:text-white uppercase tracking-wider mb-0.5">
                              Recent Activity
                            </p>
                            <p className="text-sm text-[#616b89] dark:text-gray-400">
                              Project specifications released.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGroup className="text-[18px]" />
                          Students
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGrade className="text-[18px]" />
                          Grades
                        </button>
                        <button className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-[#0f38bd] hover:bg-[#0f38bd]/90 rounded-lg shadow-sm transition-all">
                          <MdQrCode2 className="text-[20px]" />
                          Generate Attendance Code
                        </button>
                        <button className="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0f38bd] dark:hover:text-blue-400 transition-colors py-1 flex items-center justify-center gap-1">
                          View Course Reports{" "}
                          <IoIosArrowRoundForward className="text-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                    <div className="h-28 bg-linear-to-r from-indigo-600 to-indigo-800 p-5 relative">
                      <div className="flex justify-between items-start mb-2">
                        <span className="bg-white/20 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded font-semibold tracking-wide">
                          MTH 101
                        </span>
                        <button className="text-white/80 hover:text-white transition-colors">
                          <MdMoreHoriz />
                        </button>
                      </div>
                      <h3 className="text-white font-bold text-xl leading-snug line-clamp-2">
                        General Mathematics 1
                      </h3>
                    </div>
                    <div className="p-5 flex-1 flex flex-col gap-5">
                      <div className="flex justify-between items-center text-sm">
                        <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                          <MdGroup className="text-[20px]" />
                          <span className="font-medium">200 Students</span>
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-semibold">
                          Completed
                        </div>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3 border border-gray-100 dark:border-gray-800">
                        <div className="flex items-start gap-2">
                          <MdVerified className="text-gray-400 text-sm mt-0.5" />
                          <div>
                            <p className="text-xs font-semibold text-[#111318] dark:text-white uppercase tracking-wider mb-0.5">
                              Recent Activity
                            </p>
                            <p className="text-sm text-[#616b89] dark:text-gray-400">
                              Final grades approved by Senate.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mt-auto">
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGroup className="text-[18px]" />
                          Students
                        </button>
                        <button className="flex items-center justify-center gap-2 py-2 px-3 text-sm font-medium text-[#111318] dark:text-white bg-white dark:bg-[#1e2330] border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                          <MdGrade className="text-[18px]" />
                          Grades
                        </button>
                        <button
                          className="col-span-2 flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-medium text-white bg-gray-400 cursor-not-allowed rounded-lg shadow-sm"
                          disabled
                        >
                          <MdQrCode2 className="text-[20px]" />
                          Generate Attendance Code
                        </button>
                        <button className="col-span-2 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-[#0f38bd] dark:hover:text-blue-400 transition-colors py-1 flex items-center justify-center gap-1">
                          View Course Reports{" "}
                          <IoIosArrowRoundForward className="text-[14px]" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-12"></div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
