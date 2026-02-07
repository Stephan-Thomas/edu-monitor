"use client";
import { Inter } from "next/font/google";
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
  MdUploadFile,
  MdPersonAdd,
  MdFilterListOff,
  MdChevronLeft,
  MdChevronRight,
  MdTrendingUp,
  MdAnalytics,
  MdReport,
  MdMoreVert,
} from "react-icons/md";

import StudentsCard from "./StudentsCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../api/axios";
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

type Student = {
  id: string;
  email: string;
  role: string;
  fullName: string;
  department?: string;
  userId?: string;
  level?: string;
  phoneNumber?: string;
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function AdminStudentsManagement() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/");
      return;
    }

    Promise.all([api.get("/auth/me"), api.get("/users/students")])
      .then(([userRes, studentsRes]) => {
        setUser(userRes.data.user);
        setStudents(studentsRes.data.students || []);
        setLoading(false);
      })
      .catch(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("accessToken");
        router.push("/");
      });
  }, [router]);

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
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/10 text-white font-medium"
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
                <h2 className="hidden lg:block text-xl font-bold text-slate-900 dark:text-white">
                  Students Management
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64 md:w-80 border border-transparent focus-within:border-[#0f38bd]/50 focus-within:bg-white dark:focus-within:bg-slate-900 transition-all">
                  <MdSearch className="text-slate-400" />
                  <input
                    className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400 ml-2"
                    placeholder="Search by name or matric number..."
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
              <div className="max-w-[1400px] mx-auto space-y-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Student Directory
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Manage, monitor and update institutional student records.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <MdUploadFile className="text-[20px]" />
                      Bulk Import
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0f38bd] text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-colors">
                      <MdPersonAdd className="text-[20px]" />
                      Register New Student
                    </button>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2330] p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                        Faculty
                      </label>
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]">
                        <option>All Faculties</option>
                        <option>Engineering</option>
                        <option>Social Sciences</option>
                        <option>Medical Sciences</option>
                        <option>Law</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                        Department
                      </label>
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]">
                        <option>All Departments</option>
                        <option>Comp. Science</option>
                        <option>Civil Engr.</option>
                        <option>Economics</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                        Level
                      </label>
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]">
                        <option>All Levels</option>
                        <option>100L</option>
                        <option>200L</option>
                        <option>300L</option>
                        <option>400L</option>
                        <option>500L</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1 uppercase tracking-wider">
                        Risk Status
                      </label>
                      <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]">
                        <option>All Statuses</option>
                        <option>High Risk (Low GPA)</option>
                        <option>Medium Risk</option>
                        <option>On Track</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors border border-slate-200 dark:border-slate-600">
                        <MdFilterListOff className="text-[18px]" />
                        Clear Filters
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Student
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Matric Number
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Department
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-center">
                            Level
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-6 py-4 text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-right">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                        {students.map((item) => (
                          <StudentsCard key={item.id} student={item} />
                        ))}
                        {students.length === 0 && !loading && (
                          <tr>
                            <td
                              colSpan={6}
                              className="text-center text-slate-500 py-4"
                            >
                              No students found.
                            </td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                  </div>
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Showing{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        1
                      </span>{" "}
                      to{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        5
                      </span>{" "}
                      of{" "}
                      <span className="font-semibold text-slate-900 dark:text-white">
                        12,450
                      </span>{" "}
                      entries
                    </p>
                    <div className="flex items-center gap-2">
                      <button
                        className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        disabled
                      >
                        <MdChevronLeft className="text-[20px]" />
                      </button>
                      <div className="flex items-center gap-1">
                        <button className="w-8 h-8 rounded-lg bg-[#0f38bd] text-white text-sm font-bold">
                          1
                        </button>
                        <button className="w-8 h-8 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-sm font-medium transition-colors">
                          2
                        </button>
                        <button className="w-8 h-8 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-sm font-medium transition-colors">
                          3
                        </button>
                        <span className="px-1 text-slate-400">...</span>
                        <button className="w-8 h-8 rounded-lg hover:bg-white dark:hover:bg-slate-700 text-sm font-medium transition-colors">
                          2490
                        </button>
                      </div>
                      <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-white dark:hover:bg-slate-700 transition-colors">
                        <MdChevronRight className="text-[20px]" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 rounded-full flex items-center justify-center">
                      <MdTrendingUp />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
                        On Track
                      </p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        82%
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-amber-50 dark:bg-amber-900/20 text-amber-600 rounded-full flex items-center justify-center">
                      <MdAnalytics />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
                        Medium Risk
                      </p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        12%
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center">
                      <MdReport />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-tight">
                        High Risk
                      </p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">
                        6%
                      </p>
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
