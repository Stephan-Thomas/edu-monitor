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
  MdHistory,
  MdSave,
  MdAddPhotoAlternate,
  MdAccountBalance,
  MdNotificationsActive,
  MdManageAccounts,
  MdSecurity,
  MdWarning,
  MdSupervisorAccount,
} from "react-icons/md";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function AdminSystemSettings() {
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
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-blue-100 hover:bg-white/5 hover:text-white transition-colors"
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
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-white/10 text-white font-medium"
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
            <header className="h-16 bg-white dark:bg-[#1e2330] border-b border-slate-200 dark:border-slate-700 flex items-center justify-between px-4 sm:px-8 z-10 flex-shrink-0">
              <div className="flex items-center gap-4">
                <button className="md:hidden text-slate-500 hover:text-[#0f38bd]">
                  <MdMenu />
                </button>
                <h2 className="hidden lg:block text-xl font-bold text-slate-900 dark:text-white">
                  System Settings
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64 md:w-80 border border-transparent focus-within:border-[#0f38bd]/50 focus-within:bg-white dark:focus-within:bg-slate-900 transition-all">
                  <MdSearch className="text-slate-400" />
                  <input
                    className="bg-transparent border-none focus:ring-0 text-sm w-full text-slate-700 dark:text-slate-200 placeholder-slate-400 ml-2"
                    placeholder="Search settings..."
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
              <div className="max-w-[1400px] mx-auto space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                      Configuration
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400">
                      Manage global system parameters and security policies.
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
                      <MdHistory className="text-[20px]" />
                      Audit Log
                    </button>
                    <button className="flex items-center gap-2 px-5 py-2.5 bg-[#0f38bd] text-white rounded-lg text-sm font-semibold shadow-lg shadow-blue-900/20 hover:bg-blue-700 transition-colors">
                      <MdSave className="text-[20px]" />
                      Save Changes
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-6">
                    <section className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-100 dark:bg-blue-900/30 text-[#0f38bd] p-2 rounded-lg">
                            <MdAccountBalance />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Institution Profile
                          </h4>
                        </div>
                      </div>
                      <div className="p-6 space-y-6">
                        <div className="flex items-start gap-6">
                          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-lg border-2 border-dashed border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center text-slate-400 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors shrink-0">
                            <MdAddPhotoAlternate className="text-3xl mb-1" />
                            <span className="text-[10px] font-medium">
                              Upload Logo
                            </span>
                          </div>
                          <div className="flex-1 space-y-4">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Institution Name
                              </label>
                              <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]"
                                placeholder="University of Lagos"
                                type="text"
                                value="University of Lagos"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                                Motto
                              </label>
                              <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]"
                                placeholder="In Deed and In Truth"
                                type="text"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Official Email
                            </label>
                            <input
                              className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]"
                              type="email"
                              value="registrar@unilag.edu.ng"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Support Contact
                            </label>
                            <input
                              className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]"
                              type="tel"
                              value="+234 800 000 0000"
                            />
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-center gap-3">
                          <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 p-2 rounded-lg">
                            <MdSchool />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Academic Configuration
                          </h4>
                        </div>
                      </div>
                      <div className="p-6 space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Current Academic Session
                            </label>
                            <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]">
                              <option>2023/2024</option>
                              <option>2024/2025</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                              Current Semester
                            </label>
                            <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-[#0f38bd] focus:border-[#0f38bd]">
                              <option>First Semester</option>
                              <option>Second Semester</option>
                            </select>
                          </div>
                        </div>
                        <div>
                          <h5 className="text-sm font-semibold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                            Grading Scale Thresholds (CGPA)
                            <span
                              className="material-symbols-outlined text-slate-400 text-sm cursor-help"
                              title="Minimum CGPA required for each classification"
                            >
                              info
                            </span>
                          </h5>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">
                                First Class (Min)
                              </label>
                              <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
                                type="number"
                                value="4.50"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">
                                2nd Class Upper
                              </label>
                              <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
                                type="number"
                                value="3.50"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">
                                2nd Class Lower
                              </label>
                              <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
                                type="number"
                                value="2.40"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-slate-500 mb-1">
                                Pass
                              </label>
                              <input
                                className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white text-sm"
                                type="number"
                                value="1.50"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-center gap-3">
                          <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 p-2 rounded-lg">
                            <MdNotificationsActive />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Notifications Configuration
                          </h4>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-slate-500">
                            Global Status
                          </span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              checked
                              className="sr-only peer"
                              type="checkbox"
                            />
                            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                          </label>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              Student At-Risk Alerts
                            </p>
                            <p className="text-xs text-slate-500">
                              Notify advisors when student attendance drops
                              below 70%
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              checked
                              className="sr-only peer"
                              type="checkbox"
                            />
                            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#0f38bd]"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-slate-800">
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              System Maintenance Alerts
                            </p>
                            <p className="text-xs text-slate-500">
                              Notify all users 24h before scheduled downtime
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              checked
                              className="sr-only peer"
                              type="checkbox"
                            />
                            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#0f38bd]"></div>
                          </label>
                        </div>
                        <div className="flex items-center justify-between py-2">
                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              Grade Release Notification
                            </p>
                            <p className="text-xs text-slate-500">
                              Automatically email students when results are
                              published
                            </p>
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input className="sr-only peer" type="checkbox" />
                            <div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#0f38bd]"></div>
                          </label>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="space-y-6">
                    <section className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-center gap-3">
                          <div className="bg-orange-100 dark:bg-orange-900/30 text-orange-600 p-2 rounded-lg">
                            <MdManageAccounts />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            User Roles
                          </h4>
                        </div>
                      </div>
                      <div className="p-6 space-y-4">
                        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#0f38bd]/50 cursor-pointer transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="font-semibold text-sm text-slate-900 dark:text-white">
                              Lecturers
                            </h5>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                              Standard
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mb-2">
                            Can upload grades, view assigned courses, and mark
                            attendance.
                          </p>
                          <div className="text-xs text-[#0f38bd] font-medium">
                            Edit Permissions →
                          </div>
                        </div>
                        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#0f38bd]/50 cursor-pointer transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="font-semibold text-sm text-slate-900 dark:text-white">
                              Students
                            </h5>
                            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
                              Restricted
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mb-2">
                            Can view personal results, course registration, and
                            timetable.
                          </p>
                          <div className="text-xs text-[#0f38bd] font-medium">
                            Edit Permissions →
                          </div>
                        </div>
                        <div className="p-3 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-[#0f38bd]/50 cursor-pointer transition-colors">
                          <div className="flex justify-between items-center mb-1">
                            <h5 className="font-semibold text-sm text-slate-900 dark:text-white">
                              HODs
                            </h5>
                            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-medium">
                              Advanced
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mb-2">
                            Full access to department data, lecturer oversight,
                            and reports.
                          </p>
                          <div className="text-xs text-[#0f38bd] font-medium">
                            Edit Permissions →
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="bg-white dark:bg-[#1e2330] rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
                      <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
                        <div className="flex items-center gap-3">
                          <div className="bg-red-100 dark:bg-red-900/30 text-red-600 p-2 rounded-lg">
                            <MdSecurity />
                          </div>
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                            Security
                          </h4>
                        </div>
                      </div>
                      <div className="p-6 space-y-5">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                            Password Policy
                          </label>
                          <select className="w-full rounded-lg border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:ring-red-500 focus:border-red-500">
                            <option>
                              Strict (Min 12 chars, Special chars)
                            </option>
                            <option>
                              Moderate (Min 8 chars, Alphanumeric)
                            </option>
                            <option>Basic (Min 6 chars)</option>
                          </select>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="mt-1">
                            <input
                              className="w-4 h-4 text-red-600 border-slate-300 rounded focus:ring-red-500"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium text-slate-900 dark:text-white">
                              Enforce 2FA for Staff
                            </label>
                            <p className="text-xs text-slate-500">
                              Require Two-Factor Authentication for all
                              administrative accounts.
                            </p>
                          </div>
                        </div>
                        <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-900/30 rounded-lg p-3">
                          <div className="flex gap-2">
                            <MdWarning className="text-amber-600 text-lg" />
                            <p className="text-xs text-amber-800 dark:text-amber-200">
                              Session timeout is set to{" "}
                              <strong>15 minutes</strong> for inactive admin
                              users.
                            </p>
                          </div>
                        </div>
                        <button className="w-full py-2 border border-red-200 text-red-600 hover:bg-red-50 dark:border-red-900/50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors">
                          View Access Logs
                        </button>
                      </div>
                    </section>
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
