"use client";
import Head from "next/head";
import {
  MdSchool,
  MdDashboard,
  MdBook,
  MdGroup,
  MdBarChart,
  MdSettings,
  MdLogout,
  MdMenu,
  MdNotifications,
  MdSearch,
  MdQrCode,
  MdEditNote,
  MdAnalytics,
  MdWarning,
  MdGppMaybe,
  MdNotificationsActive,
  MdRefresh,
  MdMoreHoriz,
} from "react-icons/md";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";
import Sidebar from "../components/lecturer/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "../api/axios";

type User = {
  id: string;
  fullName?: string;
  role?: string;
};

export default function LecturerDashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }

    api
      .get("/auth/me")
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        router.push("/");
      });
  }, []);

  if (loading) return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lecturer Dashboard</title>
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
      <section className="bg-[#f6f6f8] dark:bg-[#101422] font-['Inter'] text-[#111318] dark:text-gray-100 overflow-hidden">
        <div className="flex h-screen w-full overflow-hidden">
          {/* Sidebar Navigation */}
          <Sidebar />
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Top Navigation Bar */}
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
                  Dashboard Overview
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative hidden md:flex items-center">
                  <MdSearch className="absolute left-3 text-[#616b89]" />
                  <input
                    className="pl-10 pr-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-64 border-none text-[#111318] dark:text-white placeholder-[#616b89]"
                    placeholder="Search students, courses..."
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
            {/* Scrollable Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 scroll-smooth">
              <div className="max-w-7xl mx-auto space-y-8">
                {/* Profile Header & Session Info */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white tracking-tight">
                      Welcome back, {user?.fullName ?? "Lecturer"} 👋
                    </h1>
                    <p className="text-[#616b89] dark:text-gray-400 mt-1">
                      2023/2024 Session • Second Semester • Week 8
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0f38bd] hover:bg-[#0f38bd]/90 text-white text-sm font-medium rounded-lg shadow-sm transition-all">
                      <MdQrCode className="text-[20px]" />
                      <span>Attendance Code</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1e2330] border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all">
                      <MdEditNote className="text-[20px]" />
                      <span>Enter Grades</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#1e2330] border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all">
                      <MdAnalytics className="text-[20px]" />
                      <span>View Reports</span>
                    </button>
                  </div>
                </div>
                {/* Alert Banner (Conditional) */}
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800/30 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg text-red-600 dark:text-red-400 shrink-0">
                      <MdWarning />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111318] dark:text-white text-sm">
                        Critical Attention Required
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-0.5">
                        5 students in CSC 201 have fallen below the 70%
                        attendance threshold this week.
                      </p>
                    </div>
                  </div>
                  <button className="text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 whitespace-nowrap">
                    Review Students →
                  </button>
                </div>
                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Stat 1 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[#616b89] dark:text-gray-400 text-sm font-medium">
                          Total Students
                        </p>
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white mt-1">
                          450
                        </h3>
                      </div>
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-[#0f38bd] dark:text-blue-400">
                        <MdGroup />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                      <IoIosTrendingUp className="text-[16px]" />
                      <span>+12% vs last semester</span>
                    </div>
                  </div>
                  {/* Stat 2 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[#616b89] dark:text-gray-400 text-sm font-medium">
                          Flagged Attendance
                        </p>
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white mt-1">
                          12
                        </h3>
                      </div>
                      <div className="p-2 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-amber-600 dark:text-amber-400">
                        <MdNotificationsActive />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 dark:text-amber-400 text-xs font-medium">
                      <span>2 new alerts today</span>
                    </div>
                  </div>
                  {/* Stat 3 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[#616b89] dark:text-gray-400 text-sm font-medium">
                          Avg. Performance
                        </p>
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white mt-1">
                          68%
                        </h3>
                      </div>
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600 dark:text-purple-400">
                        <LuChartNoAxesCombined />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                      <IoIosTrendingUp className="text-[16px]" />
                      <span>+1.5% improvement</span>
                    </div>
                  </div>
                  {/* Stat 4 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm flex flex-col justify-between h-32">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[#616b89] dark:text-gray-400 text-sm font-medium">
                          At-Risk Students
                        </p>
                        <h3 className="text-3xl font-bold text-[#111318] dark:text-white mt-1">
                          5
                        </h3>
                      </div>
                      <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg text-red-600 dark:text-red-400">
                        <MdGppMaybe />
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-red-600 dark:text-red-400 text-xs font-medium">
                      <span>Action recommended</span>
                    </div>
                  </div>
                </div>
                {/* Dashboard Bottom Section */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                  {/* Course Grid (Takes 2 columns on large screens) */}
                  <div className="xl:col-span-2 flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-[#111318] dark:text-white">
                        Active Courses
                      </h2>
                      <a
                        className="text-[#0f38bd] dark:text-blue-400 text-sm font-medium hover:underline"
                        href="#"
                      >
                        View All Courses
                      </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Course Card 1 */}
                      <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden group hover:border-[#0f38bd]/30 transition-all">
                        <div
                          className="h-24 bg-linear-to-r from-blue-600 to-blue-800 relative p-4 flex flex-col justify-between"
                          data-alt="Abstract blue gradient background for course header"
                        >
                          <div className="flex justify-between items-start">
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium">
                              CSC 201
                            </span>
                            <button className="text-white/80 hover:text-white">
                              <MdMoreHoriz />
                            </button>
                          </div>
                          <h3 className="text-white font-bold text-lg truncate">
                            Data Structures & Algorithms
                          </h3>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                              <MdGroup className="text-[18px]" />
                              <span>120 Students</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              Active Session
                            </div>
                          </div>
                          <div className="h-px bg-[#f0f1f4] dark:bg-gray-800"></div>
                          <div className="flex gap-2">
                            <button className="flex-1 py-2 text-sm font-medium text-[#111318] dark:text-white bg-[#f0f1f4] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                              Manage
                            </button>
                            <button className="flex-1 py-2 text-sm font-medium text-white bg-[#0f38bd] hover:bg-[#0f38bd]/90 rounded-lg transition-colors">
                              Attendance
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Course Card 2 */}
                      <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden group hover:border-[#0f38bd]/30 transition-all">
                        <div
                          className="h-24 bg-linear-to-r from-gray-700 to-gray-900 relative p-4 flex flex-col justify-between"
                          data-alt="Abstract dark gradient background for course header"
                        >
                          <div className="flex justify-between items-start">
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium">
                              CSC 405
                            </span>
                            <button className="text-white/80 hover:text-white">
                              <MdMoreHoriz />
                            </button>
                          </div>
                          <h3 className="text-white font-bold text-lg truncate">
                            Artificial Intelligence
                          </h3>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                              <MdGroup className="text-[18px]" />
                              <span>85 Students</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium">
                              No Class Today
                            </div>
                          </div>
                          <div className="h-px bg-[#f0f1f4] dark:bg-gray-800"></div>
                          <div className="flex gap-2">
                            <button className="flex-1 py-2 text-sm font-medium text-[#111318] dark:text-white bg-[#f0f1f4] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                              Manage
                            </button>
                            <button className="flex-1 py-2 text-sm font-medium text-[#111318] dark:text-white border border-[#dbdee6] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                      {/* Course Card 3 */}
                      <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm overflow-hidden group hover:border-[#0f38bd]/30 transition-all">
                        <div
                          className="h-24 bg-linear-to-r from-teal-600 to-teal-800 relative p-4 flex flex-col justify-between"
                          data-alt="Abstract teal gradient background for course header"
                        >
                          <div className="flex justify-between items-start">
                            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded font-medium">
                              GNS 101
                            </span>
                            <button className="text-white/80 hover:text-white">
                              <MdMoreHoriz />
                            </button>
                          </div>
                          <h3 className="text-white font-bold text-lg truncate">
                            Use of English
                          </h3>
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                          <div className="flex justify-between items-center text-sm">
                            <div className="flex items-center gap-2 text-[#616b89] dark:text-gray-400">
                              <MdGroup className="text-[18px]" />
                              <span>450 Students</span>
                            </div>
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-medium">
                              <MdWarning className="text-[14px]" />
                              Low Attendance
                            </div>
                          </div>
                          <div className="h-px bg-[#f0f1f4] dark:bg-gray-800"></div>
                          <div className="flex gap-2">
                            <button className="flex-1 py-2 text-sm font-medium text-[#111318] dark:text-white bg-[#f0f1f4] dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors">
                              Manage
                            </button>
                            <button className="flex-1 py-2 text-sm font-medium text-[#111318] dark:text-white border border-[#dbdee6] dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors">
                              Details
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Timeline (Takes 1 column) */}
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-lg font-bold text-[#111318] dark:text-white">
                        Recent Activities
                      </h2>
                      <button className="p-2 text-[#616b89] hover:text-[#0f38bd] transition-colors">
                        <MdRefresh />
                      </button>
                    </div>
                    <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm p-5">
                      <div className="relative pl-6 border-l border-[#f0f1f4] dark:border-gray-800 space-y-8">
                        {/* Timeline Item 1 */}
                        <div className="relative">
                          <span className="absolute -left-7.25 top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-white dark:ring-[#1e2330]"></span>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              Attendance Generated
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              Successfully generated QR code for CSC 201.
                            </p>
                            <span className="text-xs text-[#616b89] mt-1">
                              10 mins ago
                            </span>
                          </div>
                        </div>
                        {/* Timeline Item 2 */}
                        <div className="relative">
                          <span className="absolute -left-7.25 top-1 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-[#1e2330]"></span>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              Grades Uploaded
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              Mid-semester test scores updated for CSC 405.
                            </p>
                            <span className="text-xs text-[#616b89] mt-1">
                              2 hours ago
                            </span>
                          </div>
                        </div>
                        {/* Timeline Item 3 */}
                        <div className="relative">
                          <span className="absolute -left-7.25 top-1 h-3 w-3 rounded-full bg-amber-500 ring-4 ring-white dark:ring-[#1e2330]"></span>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              System Alert
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              5 new students flagged as 'At-Risk'.
                            </p>
                            <span className="text-xs text-[#616b89] mt-1">
                              Yesterday, 4:30 PM
                            </span>
                          </div>
                        </div>
                        {/* Timeline Item 4 */}
                        <div className="relative">
                          <span className="absolute -left-7.25 top-1 h-3 w-3 rounded-full bg-gray-300 ring-4 ring-white dark:ring-[#1e2330]"></span>
                          <div className="flex flex-col gap-1">
                            <p className="text-sm font-medium text-[#111318] dark:text-white">
                              Report Downloaded
                            </p>
                            <p className="text-xs text-[#616b89] dark:text-gray-400">
                              Monthly attendance summary PDF.
                            </p>
                            <span className="text-xs text-[#616b89] mt-1">
                              Yesterday, 10:00 AM
                            </span>
                          </div>
                        </div>
                      </div>
                      <button className="w-full mt-6 text-sm text-center text-[#0f38bd] dark:text-blue-400 font-medium hover:underline">
                        View All History
                      </button>
                    </div>
                  </div>
                </div>
                <div className="h-8"></div> {/* Bottom spacer */}
              </div>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
