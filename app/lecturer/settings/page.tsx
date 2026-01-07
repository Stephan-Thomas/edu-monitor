"use client";
import Head from "next/head";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "../../api/axios";
import {
  MdMenu,
  MdNotifications,
  MdSearch,
  MdPhotoCamera,
  MdVerifiedUser,
  MdLightMode,
  MdDarkMode,
} from "react-icons/md";
import { FaUserLarge } from "react-icons/fa6";
import { AiOutlineLock } from "react-icons/ai";
import { MdOutlineTune } from "react-icons/md";
import { CgLaptop } from "react-icons/cg";
import Sidebar from "@/app/components/lecturer/Sidebar";

export default function LecturerSettingsPage() {
  const pathName = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{ fullName?: string } | null>(null);

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
        <title>Lecturer Settings Page</title>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          .icon-fill {
            font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
          .toggle-checkbox:checked {
            right: 0;
            border-color: #0f38bd;
          }
          .toggle-checkbox:checked + .toggle-label {
            background-color: #0f38bd;
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
                  Account Settings
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative hidden md:flex items-center">
                  <MdSearch className="absolute left-3 text-[#616b89]" />
                  <input
                    className="pl-10 pr-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0f38bd] w-64 border-none text-[#111318] dark:text-white placeholder-[#616b89]"
                    placeholder="Search settings..."
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
              <div className="max-w-6xl mx-auto">
                <div className="mb-8">
                  <h1 className="text-2xl md:text-3xl font-bold text-[#111318] dark:text-white tracking-tight">
                    Settings
                  </h1>
                  <p className="text-[#616b89] dark:text-gray-400 mt-1">
                    Manage your profile, preferences and security settings.
                  </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-3 lg:sticky lg:top-4">
                    <nav className="flex flex-col gap-1 bg-white dark:bg-[#1e2330] p-2 rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm">
                      <Link
                        href="#profile"
                        className={
                          pathName === "/lecturer/settings#profile"
                            ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0f38bd]/10 text-[#0f38bd] dark:text-blue-400 font-medium transition-colors text-left"
                            : "flex items-center gap-3 px-4 py-3 rounded-lg text-[#616b89] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors text-left"
                        }
                      >
                        <FaUserLarge />
                        <span>Profile</span>
                      </Link>
                      <Link
                        href="#notifications"
                        className={
                          pathName === "/lecturer/settings#notifications"
                            ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0f38bd]/10 text-[#0f38bd] dark:text-blue-400 font-medium transition-colors text-left"
                            : "flex items-center gap-3 px-4 py-3 rounded-lg text-[#616b89] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors text-left"
                        }
                      >
                        <MdNotifications />
                        <span>Notifications</span>
                      </Link>
                      <Link
                        href="#security"
                        className={
                          pathName === "/lecturer/settings#security"
                            ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0f38bd]/10 text-[#0f38bd] dark:text-blue-400 font-medium transition-colors text-left"
                            : "flex items-center gap-3 px-4 py-3 rounded-lg text-[#616b89] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors text-left"
                        }
                      >
                        <AiOutlineLock />
                        <span>Security</span>
                      </Link>
                      <Link
                        href="#preferences"
                        className={
                          pathName === "/lecturer/settings#preferences"
                            ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-[#0f38bd]/10 text-[#0f38bd] dark:text-blue-400 font-medium transition-colors text-left"
                            : "flex items-center gap-3 px-4 py-3 rounded-lg text-[#616b89] dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#111318] dark:hover:text-white transition-colors text-left"
                        }
                      >
                        <MdOutlineTune />
                        <span>Preferences</span>
                      </Link>
                    </nav>
                  </div>
                  <div className="lg:col-span-9 space-y-6">
                    <div
                      id="profile"
                      className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm p-6 md:p-8"
                    >
                      <div className="flex justify-between items-center mb-6">
                        <h3 className="text-lg font-bold text-[#111318] dark:text-white">
                          Profile Information
                        </h3>
                      </div>
                      <div className="flex flex-col md:flex-row gap-8 items-start mb-8">
                        <div className="shrink-0 flex flex-col items-center gap-3">
                          <div
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cover bg-center border-4 border-white dark:border-gray-700 shadow-md relative group"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCF9hnP_0HdZB8qChSE4Z7bJWP0JuPX8uYbUVSB-Jo-SxGj8-ZLLpKbnVBSYeILS0fK__h7JjkX7pTW5hbDlE8k34o-bOfpxSWzR_loj-KPmdrhstOZJ4SQX2sfoqWj9GYmX1PiIxL1a71M9I6qh2QH_29xky7VXFwjZB7CPT3M2pMTf-QybOWlFLgvDC5X40dMMvKGmm8baOG1OcWrkoag0lQi9GgBcwOJsV7LwhhdKq26MDotlHK0g4rxg1dDfcihvpIe4hlbJZl3')",
                            }}
                          >
                            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                              <MdPhotoCamera className="text-white" />
                            </div>
                          </div>
                          <button className="text-sm font-medium text-[#0f38bd] dark:text-blue-400 hover:underline">
                            Change Picture
                          </button>
                        </div>
                        <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-[#616b89] dark:text-gray-400 uppercase tracking-wider">
                              Title
                            </label>
                            <select className="w-full px-4 py-2.5 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all">
                              <option>Dr.</option>
                              <option>Prof.</option>
                              <option>Mr.</option>
                              <option>Mrs.</option>
                            </select>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-[#616b89] dark:text-gray-400 uppercase tracking-wider">
                              Full Name
                            </label>
                            <input
                              className="w-full px-4 py-2.5 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all"
                              type="text"
                              value="Adebayo Oluwaseun"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-[#616b89] dark:text-gray-400 uppercase tracking-wider">
                              Staff ID
                            </label>
                            <input
                              className="w-full px-4 py-2.5 bg-gray-100 dark:bg-gray-900/50 border border-transparent rounded-lg text-sm text-gray-500 dark:text-gray-500 cursor-not-allowed"
                              disabled
                              type="text"
                              value="LEC/2023/0042"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-[#616b89] dark:text-gray-400 uppercase tracking-wider">
                              Department
                            </label>
                            <select className="w-full px-4 py-2.5 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all">
                              <option selected>Computer Science</option>
                              <option>Information Technology</option>
                              <option>Software Engineering</option>
                              <option>Cyber Security</option>
                            </select>
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-xs font-semibold text-[#616b89] dark:text-gray-400 uppercase tracking-wider">
                              Official Email
                            </label>
                            <input
                              className="w-full px-4 py-2.5 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all"
                              type="email"
                              value="o.adebayo@university.edu.ng"
                            />
                          </div>
                          <div className="space-y-1.5 md:col-span-2">
                            <label className="text-xs font-semibold text-[#616b89] dark:text-gray-400 uppercase tracking-wider">
                              Bio / Specialization
                            </label>
                            <textarea className="w-full px-4 py-2.5 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all">
                              Experienced lecturer specializing in Artificial
                              Intelligence, Machine Learning, and Data
                              Structures with over 10 years of academic
                              experience.
                            </textarea>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end pt-4 border-t border-[#f0f1f4] dark:border-gray-800">
                        <button className="px-6 py-2.5 bg-[#0f38bd] hover:bg-[#0f38bd]/90 text-white font-medium rounded-lg transition-colors shadow-sm">
                          Save Changes
                        </button>
                      </div>
                    </div>
                    <div
                      id="notifications"
                      className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm p-6 md:p-8"
                    >
                      <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-6">
                        Notification Preferences
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-semibold text-[#111318] dark:text-white mb-3">
                            Academic Alerts
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-[#111318] dark:text-white">
                                  Flagged Attendance
                                </p>
                                <p className="text-xs text-[#616b89] dark:text-gray-400">
                                  Receive alerts when students fall below 70%
                                  attendance.
                                </p>
                              </div>
                              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#0f38bd]"
                                  id="toggle1"
                                  name="toggle"
                                  type="checkbox"
                                />
                                <label
                                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#0f38bd]"
                                  htmlFor="toggle1"
                                ></label>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-[#111318] dark:text-white">
                                  Grade Submission Deadlines
                                </p>
                                <p className="text-xs text-[#616b89] dark:text-gray-400">
                                  Reminders for upcoming grade upload deadlines.
                                </p>
                              </div>
                              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                  checked
                                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#0f38bd]"
                                  id="toggle2"
                                  name="toggle"
                                  type="checkbox"
                                />
                                <label
                                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#0f38bd]"
                                  htmlFor="toggle2"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-px bg-[#f0f1f4] dark:bg-gray-800"></div>
                        <div>
                          <h4 className="text-sm font-semibold text-[#111318] dark:text-white mb-3">
                            Communication
                          </h4>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-[#111318] dark:text-white">
                                  Student Messages
                                </p>
                                <p className="text-xs text-[#616b89] dark:text-gray-400">
                                  Email notification when a student sends a
                                  direct message.
                                </p>
                              </div>
                              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                  checked
                                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#0f38bd]"
                                  id="toggle3"
                                  name="toggle"
                                  type="checkbox"
                                />
                                <label
                                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#0f38bd]"
                                  htmlFor="toggle3"
                                ></label>
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-sm font-medium text-[#111318] dark:text-white">
                                  Departmental Announcements
                                </p>
                                <p className="text-xs text-[#616b89] dark:text-gray-400">
                                  News and updates from the HOD or Dean.
                                </p>
                              </div>
                              <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
                                <input
                                  checked
                                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer checked:right-0 checked:border-[#0f38bd]"
                                  id="toggle4"
                                  name="toggle"
                                  type="checkbox"
                                />
                                <label
                                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer checked:bg-[#0f38bd]"
                                  htmlFor="toggle4"
                                ></label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      id="security"
                      className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm p-6 md:p-8"
                    >
                      <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-6">
                        Security Settings
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-[#111318] dark:text-white">
                            Change Password
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <label className="text-xs text-[#616b89] dark:text-gray-400 block mb-1">
                                Current Password
                              </label>
                              <input
                                className="w-full px-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all"
                                type="password"
                              />
                            </div>
                            <div>
                              <label className="text-xs text-[#616b89] dark:text-gray-400 block mb-1">
                                New Password
                              </label>
                              <input
                                className="w-full px-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all"
                                type="password"
                              />
                            </div>
                            <div>
                              <label className="text-xs text-[#616b89] dark:text-gray-400 block mb-1">
                                Confirm New Password
                              </label>
                              <input
                                className="w-full px-4 py-2 bg-[#f0f1f4] dark:bg-gray-800 border border-transparent focus:border-[#0f38bd] rounded-lg text-sm text-[#111318] dark:text-white focus:ring-0 outline-none transition-all"
                                type="password"
                              />
                            </div>
                            <button className="mt-2 px-4 py-2 bg-white dark:bg-gray-800 border border-[#dbdee6] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-[#111318] dark:text-white text-sm font-medium rounded-lg transition-all">
                              Update Password
                            </button>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <h4 className="text-sm font-semibold text-[#111318] dark:text-white">
                            Two-Factor Authentication
                          </h4>
                          <p className="text-sm text-[#616b89] dark:text-gray-400 mb-4">
                            Add an extra layer of security to your account by
                            enabling 2FA.
                          </p>
                          <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/30 flex items-start gap-3">
                            <MdVerifiedUser className="text-emerald-600 dark:text-emerald-400" />
                            <div>
                              <h5 className="text-sm font-bold text-emerald-800 dark:text-emerald-400">
                                2FA is currently Enabled
                              </h5>
                              <p className="text-xs text-emerald-700 dark:text-emerald-500/80 mt-1">
                                Your account is protected.
                              </p>
                            </div>
                          </div>
                          <button className="w-full mt-2 px-4 py-2 border border-red-200 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-sm font-medium transition-colors">
                            Disable 2FA
                          </button>
                        </div>
                      </div>
                    </div>
                    <div
                      id="preferences"
                      className="bg-white dark:bg-[#1e2330] rounded-xl border border-[#f0f1f4] dark:border-gray-800 shadow-sm p-6 md:p-8"
                    >
                      <h3 className="text-lg font-bold text-[#111318] dark:text-white mb-6">
                        Application Preferences
                      </h3>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-sm font-medium text-[#111318] dark:text-white">
                            Theme
                          </h4>
                          <p className="text-xs text-[#616b89] dark:text-gray-400">
                            Customize the look and feel of your dashboard.
                          </p>
                        </div>
                        <div className="flex bg-[#f0f1f4] dark:bg-gray-800 p-1 rounded-lg">
                          <button className="flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-[#1e2330] shadow-sm rounded-md text-xs font-medium text-[#111318] dark:text-white transition-all">
                            <MdLightMode className="text-[16px]" />
                            Light
                          </button>
                          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#616b89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-all">
                            <MdDarkMode className="text-[16px]" />
                            Dark
                          </button>
                          <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-[#616b89] dark:text-gray-400 hover:text-[#111318] dark:hover:text-white transition-all">
                            <CgLaptop className="text-[16px]" />
                            System
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-12"></div>
              </div>
            </main>
          </div>
        </div>
      </body>
    </>
  );
}
