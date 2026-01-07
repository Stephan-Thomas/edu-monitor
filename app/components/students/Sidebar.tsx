"use client";
import React, { useState } from "react";
import {
  MdSchool,
  MdDashboard,
  MdBook,
  MdCalendarMonth,
  MdAccountBalanceWallet,
  MdSettings,
  MdLogout,
} from "react-icons/md";
import { usePathname } from "next/navigation";
import api from "../../api/axios";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();
  const [isopen, setIsOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <aside
        className="w-full md:w-64 shrink-0 bg-white dark:bg-[#1e2230] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between h-auto md:h-screen z-20"
        // uncomment the code below to enable conditoinal rendering of the sidebar

        // className={
        //   isopen
        //     ? "w-full md:w-64 shrink-0 bg-white dark:bg-[#1e2230] border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-800 flex flex-col justify-between h-auto md:h-screen z-20"
        //     : "hidden"
        // }
      >
        <div className="flex flex-col h-full">
          {/* Logo Area */}
          <div className="p-6 flex items-center gap-3">
            <div className="bg-[#1e3fae]/10 rounded-lg p-2 flex items-center justify-center">
              <MdSchool className="text-[#1e3fae] text-2xl" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-[#121317] dark:text-white text-base font-bold leading-none">
                UniPortal
              </h1>
              <p className="text-[#656d86] dark:text-gray-400 text-xs font-normal mt-1">
                Federal University
              </p>
            </div>
          </div>
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-2 space-y-1">
            <a
              className={
                pathName == "/students"
                  ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] group transition-colors"
                  : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#121317] dark:hover:text-white transition-colors"
              }
              href="/students"
            >
              <MdDashboard className="text-[20px]" />
              <span className="text-sm font-medium">Dashboard</span>
            </a>
            <a
              className={
                pathName == "/students/classes"
                  ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] group transition-colors"
                  : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#121317] dark:hover:text-white transition-colors"
              }
              href="/students/classes"
            >
              <MdBook className="text-[20px]" />
              <span className="text-sm font-medium">My Courses</span>
            </a>
            <a
              className={
                pathName == "/students/grades"
                  ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] group transition-colors"
                  : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#121317] dark:hover:text-white transition-colors"
              }
              href="/students/grades"
            >
              <MdSchool className="text-[20px]" />
              <span className="text-sm font-medium">Grades</span>
            </a>
            <a
              className={
                pathName == "/students/schedule"
                  ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] group transition-colors"
                  : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#121317] dark:hover:text-white transition-colors"
              }
              href="/students/schedule"
            >
              <MdCalendarMonth className="text-[20px]" />
              <span className="text-sm font-medium">Schedule</span>
            </a>
            <a
              className={
                pathName == "/students/bursary"
                  ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] group transition-colors"
                  : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#121317] dark:hover:text-white transition-colors"
              }
              href="/students/bursary"
            >
              <MdAccountBalanceWallet className="text-[20px]" />
              <span className="text-sm font-medium">Bursary</span>
            </a>
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
              <p className="px-3 text-xs font-semibold text-[#656d86] dark:text-gray-500 uppercase tracking-wider mb-2">
                System
              </p>
              <a
                className={
                  pathName == "/students/settings"
                    ? "flex items-center gap-3 px-3 py-2.5 rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] group transition-colors"
                    : "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#121317] dark:hover:text-white transition-colors"
                }
                href="/students/settings"
              >
                <MdSettings className="text-[20px]" />
                <span className="text-sm font-medium">Settings</span>
              </a>
              <button
                onClick={async () => {
                  try {
                    await api.post("/auth/logout");
                  } catch (_) {}

                  // remove all token keys we use
                  localStorage.removeItem("token");
                  localStorage.removeItem("accessToken");
                  router.push("/");
                }}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[#656d86] hover:bg-gray-100"
              >
                <MdLogout className="text-[20px]" />
                <span className="text-sm font-medium">Logout</span>
              </button>
            </div>
          </nav>
          {/* User Mini Profile (Mobile only usually, but good for bottom of sidebar) */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-800 md:hidden">
            <div className="flex items-center gap-3">
              <div
                className="h-10 w-10 rounded-full bg-cover bg-center"
                data-alt="Portrait of a young male student"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBq2yH_mXuR-FIjX8WxcMOBAD6GvgzysWomYkljctZywu0AhFcZfJRWfm7MrhRQKby2nuEho7sOOy3XfBaR4IKO9n-pQW8e-hMA7-e341_EUad2b_nhOCq7viiM6QkKIBOi47CrLEgZtPE00zsiU0_TmLHhMl_fx8SxSRiprDzTlBQi5_InSzZX_Ge5Sh0B_A4BOJf9tBpJCrLiSmWZRVoHhDnWXab4iMItLGO8NsJr00IDAVqNFiGrv5Jqbm0kKuo1lx1mIrVRgpyX')",
                }}
              ></div>
              <div>
                <p className="text-sm font-medium text-[#121317] dark:text-white">
                  Chinedu Okafor
                </p>
                <p className="text-xs text-[#656d86] dark:text-gray-400">
                  Comp. Sci
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>
      <button
        className="w-52 cursor-pointer lg:hidden"
        // uncomment the code below to enable conditoinal rendering of the sidebar
        // onClick={() => setIsOpen(true)}
      >
        X
      </button>
    </>
  );
};

export default Sidebar;
