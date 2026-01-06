"use client";
import Sidebar from "@/app/components/students/Sidebar";
import Head from "next/head";
import { MdNotifications, MdFilterList, MdDownload } from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Yr 1 Sem 1", gpa: 3.2, avg: 70 },
  { name: "Yr 1 Sem 2", gpa: 3.5, avg: 75 },
  { name: "Yr 2 Sem 1", gpa: 3.8, avg: 82 },
  { name: "Yr 2 Sem 2", gpa: 4.12, avg: 85 },
];

export default function GradesPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Grades Page</title>
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
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: rgba(156, 163, 175, 0.5);
            border-radius: 20px;
          }
        `}</style>
      </Head>
      <section className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex flex-col md:flex-row overflow-hidden text-[#121317] dark:text-white transition-colors duration-200">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-2">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#121317] dark:text-white tracking-tight">
                  My Grades
                </h1>
                <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                  Track your academic performance across semesters.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-[#1e2230] border border-gray-200 dark:border-gray-700 text-[#656d86] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm">
                  <MdNotifications className="text-[20px]" />
                </button>
                <div
                  className="h-10 w-10 rounded-full bg-cover bg-center border border-gray-200 dark:border-gray-700 shadow-sm"
                  data-alt="Portrait of student Chinedu Okafor"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB13xHvdk8TlIrBSeR0-cgXWa9Iyt-4ZXRneKUp533eaEqrLsBzYhccOYfuYruBYeNS87oJ1crs-X06-3aMmjww8SZ9R-YAgPXJIODgKidkJUQ6nUUFYPoASID_V1vh6RHxR6cKmifx6IPE6kEOmnvguIrGaUi6e8VSJn8-I1jrlfiibbOzQgpsNJtrP4BBq-JC8L7oxoeHapjJtwVVAva2GfteMYexGXgpCle0anY7bNTkMAMeESLaWjzGsvfWmjD0GYWdA6fxpvJL')",
                  }}
                ></div>
              </div>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1 space-y-4">
                <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                  <h3 className="text-sm font-semibold text-[#121317] dark:text-white mb-4 flex items-center gap-2">
                    <MdFilterList className="text-[#1e3fae] text-[18px]" />
                    Filter Grades
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1">
                        Academic Year
                      </label>
                      <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#1e3fae]/20 focus:border-[#1e3fae]">
                        <option>2023/2024 (Current)</option>
                        <option>2022/2023</option>
                        <option>2021/2022</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1">
                        Semester
                      </label>
                      <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-[#1e3fae]/20 focus:border-[#1e3fae]">
                        <option>Second Semester</option>
                        <option>First Semester</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1">
                        Course Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        <button className="bg-[#1e3fae] text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm shadow-blue-200 dark:shadow-none">
                          All
                        </button>
                        <button className="bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs px-3 py-1.5 rounded-full font-medium transition">
                          Core
                        </button>
                        <button className="bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 text-xs px-3 py-1.5 rounded-full font-medium transition">
                          Elective
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800">
                  <button className="w-full bg-[#1e3fae] hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition shadow-sm shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2">
                    <MdDownload className="text-[18px]" />
                    Download Semester Result
                  </button>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <p className="text-xs text-[#656d86] dark:text-gray-400 font-medium uppercase tracking-wide mb-3">
                  Semester Overview
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm text-[#121317] dark:text-white">
                        Average Score
                      </span>
                      <span className="text-lg font-bold text-[#07883d] dark:text-emerald-400">
                        76.5%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#07883d] h-full rounded-full"
                        style={{ width: "76.5%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-end mb-1">
                      <span className="text-sm text-[#121317] dark:text-white">
                        Current GPA
                      </span>
                      <span className="text-lg font-bold text-[#1e3fae] dark:text-blue-400">
                        4.12
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-gray-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#1e3fae] h-full rounded-full"
                        style={{ width: "82.4%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white dark:bg-[#1e2230] p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                    Grade Trends
                  </h2>
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-[#1e3fae]"></span>
                    <span className="text-xs text-[#656d86] dark:text-gray-400">
                      GPA
                    </span>
                    <span className="h-3 w-3 rounded-full bg-gray-300 dark:bg-gray-600 ml-2"></span>
                    <span className="text-xs text-[#656d86] dark:text-gray-400">
                      Avg Score
                    </span>
                  </div>
                </div>
                <div className="w-full h-50 relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={data}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#f3f4f6"
                        className="dark:stroke-gray-700"
                      />
                      <XAxis
                        dataKey="name"
                        tick={{ fontSize: 12, fill: "#656d86" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="gpa"
                        stroke="#1e3fae"
                        strokeWidth={3}
                        dot={{
                          r: 5,
                          fill: "#fff",
                          stroke: "#1e3fae",
                          strokeWidth: 2,
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="avg"
                        stroke="#9ca3af"
                        strokeDasharray="4 4"
                        strokeWidth={2}
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#121317] dark:text-white">
                  Course Grades
                </h2>
                <span className="text-sm text-[#656d86] dark:text-gray-400">
                  Showing 3 courses
                </span>
              </div>
              <div className="space-y-4">
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden group">
                  <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900/40 text-[#1e3fae] shrink-0 flex items-center justify-center font-bold text-sm">
                        CSC
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#121317] dark:text-white">
                          Data Structures & Algorithms
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 px-2 py-0.5 rounded">
                            CSC 301
                          </span>
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 px-2 py-0.5 rounded">
                            3 Units
                          </span>
                          <span className="text-xs text-[#656d86] dark:text-gray-500">
                            • Core Course
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end md:self-center">
                      <div className="text-right">
                        <p className="text-xs text-[#656d86] dark:text-gray-400 uppercase tracking-wide font-medium">
                          Total Score
                        </p>
                        <p className="text-2xl font-bold text-[#1e3fae] dark:text-blue-400">
                          82
                          <span className="text-sm font-normal text-gray-500">
                            /100
                          </span>
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-[#07883d]/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#07883d]">
                          A
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50/50 dark:bg-gray-900/30 p-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Attendance
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          5/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#07883d] h-full rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Assignments
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          12/15
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#1e3fae] h-full rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Mid-Semester
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          18/20
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#07883d] h-full rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800 border-l-4 border-l-[#1e3fae]">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Final Exam
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          47/60
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#d97706] h-full rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden group">
                  <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 shrink-0 flex items-center justify-center font-bold text-sm">
                        MTH
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#121317] dark:text-white">
                          Linear Algebra II
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 px-2 py-0.5 rounded">
                            MTH 202
                          </span>
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 px-2 py-0.5 rounded">
                            4 Units
                          </span>
                          <span className="text-xs text-[#656d86] dark:text-gray-500">
                            • Core Course
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end md:self-center">
                      <div className="text-right">
                        <p className="text-xs text-[#656d86] dark:text-gray-400 uppercase tracking-wide font-medium">
                          Total Score
                        </p>
                        <p className="text-2xl font-bold text-[#121317] dark:text-white">
                          68
                          <span className="text-sm font-normal text-gray-500">
                            /100
                          </span>
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#d97706] dark:text-amber-400">
                          B
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50/50 dark:bg-gray-900/30 p-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Attendance
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          4/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#1e3fae] h-full rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Assignments
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          10/15
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#d97706] h-full rounded-full"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Mid-Semester
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          14/20
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#1e3fae] h-full rounded-full"
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800 border-l-4 border-l-[#d97706]">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Final Exam
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          40/60
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#d97706] h-full rounded-full"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden group">
                  <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 shrink-0 flex items-center justify-center font-bold text-sm">
                        GNS
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#121317] dark:text-white">
                          Use of English
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 px-2 py-0.5 rounded">
                            GNS 101
                          </span>
                          <span className="text-xs font-medium bg-gray-100 dark:bg-gray-800 text-[#656d86] dark:text-gray-400 px-2 py-0.5 rounded">
                            2 Units
                          </span>
                          <span className="text-xs text-[#656d86] dark:text-gray-500">
                            • Elective
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 self-end md:self-center">
                      <div className="text-right">
                        <p className="text-xs text-[#656d86] dark:text-gray-400 uppercase tracking-wide font-medium">
                          Total Score
                        </p>
                        <p className="text-2xl font-bold text-[#07883d] dark:text-emerald-400">
                          90
                          <span className="text-sm font-normal text-gray-500">
                            /100
                          </span>
                        </p>
                      </div>
                      <div className="h-12 w-12 rounded-full bg-[#07883d]/10 flex items-center justify-center">
                        <span className="text-xl font-bold text-[#07883d]">
                          A
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50/50 dark:bg-gray-900/30 p-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Attendance
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          5/5
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#07883d] h-full rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Assignments
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          15/15
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#07883d] h-full rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Mid-Semester
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          18/20
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#07883d] h-full rounded-full"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-[#1e2230] p-3 rounded-lg border border-gray-100 dark:border-gray-800 border-l-4 border-l-[#07883d]">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                          Final Exam
                        </span>
                        <span className="text-xs font-bold text-[#121317] dark:text-white">
                          52/60
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#07883d] h-full rounded-full"
                          style={{ width: "86%" }}
                        ></div>
                      </div>
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
