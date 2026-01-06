"use client";
import Head from "next/head";
import {
  MdSearch,
  MdMoreVert,
  MdFolderOpen,
  MdWarning,
  MdCheckCircle,
  MdError,
  MdGridView,
  MdList,
} from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import Sidebar from "@/app/components/students/Sidebar";
import Navbar from "@/app/components/shared/Navbar";
import { useState, useEffect } from "react";

// Sample data extracted from your hardcoded cards (for demonstration/testing).
// In production, this will be replaced by backend data.
const sampleCourses: Course[] = [
  {
    code: "COM 312",
    title: "Database Management Systems",
    status: "Active",
    instructor: {
      name: "Dr. A. Okafor",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDDDNX7pyAwdm96lJVEoaUJnm5yfTz4LYshJvPuVo1GuYI0FGe6OYuAm0mZ8zyPfMthFlTk0148oWJ0URo4Za_aAwRieJ0HZDkpRl9e_UmWBBlHjS_Wd-xh-89RqyN8ehJ3NSWKCSh9tdgaJedct66HhCV29IIrAlaby1Wk5CRMDkIOqq6_Odm5lB0JY1fk8Ai-V__EMtipgbaKEigFF9Cr8jJE3wRzmOdC2np3Hg85J8yvT_FsE0RBOpUGRC_jDwsBA11RmTqRWuCe",
    },
    nextClass: {
      day: "Mon",
      time: "10:00 AM",
      location: "Lecture Hall 4",
    },
    attendance: 85,
    grade: "A",
    gradeLabel: "Latest Grade",
  },
  {
    code: "MTH 201",
    title: "Linear Algebra II",
    status: "Active",
    instructor: {
      name: "Mrs. B. Adebayo",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDAlm5y_3CsmXbAJkImthanRXejIRtn8dBcZWJE5aKDhY2lnj61uIFVzuQqNQ138EVliWPjIyHconCCre4ffOIcxS_I7_UU4yfO7dIg4qazbmsFsxgzj0laxHritkOWBmE8RNLz3ERRiCSwgIehBW4PsvAckBMY9oV8lL1H7XPmm7QebVsgkxzVzQysRbVHqgOsyR5rN6bNwLnNEHJ5p4vgzjtT3w3WgRDp_W_RypdVGn2XwLMwoN-dsqxq1Gb7jJh076_5m4e-JCPn",
    },
    alert: {
      type: "warning",
      title: "Test Rescheduled",
      subtitle: "Wed, 2:00 PM",
      label: "Alert",
      subtitleColor: "text-[#616b89] dark:text-gray-400",
    },
    attendance: 65,
    grade: "C",
    gradeLabel: "Latest Grade",
  },
  {
    code: "GNS 101",
    title: "Use of English I",
    status: "Completed",
    instructor: {
      name: "University Staff",
      initial: "UN",
    },
    alert: {
      type: "success",
      title: "Course Completed",
    },
    attendance: 92,
    grade: "B+",
    gradeLabel: "Final Grade",
  },
  {
    code: "CSC 405",
    title: "Artificial Intelligence",
    status: "Active",
    instructor: {
      name: "Prof. K. Mensah",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAXHD1fZuYlIKm9tC5-h29S7vH6x0s8xj6dRcRbyk5btBTrBbPrCweafDYhe4OcEN06Qu3okZ-vmp2D05KU3rf3G9HEkCg72sslqHpA0yUOkAaqRp1c5hwTdlCUJQIpZs1QjkYFaO-KE533BeP3N5R5W_6szutX7pRKsRJ6_EgI9Uv799invCyhJiL2w6RnM-LLhGGjgkHtI2T49yHI21U9sH6wirgBGP23kRaamkCswEXUQaI5QJ4F5Vore5EZ73UsKWmfuTEZCgRz",
    },
    nextClass: {
      day: "Tue",
      time: "02:00 PM",
      location: "Lab 2 (New Building)",
    },
    attendance: 45,
    grade: "-",
    gradeLabel: "Latest Grade",
  },
  {
    code: "PHY 102",
    title: "General Physics II",
    status: "Carry Over",
    instructor: {
      name: "Dr. S. Ibrahim",
      avatarUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDkIbzl9Wmou_Cg6htOMGj8HWIt3dN5bYTfbCicjaYxT-mrov4tUUAAR__k_yCj7xEzcxDjfmoeuzgeHW495hKha3EleltJRZhfJKteAGPXDIB2XTVtyY3Ose1KEMyubnfAtKBkZvWmYsy2ICnWcYt3LsJ9Iv32z13uFj9sWyTTDIwKfOjQJcj1qAYHkZXqcMYVBrttMzfOmYr6hNWq3ar4YtBlzxggeSrZIfR14hrueSqplt_zaHOCo1W1bRhuVzfYS9yip-JAIo5E",
    },
    alert: {
      type: "error",
      title: "Retake Required",
      subtitle: "Registration Closes in 3 days",
      label: "Status",
      subtitleColor: "text-red-600 dark:text-red-400",
    },
    attendance: 0,
    grade: "F",
    gradeLabel: "Prev Grade",
  },
];

