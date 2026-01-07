"use client";
import Sidebar from "@/app/components/students/Sidebar";
import Head from "next/head";
import {
  MdSearch,
  MdDownload,
  MdLocationOn,
  MdEventAvailable,
  MdNotificationsActive,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import DashboardSkeleton from "@/app/components/students/DashboardSkeleton";

type User = {
  id: string;
  email: string;
  fullName: string;
  department?: string;
  matricNumber?: string;
  role?: string;
};

export default function SchedulePage() {
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
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Schedule Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </Head>
      <section className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex flex-col md:flex-row overflow-hidden text-[#121317] dark:text-white transition-colors duration-200">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden bg-[#f6f6f8] dark:bg-[#121520]">
          <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#121317] dark:text-white tracking-tight">
                  Academic Schedule
                </h1>
                <p className="mt-1 text-sm text-[#656d86] dark:text-gray-400">
                  Manage your classes, exams, and academic events.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <div className="flex md:hidden bg-white dark:bg-[#1e2230] border border-gray-200 dark:border-gray-700 rounded-lg p-1 w-full max-w-50">
                  <button className="flex-1 py-1.5 px-3 rounded text-xs font-medium bg-[#1e3fae] text-white shadow-sm">
                    Week
                  </button>
                  <button className="flex-1 py-1.5 px-3 rounded text-xs font-medium text-[#656d86] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800">
                    List
                  </button>
                </div>
                <div className="hidden md:flex items-center gap-3">
                  <div className="flex items-center bg-white dark:bg-[#1e2230] border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2 gap-2 shadow-sm">
                    <MdSearch className="text-gray-400 text-[20px]" />
                    <input
                      className="bg-transparent border-none p-0 text-sm focus:ring-0 w-48 dark:text-white placeholder-gray-400"
                      placeholder="Search course..."
                      type="text"
                    />
                  </div>
                  <button className="bg-[#1e3fae] hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition shadow-sm flex items-center gap-2">
                    <MdDownload className="text-[18px]" />
                    Export PDF
                  </button>
                </div>
              </div>
            </header>
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4 bg-white dark:bg-[#1e2230] p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="flex items-center gap-4 w-full lg:w-auto overflow-x-auto no-scrollbar pb-1 lg:pb-0">
                <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg shrink-0">
                  <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#656d86] dark:text-gray-400 hover:text-[#121317] dark:hover:text-white transition-colors">
                    Month
                  </button>
                  <button className="px-4 py-1.5 rounded-md text-sm font-medium bg-white dark:bg-[#1e2230] text-[#1e3fae] shadow-sm ring-1 ring-black/5 dark:ring-white/10">
                    Week
                  </button>
                  <button className="px-4 py-1.5 rounded-md text-sm font-medium text-[#656d86] dark:text-gray-400 hover:text-[#121317] dark:hover:text-white transition-colors">
                    Day
                  </button>
                </div>
                <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 shrink-0"></div>
                <div className="flex items-center gap-2 shrink-0">
                  <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-[#656d86] dark:text-gray-400">
                    <MdChevronLeft className="text-[20px]" />
                  </button>
                  <span className="text-sm font-semibold text-[#121317] dark:text-white whitespace-nowrap">
                    Oct 14 - Oct 20, 2024
                  </span>
                  <button className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-[#656d86] dark:text-gray-400">
                    <MdChevronRight className="text-[20px]" />
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <select className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm rounded-lg focus:ring-[#1e3fae] focus:border-[#1e3fae] block w-full p-2.5 dark:text-white">
                  <option>2023/2024 - Semester 2</option>
                  <option>2023/2024 - Semester 1</option>
                </select>
                <select className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-sm rounded-lg focus:ring-[#1e3fae] focus:border-[#1e3fae] block w-full p-2.5 dark:text-white">
                  <option>All Courses</option>
                  <option>CSC Only</option>
                  <option>MTH Only</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden flex flex-col min-h-150">
                <div className="grid grid-cols-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                  <div className="p-3 text-xs font-semibold text-gray-500 uppercase text-center border-r border-gray-200 dark:border-gray-700">
                    Time
                  </div>
                  <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700">
                    <span className="block text-xs font-medium text-gray-500 uppercase">
                      Mon
                    </span>
                    <span className="block text-lg font-bold text-[#121317] dark:text-white">
                      14
                    </span>
                  </div>
                  <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700 bg-[#1e3fae]/5">
                    <span className="block text-xs font-medium text-[#1e3fae] uppercase">
                      Tue
                    </span>
                    <span className="block text-lg font-bold text-[#1e3fae]">
                      15
                    </span>
                  </div>
                  <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700">
                    <span className="block text-xs font-medium text-gray-500 uppercase">
                      Wed
                    </span>
                    <span className="block text-lg font-bold text-[#121317] dark:text-white">
                      16
                    </span>
                  </div>
                  <div className="p-3 text-center border-r border-gray-200 dark:border-gray-700">
                    <span className="block text-xs font-medium text-gray-500 uppercase">
                      Thu
                    </span>
                    <span className="block text-lg font-bold text-[#121317] dark:text-white">
                      17
                    </span>
                  </div>
                  <div className="p-3 text-center">
                    <span className="block text-xs font-medium text-gray-500 uppercase">
                      Fri
                    </span>
                    <span className="block text-lg font-bold text-[#121317] dark:text-white">
                      18
                    </span>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto relative no-scrollbar">
                  <div className="grid grid-cols-6 h-200 w-full absolute inset-0 pointer-events-none">
                    <div className="border-r border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30"></div>
                    <div className="border-r border-gray-100 dark:border-gray-800"></div>
                    <div className="border-r border-gray-100 dark:border-gray-800 bg-[#1e3fae]/5"></div>
                    <div className="border-r border-gray-100 dark:border-gray-800"></div>
                    <div className="border-r border-gray-100 dark:border-gray-800"></div>
                    <div></div>
                  </div>
                  <div className="absolute w-full h-200 pointer-events-none flex flex-col justify-between pt-4">
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                    <div className="border-b border-gray-100 dark:border-gray-800 w-full h-20"></div>
                  </div>
                  <div className="absolute left-0 top-0 w-[16.66%] h-200 flex flex-col pt-2 pointer-events-none">
                    <div className="h-20 text-xs text-gray-400 text-center">
                      8:00 AM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      9:00 AM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      10:00 AM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      11:00 AM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      12:00 PM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      1:00 PM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      2:00 PM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      3:00 PM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      4:00 PM
                    </div>
                    <div className="h-20 text-xs text-gray-400 text-center">
                      5:00 PM
                    </div>
                  </div>
                  <div className="absolute inset-0 w-full h-200 grid grid-cols-6 pt-2">
                    <div></div>
                    <div className="relative">
                      <div className="absolute top-20 left-1 right-1 h-38.75 bg-blue-100 dark:bg-blue-900/60 border-l-4 border-[#1e3fae] rounded p-2 text-xs hover:shadow-md transition-shadow cursor-pointer group z-10">
                        <div className="font-bold text-[#1e3fae] dark:text-blue-300 mb-1">
                          CSC 301
                        </div>
                        <div className="text-[#121317] dark:text-white font-medium line-clamp-1">
                          Data Structures
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[#656d86] dark:text-gray-400 text-[10px]">
                          <MdLocationOn className="text-[12px]" /> Hall A
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute top-120 left-1 right-1 h-38.75 bg-indigo-100 dark:bg-indigo-900/60 border-l-4 border-indigo-500 rounded p-2 text-xs hover:shadow-md transition-shadow cursor-pointer z-10">
                        <div className="font-bold text-indigo-700 dark:text-indigo-300 mb-1">
                          MTH 202
                        </div>
                        <div className="text-[#121317] dark:text-white font-medium line-clamp-1">
                          Linear Algebra
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[#656d86] dark:text-gray-400 text-[10px]">
                          <MdLocationOn className="text-[12px]" /> RM 404
                        </div>
                      </div>
                      <div className="absolute top-130 w-full border-t-2 border-red-500 z-20 flex items-center">
                        <div className="h-2 w-2 bg-red-500 rounded-full -ml-1"></div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute top-40 left-1 right-1 h-38.75 bg-green-100 dark:bg-green-900/60 border-l-4 border-[#07883d] rounded p-2 text-xs hover:shadow-md transition-shadow cursor-pointer z-10">
                        <div className="font-bold text-[#07883d] dark:text-emerald-300 mb-1">
                          GNS 101
                        </div>
                        <div className="text-[#121317] dark:text-white font-medium line-clamp-1">
                          Use of English
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[#656d86] dark:text-gray-400 text-[10px]">
                          <MdLocationOn className="text-[12px]" /> AUD 2
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute top-120 left-1 right-1 h-58.75 bg-amber-100 dark:bg-amber-900/60 border-l-4 border-[#d97706] rounded p-2 text-xs hover:shadow-md transition-shadow cursor-pointer z-10">
                        <div className="font-bold text-[#d97706] dark:text-amber-300 mb-1">
                          CSC 301 (Lab)
                        </div>
                        <div className="text-[#121317] dark:text-white font-medium line-clamp-1">
                          Practical Session
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[#656d86] dark:text-gray-400 text-[10px]">
                          <MdLocationOn className="text-[12px]" /> Lab 3
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute top-20 left-1 right-1 h-18.75 bg-purple-100 dark:bg-purple-900/60 border-l-4 border-purple-500 rounded p-2 text-xs hover:shadow-md transition-shadow cursor-pointer z-10">
                        <div className="font-bold text-purple-700 dark:text-purple-300 mb-1">
                          MTH 202
                        </div>
                        <div className="text-[#121317] dark:text-white font-medium line-clamp-1">
                          Tutorial
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white mb-4 flex items-center gap-2">
                    <MdEventAvailable className="text-[#1e3fae]" />
                    Upcoming Today
                  </h2>
                  <div className="space-y-4">
                    <div className="relative pl-4 border-l-2 border-[#1e3fae]">
                      <div className="absolute -left-1.25 top-0 h-2.5 w-2.5 rounded-full bg-[#1e3fae] ring-4 ring-white dark:ring-[#1e2230]"></div>
                      <p className="text-xs font-semibold text-[#1e3fae] mb-0.5">
                        2:00 PM - 4:00 PM
                      </p>
                      <h3 className="text-sm font-bold text-[#121317] dark:text-white">
                        Linear Algebra
                      </h3>
                      <p className="text-xs text-[#656d86] dark:text-gray-400">
                        MTH 202 • Room 404
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <div className="h-5 w-5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-[10px] text-gray-600 font-bold">
                          JD
                        </div>
                        <span className="text-xs text-[#656d86] dark:text-gray-500">
                          Dr. J. Doe
                        </span>
                      </div>
                    </div>
                    <div className="relative pl-4 border-l-2 border-gray-200 dark:border-gray-700 opacity-60">
                      <div className="absolute -left-1.25 top-0 h-2.5 w-2.5 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[#1e2230]"></div>
                      <p className="text-xs font-semibold text-gray-500 mb-0.5">
                        10:00 AM - 12:00 PM
                      </p>
                      <h3 className="text-sm font-bold text-[#121317] dark:text-white">
                        Library Study
                      </h3>
                      <p className="text-xs text-[#656d86] dark:text-gray-400">
                        Personal • Main Library
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white mb-4 flex items-center gap-2">
                    <MdNotificationsActive className="text-[#d97706]" />
                    Important
                  </h2>
                  <div className="space-y-3">
                    <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-lg border border-amber-100 dark:border-amber-800/50">
                      <div className="flex justify-between items-start mb-1">
                        <span className="bg-[#d97706] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          EXAM
                        </span>
                        <span className="text-xs font-medium text-[#d97706] dark:text-amber-400">
                          In 5 Days
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-[#121317] dark:text-white">
                        CSC 301 Mid-Semester
                      </h3>
                      <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                        Saturday, Oct 20 • 9:00 AM
                      </p>
                      <p className="text-xs text-[#656d86] dark:text-gray-400">
                        Main Auditorium
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg border border-red-100 dark:border-red-800/50">
                      <div className="flex justify-between items-start mb-1">
                        <span className="bg-[#dc2626] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                          DEADLINE
                        </span>
                        <span className="text-xs font-medium text-[#dc2626] dark:text-red-400">
                          Tomorrow
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-[#121317] dark:text-white">
                        Course Registration
                      </h3>
                      <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                        Portal closes at 11:59 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h3 className="text-sm font-semibold text-[#121317] dark:text-white mb-3">
                    Legend
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-xs text-[#656d86] dark:text-gray-400">
                      <span className="w-3 h-3 rounded bg-blue-500 mr-2"></span>{" "}
                      Lecture
                    </div>
                    <div className="flex items-center text-xs text-[#656d86] dark:text-gray-400">
                      <span className="w-3 h-3 rounded bg-indigo-500 mr-2"></span>{" "}
                      Tutorial
                    </div>
                    <div className="flex items-center text-xs text-[#656d86] dark:text-gray-400">
                      <span className="w-3 h-3 rounded bg-amber-500 mr-2"></span>{" "}
                      Practical / Lab
                    </div>
                    <div className="flex items-center text-xs text-[#656d86] dark:text-gray-400">
                      <span className="w-3 h-3 rounded bg-green-500 mr-2"></span>{" "}
                      General Studies
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center md:text-left text-xs text-[#656d86] dark:text-gray-500 pb-8">
              © 2024 Federal University Portal. All rights reserved. System
              V1.2.0
            </footer>
          </div>
        </main>
      </section>
    </>
  );
}
