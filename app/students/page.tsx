"use client";
import Head from "next/head";
import {
  MdSchool,
  MdBook,
  MdNotifications,
  MdDownload,
  MdGrade,
  MdCheckCircle,
  MdEvent,
  MdPerson,
  MdShield,
  MdArrowForward,
} from "react-icons/md";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../api/axios";
import Sidebar from "../components/students/Sidebar";
import DashboardSkeleton from "../components/students/DashboardSkeleton";

const data = [
  { name: "Yr 1 Sem 1", gpa: 3.2 },
  { name: "Yr 1 Sem 2", gpa: 3.5 },
  { name: "Yr 2 Sem 1", gpa: 3.8 },
  { name: "Yr 2 Sem 2", gpa: 4.12 },
];

type User = {
  id: string;
  email: string;
  fullName: string;
  department?: string;
  matricNumber?: string;
  role?: string;
};

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [sessionExpired, setSessionExpired] = useState(false);
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
        setSessionExpired(true);
        setLoading(false);

        setTimeout(() => {
          router.push("/");
        }, 6000);
      });
  }, []);

  if (sessionExpired) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f6f6f8] dark:bg-[#121520]">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="h-14 w-14 rounded-full border-4 border-red-500/30 border-t-red-500 animate-spin" />
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
            Session expired
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Redirecting you to login…
          </p>
        </div>
      </div>
    );
  }

  if (loading) return <DashboardSkeleton />;

  if (!user) return null;

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Dashboard</title>
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
        `}</style>
      </Head>
      <section className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex flex-col md:flex-row overflow-hidden text-[#121317] dark:text-white transition-colors duration-200">
        {/* Sidebar Navigation */}
        <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
            {/* Header Section */}
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm"
                  data-alt="Portrait of student Chinedu Okafor"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB13xHvdk8TlIrBSeR0-cgXWa9Iyt-4ZXRneKUp533eaEqrLsBzYhccOYfuYruBYeNS87oJ1crs-X06-3aMmjww8SZ9R-YAgPXJIODgKidkJUQ6nUUFYPoASID_V1vh6RHxR6cKmifx6IPE6kEOmnvguIrGaUi6e8VSJn8-I1jrlfiibbOzQgpsNJtrP4BBq-JC8L7oxoeHapjJtwVVAva2GfteMYexGXgpCle0anY7bNTkMAMeESLaWjzGsvfWmjD0GYWdA6fxpvJL')",
                  }}
                ></div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold uppercase text-[#121317] dark:text-white tracking-tight">
                    Welcome back, {user.fullName}!
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-[#656d86] dark:text-gray-400">
                    <span>Computer Science</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span>Year 3</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span>2023/2024 Session</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button className="flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-[#1e2230] border border-gray-200 dark:border-gray-700 text-[#656d86] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm">
                  <MdNotifications className="text-[20px]" />
                </button>
                <button className="bg-[#1e3fae] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition shadow-sm shadow-blue-200 dark:shadow-none flex items-center gap-2">
                  <MdDownload className="text-[18px]" />
                  Download Transcript
                </button>
              </div>
            </header>
            {/* Stats Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Attendance */}
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdPerson className="text-6xl text-[#1e3fae]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Overall Attendance
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-[#121317] dark:text-white">
                      92%
                    </h3>
                    <span className="text-xs font-medium text-[#07883d] bg-[#07883d]/10 px-1.5 py-0.5 rounded">
                      +2%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-auto overflow-hidden">
                  <div
                    className="bg-[#1e3fae] h-full rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
              {/* CGPA */}
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdSchool className="text-6xl text-[#07883d]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Current CGPA
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-3xl font-bold text-[#121317] dark:text-white">
                      4.12
                    </h3>
                    <span className="text-sm text-[#656d86] dark:text-gray-500">
                      / 5.00
                    </span>
                  </div>
                </div>
                <p className="text-xs text-[#07883d] font-medium mt-auto">
                  Second Class Upper Division
                </p>
              </div>
              {/* Risk Status */}
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdShield className="text-6xl text-[#07883d]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Risk Status
                  </p>
                  <h3 className="text-3xl font-bold text-[#07883d] dark:text-emerald-400">
                    Low Risk
                  </h3>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#07883d] animate-pulse"></span>
                  <p className="text-xs text-[#656d86] dark:text-gray-400">
                    On track for graduation
                  </p>
                </div>
              </div>
              {/* Enrolled Courses */}
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdBook className="text-6xl text-[#d97706]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Enrolled Courses
                  </p>
                  <h3 className="text-3xl font-bold text-[#121317] dark:text-white">
                    6 Active
                  </h3>
                </div>
                <p className="text-xs text-[#656d86] dark:text-gray-400 mt-auto">
                  First Semester
                </p>
              </div>
            </section>
            {/* Middle Section: Chart & Feed */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Performance Chart */}
              <div className="lg:col-span-2 bg-white dark:bg-[#1e2230] p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                    Academic Performance Trend
                  </h2>
                  <select className="bg-gray-50 dark:bg-gray-800 border-none text-xs font-medium text-[#656d86] dark:text-gray-300 rounded-lg py-1 px-3 cursor-pointer outline-none focus:ring-1 focus:ring-[#1e3fae]">
                    <option>Last 4 Semesters</option>
                    <option>All Time</option>
                  </select>
                </div>
                <div className="flex-1 w-full min-h-62.5 relative">
                  <LineChart width={800} height={300} data={data}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      stroke="#e5e7eb"
                      className="dark:stroke-gray-700"
                    />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 12, fill: "#656d86" }}
                    />
                    <YAxis domain={[0, 5]} hide={true} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="gpa"
                      stroke="#1e3fae"
                      fillOpacity={0.2}
                      fill="#1e3fae"
                    />
                    <Line
                      type="monotone"
                      dataKey="gpa"
                      stroke="#1e3fae"
                      strokeWidth={3}
                      dot={{
                        r: 6,
                        fill: "#fff",
                        stroke: "#1e3fae",
                        strokeWidth: 3,
                      }}
                    />
                  </LineChart>
                </div>
              </div>
              {/* Recent Activity Feed */}
              <div className="lg:col-span-1 bg-white dark:bg-[#1e2230] p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                    Recent Activity
                  </h2>
                  <button className="text-[#1e3fae] text-xs font-semibold hover:underline">
                    View All
                  </button>
                </div>
                <div className="space-y-6 overflow-y-auto pr-2 custom-scrollbar">
                  {/* Item 1 */}
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 h-8 w-8 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[#1e3fae] dark:text-blue-300">
                      <MdGrade className="text-[18px]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-[#121317] dark:text-white">
                        Grade Posted: CSC 301
                      </p>
                      <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                        Your result for Data Structures mid-semester test is
                        out.
                      </p>
                      <p className="text-[10px] text-[#656d86] dark:text-gray-500 mt-2 font-medium">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  {/* Item 2 */}
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 h-8 w-8 rounded-full bg-green-50 dark:bg-green-900/30 flex items-center justify-center text-[#07883d] dark:text-emerald-400">
                      <MdCheckCircle className="text-[18px]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-[#121317] dark:text-white">
                        Attendance Recorded
                      </p>
                      <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                        Marked present for GNS 101 Lecture.
                      </p>
                      <p className="text-[10px] text-[#656d86] dark:text-gray-500 mt-2 font-medium">
                        Yesterday, 2:00 PM
                      </p>
                    </div>
                  </div>
                  {/* Item 3 */}
                  <div className="flex gap-4">
                    <div className="mt-1 shrink-0 h-8 w-8 rounded-full bg-amber-50 dark:bg-amber-900/30 flex items-center justify-center text-[#d97706] dark:text-amber-400">
                      <MdEvent className="text-[18px]" />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-sm font-medium text-[#121317] dark:text-white">
                        Exam Schedule Updated
                      </p>
                      <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                        Final timetable for Semester 2 has been released.
                      </p>
                      <p className="text-[10px] text-[#656d86] dark:text-gray-500 mt-2 font-medium">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* My Courses Section */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#121317] dark:text-white">
                  My Courses
                </h2>
                <a
                  className="text-[#1e3fae] hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                  href="/students/classes"
                >
                  View all courses
                  <MdArrowForward className="text-[16px]" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Course Card 1 */}
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-[#1e3fae] flex items-center justify-center font-bold text-sm">
                      CSC
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-[#07883d] dark:text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Grade: A
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#121317] dark:text-white group-hover:text-[#1e3fae] transition-colors">
                    Data Structures
                  </h3>
                  <p className="text-sm text-[#656d86] dark:text-gray-400 mb-4">
                    CSC 301 • 3 Units
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#656d86] dark:text-gray-500 mb-2">
                    <span>Attendance</span>
                    <span className="font-semibold text-[#121317] dark:text-white">
                      95%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#1e3fae] h-full rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>
                {/* Course Card 2 */}
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                      MTH
                    </div>
                    <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Grade: B
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#121317] dark:text-white group-hover:text-[#1e3fae] transition-colors">
                    Linear Algebra
                  </h3>
                  <p className="text-sm text-[#656d86] dark:text-gray-400 mb-4">
                    MTH 202 • 4 Units
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#656d86] dark:text-gray-500 mb-2">
                    <span>Attendance</span>
                    <span className="font-semibold text-[#121317] dark:text-white">
                      80%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#d97706] h-full rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                {/* Course Card 3 */}
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 hover:shadow-md transition-shadow cursor-pointer group">
                  <div className="flex justify-between items-start mb-4">
                    <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-400 flex items-center justify-center font-bold text-sm">
                      GNS
                    </div>
                    <span className="bg-green-100 dark:bg-green-900/30 text-[#07883d] dark:text-emerald-400 text-xs font-semibold px-2.5 py-1 rounded-full">
                      Grade: A
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#121317] dark:text-white group-hover:text-[#1e3fae] transition-colors">
                    Use of English
                  </h3>
                  <p className="text-sm text-[#656d86] dark:text-gray-400 mb-4">
                    GNS 101 • 2 Units
                  </p>
                  <div className="flex items-center justify-between text-xs text-[#656d86] dark:text-gray-500 mb-2">
                    <span>Attendance</span>
                    <span className="font-semibold text-[#121317] dark:text-white">
                      100%
                    </span>
                  </div>
                  <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#07883d] h-full rounded-full"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
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