// Reusable CourseCard component
type Course = {
  code: string;
  title: string;
  status?: "Active" | "Completed" | "Carry Over" | string;
  instructor: {
    name: string;
    avatarUrl?: string;
    initial?: string;
  };
  attendance: number;
  grade?: string;
  gradeLabel?: string;
  nextClass?: {
    day: string;
    time: string;
    location: string;
  };
  alert?: {
    type?: "warning" | "success" | "error" | string;
    title?: string;
    subtitle?: string;
    label?: string;
    subtitleColor?: string;
  };
};

function CourseCard({ course }: { course: Course }) {
  const {
    code,
    title,
    status,
    instructor,
    attendance,
    grade,
    gradeLabel = "Latest Grade",
    nextClass,
    alert,
  } = course;

  // Status badge classes
  const statusColors: Record<string, string> = {
    Active:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800",
    Completed:
      "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-600",
    "Carry Over":
      "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-100 dark:border-red-800",
  };
  const statusClass = status ? statusColors[status] || "" : "";

  // Grade classes
  const gradeColors: Record<string, string> = {
    A: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
    C: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
    "B+": "bg-[#0f38bd]/10 text-[#0f38bd] dark:text-blue-300",
    "-": "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300",
    F: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };
  const gradeColorClass =
    gradeColors[grade ?? "-"] ||
    "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300";

  // Attendance bar and text classes
  let barClass = "bg-gray-400";
  let percentClass = "text-gray-600 dark:text-gray-400";
  if (status === "Active") {
    if (attendance >= 80) {
      barClass = "bg-emerald-500";
      percentClass = "text-emerald-600 dark:text-emerald-400";
    } else if (attendance >= 60) {
      barClass = "bg-amber-500";
      percentClass = "text-amber-600 dark:text-amber-400";
    } else {
      barClass = "bg-red-500";
      percentClass = "text-red-600 dark:text-red-400";
    }
  } else if (status === "Carry Over") {
    barClass = "bg-gray-300";
    percentClass = "text-gray-500 dark:text-gray-400";
  }

  // Highlight section (alert or nextClass)
  let highlight = null;
  if (alert) {
    const {
      type,
      title: aTitle,
      subtitle,
      label = "Alert",
      subtitleColor = "text-[#616b89] dark:text-gray-400",
    } = alert;
    let Icon = MdWarning;
    let iconClass = "text-amber-600";
    let bgClass = "bg-gray-50 dark:bg-gray-800/50";
    let borderClass = "";
    let contentClass = "items-start gap-3";
    let pColor = "";
    let isCentered = false;

    if (type === "success") {
      Icon = MdCheckCircle;
      iconClass = "text-emerald-700 dark:text-emerald-400";
      bgClass = "bg-emerald-50 dark:bg-emerald-900/10";
      borderClass =
        "border border-dashed border-emerald-200 dark:border-emerald-800/30";
      contentClass = "items-center justify-center";
      pColor = iconClass;
      isCentered = true;
    } else if (type === "error") {
      Icon = MdError;
      iconClass = "text-red-600";
      bgClass = "bg-red-50 dark:bg-red-900/10";
      borderClass = "border border-red-100 dark:border-red-900/30";
    }

    if (isCentered) {
      highlight = (
        <div
          className={`flex ${contentClass} p-3 ${bgClass} rounded-lg ${borderClass}`}
        >
          <p
            className={`text-sm font-medium flex items-center gap-2 ${pColor}`}
          >
            <Icon className="text-[18px]" />
            {aTitle}
          </p>
        </div>
      );
    } else {
      highlight = (
        <div
          className={`flex ${contentClass} p-3 ${bgClass} rounded-lg ${borderClass}`}
        >
          <Icon className={`${iconClass} mt-0.5 text-[20px]`} />
          <div className="flex flex-col">
            <p className="text-xs text-[#616b89] dark:text-gray-400 font-medium">
              {label}
            </p>
            <p className="text-sm font-semibold text-[#111318] dark:text-white">
              {aTitle}
            </p>
            {subtitle && (
              <p className={`text-xs ${subtitleColor}`}>{subtitle}</p>
            )}
          </div>
        </div>
      );
    }
  } else if (nextClass) {
    const { day, time, location } = nextClass;
    highlight = (
      <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
        <SlCalender className="text-[#0f38bd] mt-0.5 text-[20px]" />
        <div className="flex flex-col">
          <p className="text-xs text-[#616b89] dark:text-gray-400 font-medium">
            Next Class
          </p>
          <p className="text-sm font-semibold text-[#111318] dark:text-white">
            {day}, {time}
          </p>
          <p className="text-xs text-[#616b89] dark:text-gray-400">
            {location}
          </p>
        </div>
      </div>
    );
  }

  // Buttons
  let buttons;
  const hasAlert = !!alert;
  const viewDetailsClass = hasAlert
    ? "bg-[#0f38bd]/10 hover:bg-[#0f38bd]/20 text-[#0f38bd] dark:text-blue-300"
    : "bg-[#0f38bd] hover:bg-[#0a2a9d] text-white";
  if (status === "Completed") {
    buttons = (
      <button className="flex-1 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium py-2 rounded-lg transition-colors">
        View History
      </button>
    );
  } else if (status === "Carry Over") {
    buttons = (
      <button className="flex-1 bg-[#0f38bd] hover:bg-[#0a2a9d] text-white text-sm font-medium py-2 rounded-lg transition-colors shadow-sm">
        Register Now
      </button>
    );
  } else {
    buttons = (
      <>
        <button
          className={`flex-1 ${viewDetailsClass} text-sm font-medium py-2 rounded-lg transition-colors ${
            !hasAlert ? "shadow-sm" : ""
          }`}
        >
          View Details
        </button>
        <button
          className="aspect-square flex items-center justify-center bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-[#616b89] dark:text-gray-300 rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
          title="Course Materials"
        >
          <MdFolderOpen className="text-[20px]" />
        </button>
      </>
    );
  }

  // Card class
  let cardClass =
    "flex flex-col bg-white dark:bg-[#1a202c] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-md transition-shadow duration-300 group";
  if (status === "Completed") cardClass += " opacity-90";

  // Metrics class
  let metricsClass = "grid grid-cols-2 gap-4 mt-2";
  if (status === "Carry Over") metricsClass += " opacity-50";

  return (
    <div className={cardClass}>
      {/* Card Header */}
      <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <h3
              className={`font-bold text-lg ${
                status === "Completed"
                  ? "text-[#616b89] dark:text-gray-400"
                  : "text-[#0f38bd]"
              }`}
            >
              {code}
            </h3>
            <span
              className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusClass}`}
            >
              {status}
            </span>
          </div>
          <h4 className="text-[#111318] dark:text-white font-semibold text-base leading-snug">
            {title}
          </h4>
        </div>
        <button className="text-gray-400 hover:text-[#0f38bd] transition-colors">
          <MdMoreVert />
        </button>
      </div>
      {/* Card Body */}
      <div className="p-5 flex flex-col gap-4 flex-1">
        {/* Instructor */}
        <div className="flex items-center gap-3">
          {instructor.avatarUrl ? (
            <div
              className="size-8 rounded-full bg-gray-100 bg-cover bg-center"
              style={{ backgroundImage: `url('${instructor.avatarUrl}')` }}
            ></div>
          ) : (
            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-[#0f38bd] font-bold text-xs">
              {instructor.initial}
            </div>
          )}
          <div className="flex flex-col">
            <p className="text-xs text-[#616b89] dark:text-gray-400 uppercase tracking-wide font-medium">
              Instructor
            </p>
            <p className="text-sm font-medium text-[#111318] dark:text-white">
              {instructor.name}
            </p>
          </div>
        </div>
        {/* Highlight */}
        {highlight}
        {/* Metrics */}
        <div className={metricsClass}>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#616b89] dark:text-gray-400 font-medium">
                Attendance
              </span>
              <span className={`font-bold ${percentClass}`}>{attendance}%</span>
            </div>
            <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2">
              <div
                className={`${barClass} h-2 rounded-full`}
                style={{ width: `${attendance}%` }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <span className="text-[#616b89] dark:text-gray-400 text-xs font-medium">
              {gradeLabel}
            </span>
            <span
              className={`inline-flex items-center justify-center size-8 rounded-full font-bold text-sm ${gradeColorClass}`}
            >
              {grade}
            </span>
          </div>
        </div>
      </div>
      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
        {buttons}
      </div>
    </div>
  );
}

export default function MyCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Fetch from backend (adjust the endpoint as needed)
    fetch("/api/my-courses")
      .then((res) => res.json())
      .then((data: Course[]) => setCourses(data))
      .catch(() => setCourses([]));

    // For testing without backend, uncomment this:
    setCourses(sampleCourses);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student My Courses Page</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </Head>
      <section className="bg-[#f6f6f8] dark:bg-[#101422] text-[#111318] dark:text-white overflow-x-hidden">
        <div className="flex h-screen w-full overflow-hidden">
          {/* Side Navigation (Desktop) */}
          <Sidebar />
          {/* Main Content Wrapper */}
          <main className="flex-1 flex flex-col h-full overflow-hidden relative">
            {/* Top Header (Desktop & Mobile) */}
            <Navbar />
            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-[#f6f6f8] dark:bg-[#101422] p-4 lg:p-8">
              <div className="max-w-7xl mx-auto flex flex-col gap-6">
                {/* Page Heading & Controls */}
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-[#111318] dark:text-white tracking-tight">
                        My Enrolled Courses
                      </h2>
                      <p className="text-[#616b89] dark:text-gray-400 mt-1">
                        Manage your academic workload and track performance.
                      </p>
                    </div>
                    {/* Search Bar */}
                    <div className="w-full md:w-96">
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MdSearch className="text-gray-400 group-focus-within:text-[#0f38bd]" />
                        </div>
                        <input
                          className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-white dark:bg-[#1a202c] dark:text-white text-sm shadow-sm ring-1 ring-gray-200 dark:ring-gray-700 focus:ring-2 focus:ring-[#0f38bd] placeholder-gray-400 transition-all"
                          placeholder="Search by course code or title..."
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Filters & Toggles */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 dark:border-gray-800 pb-4">
                    {/* Chips */}
                    <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-hide">
                      <button className="flex items-center gap-2 px-4 py-2 bg-[#111318] dark:bg-white text-white dark:text-[#111318] rounded-full text-sm font-medium shadow-sm whitespace-nowrap transition-transform active:scale-95">
                        Current Semester
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 text-[#616b89] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                        All Semesters
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-[#1a202c] border border-gray-200 dark:border-gray-700 text-[#616b89] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-full text-sm font-medium whitespace-nowrap transition-colors">
                        Completed
                      </button>
                    </div>
                    {/* View Toggle */}
                    <div className="flex items-center bg-white dark:bg-[#1a202c] p-1 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm shrink-0">
                      <button className="p-1.5 rounded bg-gray-100 dark:bg-gray-700 text-[#111318] dark:text-white shadow-sm">
                        <MdGridView className="text-[20px]" />
                      </button>
                      <button className="p-1.5 rounded text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <MdList className="text-[20px]" />
                      </button>
                    </div>
                  </div>
                </div>
                {/* Course Grid */}
                {courses.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <p className="text-lg font-semibold">
                      No courses available
                    </p>
                    <p className="text-sm text-gray-400 mt-2">
                      You are not enrolled in any course yet.
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courses.map((course, index) => (
                      <CourseCard key={index} course={course} />
                    ))}
                  </div>
                )}
                {/* Optional: Load More or Summary (can be made dynamic based on pagination from backend) */}
                <div className="flex justify-center py-6">
                  <p className="text-sm text-[#616b89] dark:text-gray-400">
                    Showing {courses.length} courses
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
