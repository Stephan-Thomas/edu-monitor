"use client";
import React from "react";
import { usePathname } from "next/navigation";
import {
  MdSchool,
  MdDashboard,
  MdBook,
  MdGroup,
  MdBarChart,
  MdSettings,
  MdLogout,
} from "react-icons/md";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <aside className="hidden lg:flex w-64 flex-col bg-[#0f38bd] text-white h-full shadow-xl z-20">
      <div className="p-6 flex items-center gap-3 border-b border-white/10">
        <div className="bg-white/10 p-2 rounded-lg">
          <MdSchool className="text-white text-2xl" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">StudentMonitor</h1>
          <p className="text-white/60 text-xs">Lecturer Portal</p>
        </div>
      </div>
      <nav className="flex-1 flex flex-col gap-2 p-4 overflow-y-auto">
        <a
          className={
            pathName === "/lecturer"
              ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium transition-colors"
              : "flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          }
          href="/lecturer"
        >
          <MdDashboard />
          <span>Dashboard</span>
        </a>
        <a
          className={
            pathName === "/lecturer/courses"
              ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium transition-colors"
              : "flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          }
          href="/lecturer/courses"
        >
          <MdBook />
          <span>Courses</span>
        </a>
        <a
          className={
            pathName === "/lecturer/students"
              ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium transition-colors"
              : "flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          }
          href="/lecturer/students"
        >
          <MdGroup />
          <span>Students</span>
        </a>
        <a
          className={
            pathName === "/lecturer/reports"
              ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium transition-colors"
              : "flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          }
          href="/lecturer/reports"
        >
          <MdBarChart />
          <span>Reports</span>
        </a>
        <a
          className={
            pathName === "/lecturersettings"
              ? "flex items-center gap-3 px-4 py-3 rounded-lg bg-white/10 text-white font-medium transition-colors"
              : "flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          }
          href="/lecturer/settings"
        >
          <MdSettings />
          <span>Settings</span>
        </a>
      </nav>
      <div className="p-4 border-t border-white/10">
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors">
          <MdLogout />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
