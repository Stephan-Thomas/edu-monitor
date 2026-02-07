"use client";
import { Inter } from "next/font/google";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
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
  MdCalendarToday,
  MdDownload,
  MdTrendingUp,
  MdDns,
  MdPersonAdd,
  MdAddTask,
  MdWarning,
  MdVerifiedUser,
  MdCloudUpload,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../api/axios";
import DashboardSkeleton from "@/app/components/students/DashboardSkeleton";

type User = {
  id: string;
  email: string;
  role: string;
  fullName: string;
  department?: string;
  userId?: string;
  phoneNumber?: string;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const data = [
  { department: "Engineering", gpa: 3.8 },
  { department: "Sciences", gpa: 4.2 },
  { department: "Arts", gpa: 3.5 },
  { department: "Business", gpa: 3.9 },
  { department: "Law", gpa: 4.0 },
];

export default function AdminDashboard() {
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
        // token invalid / expired
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        router.push("/");
      });
  }, []);

  if (loading) return <DashboardSkeleton />;

  if (!user) return null;

  return (
    <html lang="en" className="light">
      <body
        className={`${inter.className} bg-[#f6f6f8] dark:bg-[#101422] text-slate-900 dark:text-white overflow-hidden`}
      >
        <div className="flex h-screen w-full overflow-hidden">
          {/* Sidebar Navigation */}
          <aside className="w-64 bg-[#0f38bd] shrink-0 flex flex-col h-full text-white shadow-xl z-20 hidden md:flex">
            <div className="p-6 flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg backdrop-blur-sm">
                <MdSchool className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight">UniAdmin</h1>
                <p className="text-blue-200 text-xs">System Administrator</p>
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
              <a
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/10 text-white font-medium"
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
            <header className="h-16 bg-white dark:bg-[#1e2330] border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 sm:px-8 z-10">
              <div className="flex items-center gap-4">
                <button className="md:hidden text-slate-500 hover:text-[#0f38bd]">
                  <MdMenu />
                </button>
                {/* Search Bar */}
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64 md:w-80">
                  <MdSearch className="text-slate-400" />
                  <input
                    className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400 ml-2"
                    placeholder="Search students, courses..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center gap-4">
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
            <div className="flex-1 overflow-y-auto p-4 sm:p-8 scroll-smooth">
              <div className="max-w-350 mx-auto space-y-8">
                {/* Page Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Admin Overview
                    </h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">
                      Fall Semester 2024 • Welcome back, Dr. Adegoke
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <MdCalendarToday className="text-[20px]" />
                      Academic Calendar
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-[#0f38bd] text-white rounded-lg text-sm font-medium shadow-md shadow-blue-900/20 hover:bg-blue-700 transition-colors">
                      <MdDownload className="text-[20px]" />
                      Download Report
                    </button>
                  </div>
                </div>
                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Card 1 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-[#0f38bd]">
                        <MdGroup />
                      </div>
                      <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-xs font-medium">
                        <MdTrendingUp className="text-[16px] mr-1" />
                        +5%
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                        Total Students
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        12,450
                      </h3>
                    </div>
                  </div>
                  {/* Card 2 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg text-purple-600">
                        <MdMenuBook />
                      </div>
                      <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-xs font-medium">
                        <MdTrendingUp className="text-[16px] mr-1" />
                        +12%
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                        Active Courses
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        342
                      </h3>
                    </div>
                  </div>
                  {/* Card 3 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-orange-50 dark:bg-orange-900/20 rounded-lg text-orange-600">
                        <MdSchool />
                      </div>
                      <span className="flex items-center text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded text-xs font-medium">
                        <MdTrendingUp className="text-[16px] mr-1" />
                        +2%
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                        Faculty Members
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        850
                      </h3>
                    </div>
                  </div>
                  {/* Card 4 */}
                  <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between h-full">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg text-emerald-600">
                        <MdDns />
                      </div>
                      <span className="flex items-center text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-xs font-medium">
                        Stable
                      </span>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">
                        System Load
                      </p>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Normal
                      </h3>
                    </div>
                  </div>
                </div>
                {/* Main Grid Area */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Chart Section (2/3 width) */}
                  <div className="lg:col-span-2 bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                        Department Performance Index
                      </h3>
                      <select className="bg-slate-50 dark:bg-slate-800 border-none text-sm text-slate-600 dark:text-slate-300 rounded-lg focus:ring-1 focus:ring-[#0f38bd] py-1 px-3">
                        <option>Fall 2024</option>
                        <option>Spring 2024</option>
                      </select>
                    </div>
                    <div className="h-75">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={data}
                          margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                        >
                          <XAxis dataKey="department" tick={{ fontSize: 12 }} />
                          <YAxis domain={[3, 4.5]} tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Bar
                            dataKey="gpa"
                            fill="#0f38bd"
                            radius={[4, 4, 0, 0]}
                          />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  {/* Right Column (1/3 width) */}
                  <div className="flex flex-col gap-6">
                    {/* System Health Widget */}
                    <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm p-6">
                      <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                        System Health
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Server Status
                            </span>
                          </div>
                          <span className="text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
                            Online
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Database
                            </span>
                          </div>
                          <span className="text-xs text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2 py-1 rounded">
                            Connected
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                            <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                              Last Backup
                            </span>
                          </div>
                          <span className="text-xs text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">
                            24h ago
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Quick Actions Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="p-4 bg-[#0f38bd]/5 hover:bg-[#0f38bd]/10 border border-[#0f38bd]/20 rounded-xl flex flex-col items-center justify-center gap-2 text-[#0f38bd] transition-colors">
                        <MdPersonAdd className="text-3xl" />
                        <span className="text-xs font-semibold">
                          New Student
                        </span>
                      </button>
                      <button className="p-4 bg-white dark:bg-[#1e2330] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-600 dark:text-slate-300 transition-colors">
                        <MdAddTask className="text-3xl" />
                        <span className="text-xs font-semibold">
                          Sem Report
                        </span>
                      </button>
                      <button className="p-4 bg-white dark:bg-[#1e2330] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-600 dark:text-slate-300 transition-colors">
                        <MdSchool className="text-3xl" />
                        <span className="text-xs font-semibold">Faculty</span>
                      </button>
                      <button className="p-4 bg-white dark:bg-[#1e2330] hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl flex flex-col items-center justify-center gap-2 text-slate-600 dark:text-slate-300 transition-colors">
                        <MdSettings className="text-3xl" />
                        <span className="text-xs font-semibold">Config</span>
                      </button>
                    </div>
                  </div>
                </div>
                {/* Recent Activity Log */}
                <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                  <div className="px-6 py-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white">
                      Recent Activity
                    </h3>
                    <button className="text-sm text-[#0f38bd] font-medium hover:underline">
                      View All
                    </button>
                  </div>
                  <div className="divide-y divide-slate-100 dark:divide-slate-800">
                    {/* Activity Item 1 */}
                    <div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="bg-blue-100 dark:bg-blue-900/30 text-[#0f38bd] p-2 rounded-full mt-1">
                        <MdCloudUpload className="text-[18px]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                          New Student Registration Batch Uploaded
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Uploaded by System Admin • 245 records added
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap">
                        2 mins ago
                      </span>
                    </div>
                    {/* Activity Item 2 */}
                    <div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 p-2 rounded-full mt-1">
                        <MdWarning className="text-[18px]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                          Grade Dispute Flagged
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Department of Architecture • Student ID: #22091
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap">
                        1 hour ago
                      </span>
                    </div>
                    {/* Activity Item 3 */}
                    <div className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 p-2 rounded-full mt-1">
                        <MdVerifiedUser className="text-[18px]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-slate-800 dark:text-slate-200 font-medium">
                          System Backup Completed
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          Automated daily backup successful
                        </p>
                      </div>
                      <span className="text-xs text-slate-400 whitespace-nowrap">
                        5 hours ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
