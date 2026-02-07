import { Inter } from "next/font/google";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
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
  MdPersonAdd,
  MdMoreVert,
  MdArrowForward,
  MdArrowUpward,
  MdGroups,
  MdSupervisorAccount,
} from "react-icons/md";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const facultyData = [
  { faculty: "Science", staff: 320, color: "#3b82f6" },
  { faculty: "Engr.", staff: 240, color: "#a855f7" },
  { faculty: "Soc. Sci.", staff: 280, color: "#22c55e" },
  { faculty: "Law", staff: 140, color: "#f97316" },
  { faculty: "Arts", staff: 180, color: "#ec4899" },
  { faculty: "Edu.", staff: 80, color: "#14b8a6" },
];

export default function AdminLecturersManagement() {
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
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/10 text-white font-medium"
                href="#"
              >
                <MdSupervisorAccount />
                <span>Lecturers</span>
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
                  Lecturers Management
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64 md:w-80 border border-transparent focus-within:border-[#0f38bd]/50 focus-within:bg-white dark:focus-within:bg-slate-900 transition-all">
                  <MdSearch className="text-slate-400" />
                  <input
                    className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400 ml-2"
                    placeholder="Search lecturers..."
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
                      Lecturers
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Manage academic staff assignments and course loads.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0f38bd] text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-colors">
                      <MdPersonAdd className="text-[20px]" />
                      Register New Lecturer
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg">
                          AB
                        </div>
                        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                          <MdMoreVert />
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        Dr. Amina Bello
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        Senior Lecturer •{" "}
                        <span className="text-slate-700 dark:text-slate-300">
                          Computer Science
                        </span>
                      </p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          Active Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            CSC 201
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            CSC 405
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            CSC 411
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                          Total Students
                        </span>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          450
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-[#0f38bd] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                        href="#"
                      >
                        View Profile <MdArrowForward className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-lg">
                          CO
                        </div>
                        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                          <MdMoreVert />
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        Prof. Chinedu Okeke
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        Professor •{" "}
                        <span className="text-slate-700 dark:text-slate-300">
                          Electrical Engineering
                        </span>
                      </p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          Active Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            EEE 310
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            EEE 502
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                          Total Students
                        </span>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          320
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-[#0f38bd] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                        href="#"
                      >
                        View Profile <MdArrowForward className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center font-bold text-lg">
                          YS
                        </div>
                        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                          <MdMoreVert />
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        Mr. Yakubu Sani
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        Lecturer I •{" "}
                        <span className="text-slate-700 dark:text-slate-300">
                          Economics
                        </span>
                      </p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          Active Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            ECO 101
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            ECO 204
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            ECO 301
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            +1
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                          Total Students
                        </span>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          600
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-[#0f38bd] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                        href="#"
                      >
                        View Profile <MdArrowForward className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 flex items-center justify-center font-bold text-lg">
                          FA
                        </div>
                        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                          <MdMoreVert />
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        Dr. Funke Adebayo
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        Associate Professor •{" "}
                        <span className="text-slate-700 dark:text-slate-300">
                          Microbiology
                        </span>
                      </p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          Active Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            MCB 301
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            MCB 402
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                          Total Students
                        </span>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          180
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-[#0f38bd] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                        href="#"
                      >
                        View Profile <MdArrowForward className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center font-bold text-lg">
                          GO
                        </div>
                        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                          <MdMoreVert />
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        Mrs. Grace Okafor
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        Lecturer II •{" "}
                        <span className="text-slate-700 dark:text-slate-300">
                          Law
                        </span>
                      </p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          Active Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            LAW 202
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            LAW 205
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                          Total Students
                        </span>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          210
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-[#0f38bd] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                        href="#"
                      >
                        View Profile <MdArrowForward className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col justify-between h-full group">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-lg">
                          IM
                        </div>
                        <button className="text-slate-400 hover:text-[#0f38bd] transition-colors">
                          <MdMoreVert />
                        </button>
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-0.5">
                        Dr. Ibrahim Musa
                      </h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mb-4">
                        Senior Lecturer •{" "}
                        <span className="text-slate-700 dark:text-slate-300">
                          Theatre Arts
                        </span>
                      </p>
                      <div className="mb-6">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">
                          Active Courses
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            THA 105
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            THA 210
                          </span>
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded border border-slate-200 dark:border-slate-700 font-medium">
                            THA 401
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="text-xs text-slate-500 uppercase font-bold tracking-wider">
                          Total Students
                        </span>
                        <p className="text-xl font-bold text-slate-900 dark:text-white">
                          340
                        </p>
                      </div>
                      <a
                        className="text-sm font-medium text-[#0f38bd] hover:underline flex items-center gap-1 group-hover:gap-2 transition-all"
                        href="#"
                      >
                        View Profile <MdArrowForward className="text-[16px]" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1 space-y-4">
                    <div className="bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                      <h5 className="text-sm font-semibold text-slate-500 uppercase tracking-tight mb-2">
                        Overall Staffing
                      </h5>
                      <div className="flex items-end gap-3">
                        <span className="text-4xl font-bold text-slate-900 dark:text-white">
                          1,240
                        </span>
                        <span className="text-sm font-medium text-green-500 flex items-center mb-1">
                          <MdArrowUpward className="text-[18px]" />
                          +15 new
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-2">
                        Active lecturers across 8 faculties
                      </p>
                    </div>
                    <div className="bg-[#0f38bd] p-6 rounded-xl shadow-lg shadow-blue-900/20 text-white relative overflow-hidden">
                      <div className="relative z-10">
                        <h5 className="text-sm font-semibold text-blue-200 uppercase tracking-tight mb-2">
                          Largest Department
                        </h5>
                        <p className="text-2xl font-bold mb-1">
                          Computer Science
                        </p>
                        <p className="text-sm text-blue-100">
                          45 Active Lecturers
                        </p>
                      </div>
                      <div className="absolute -right-4 -bottom-4 text-blue-600/30">
                        <MdGroups className="text-[120px]" />
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 bg-white dark:bg-[#1e2330] p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-bold text-slate-900 dark:text-white">
                        Lecturer Distribution by Faculty
                      </h4>
                      <button className="text-sm text-[#0f38bd] font-medium hover:underline">
                        View Full Report
                      </button>
                    </div>
                    <div className="flex-1 h-48 sm:h-56">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={facultyData}
                          margin={{ top: 20, right: 0, left: 0, bottom: 0 }}
                        >
                          <XAxis dataKey="faculty" tick={{ fontSize: 12 }} />
                          <YAxis domain={[0, 350]} tick={{ fontSize: 12 }} />
                          <Tooltip />
                          <Bar dataKey="staff" radius={[4, 4, 0, 0]}>
                            {facultyData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
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
