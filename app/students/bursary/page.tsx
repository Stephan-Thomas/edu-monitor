"use client";
import Sidebar from "@/app/components/students/Sidebar";
import Head from "next/head";
import {
  MdAccountBalanceWallet,
  MdReceiptLong,
  MdPayments,
  MdDownload,
  MdLock,
  MdCheckCircle,
  MdEvent,
  MdBlock,
  MdArrowForward,
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
  userId?: string;
  role?: string;
};

export default function BursaryPage() {
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
        }, 3000);
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
        <title>Student Bursary Page</title>
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
            height: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #cbd5e1;
            border-radius: 20px;
          }
          .dark .custom-scrollbar::-webkit-scrollbar-thumb {
            background-color: #374151;
          }
        `}</style>
      </Head>
      <section className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex flex-col md:flex-row overflow-hidden text-[#121317] dark:text-white transition-colors duration-200">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden">
          <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-8">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm hidden md:block"
                  data-alt="Portrait of student Chinedu Okafor"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB13xHvdk8TlIrBSeR0-cgXWa9Iyt-4ZXRneKUp533eaEqrLsBzYhccOYfuYruBYeNS87oJ1crs-X06-3aMmjww8SZ9R-YAgPXJIODgKidkJUQ6nUUFYPoASID_V1vh6RHxR6cKmifx6IPE6kEOmnvguIrGaUi6e8VSJn8-I1jrlfiibbOzQgpsNJtrP4BBq-JC8L7oxoeHapjJtwVVAva2GfteMYexGXgpCle0anY7bNTkMAMeESLaWjzGsvfWmjD0GYWdA6fxpvJL')",
                  }}
                ></div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#121317] dark:text-white tracking-tight">
                    Bursary & Finance
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 mt-1 text-sm text-[#656d86] dark:text-gray-400">
                    <span>{user.userId}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span>{user.department}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span>2023/2024 Session</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto">
                <button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white dark:bg-[#1e2230] border border-gray-200 dark:border-gray-700 text-[#656d86] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm text-sm font-medium w-full md:w-auto">
                  <MdReceiptLong className="text-[18px]" />
                  Account Statement
                </button>
                <button className="bg-[#1e3fae] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition shadow-sm shadow-blue-200 dark:shadow-none flex items-center justify-center gap-2 w-full md:w-auto whitespace-nowrap">
                  <MdPayments className="text-[18px]" />
                  Make Payment
                </button>
              </div>
            </header>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdAccountBalanceWallet className="text-6xl text-[#dc2626]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Outstanding Balance
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-[#dc2626] dark:text-red-400">
                      ₦45,500.00
                    </h3>
                  </div>
                </div>
                <div className="mt-auto flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#dc2626] animate-pulse"></span>
                  <p className="text-xs text-[#dc2626] dark:text-red-400 font-medium">
                    Payment overdue
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdReceiptLong className="text-6xl text-[#1e3fae]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Total Invoiced
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-[#121317] dark:text-white">
                      ₦180,000.00
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[#656d86] dark:text-gray-400 mt-auto">
                  For 2023/2024 Session
                </p>
              </div>
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdCheckCircle className="text-6xl text-[#07883d]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Total Paid
                  </p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl font-bold text-[#07883d] dark:text-emerald-400">
                      ₦134,500.00
                    </h3>
                  </div>
                </div>
                <div className="w-full bg-gray-100 dark:bg-gray-700 h-1.5 rounded-full mt-auto overflow-hidden">
                  <div
                    className="bg-[#07883d] h-full rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
              <div className="bg-white dark:bg-[#1e2230] p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <MdEvent className="text-6xl text-[#d97706]" />
                </div>
                <div>
                  <p className="text-[#656d86] dark:text-gray-400 text-sm font-medium mb-1">
                    Next Payment Due
                  </p>
                  <h3 className="text-2xl font-bold text-[#121317] dark:text-white">
                    Nov 30, 2024
                  </h3>
                </div>
                <p className="text-xs text-[#d97706] dark:text-amber-400 font-medium mt-auto">
                  Second Semester Fees
                </p>
              </div>
            </section>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 md:gap-8">
              <div className="xl:col-span-2 bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                    Transaction History
                  </h2>
                  <div className="flex gap-2">
                    <select className="bg-gray-50 dark:bg-gray-800 border-none text-xs font-medium text-[#656d86] dark:text-gray-300 rounded-lg py-2 px-3 cursor-pointer outline-none focus:ring-1 focus:ring-[#1e3fae]">
                      <option>All Transactions</option>
                      <option>Successful</option>
                      <option>Pending</option>
                      <option>Failed</option>
                    </select>
                    <button className="text-[#1e3fae] text-sm font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 px-3 py-1.5 rounded-lg transition-colors">
                      Export
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-[#656d86] dark:text-gray-400 uppercase bg-gray-50 dark:bg-gray-800/50">
                      <tr>
                        <th className="px-6 py-4 font-medium" scope="col">
                          Date
                        </th>
                        <th className="px-6 py-4 font-medium" scope="col">
                          Description
                        </th>
                        <th className="px-6 py-4 font-medium" scope="col">
                          Reference
                        </th>
                        <th className="px-6 py-4 font-medium" scope="col">
                          Amount
                        </th>
                        <th className="px-6 py-4 font-medium" scope="col">
                          Status
                        </th>
                        <th
                          className="px-6 py-4 font-medium text-right"
                          scope="col"
                        >
                          Receipt
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      <tr className="bg-white dark:bg-[#1e2230] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-[#656d86] dark:text-gray-400">
                          Oct 24, 2023
                        </td>
                        <td className="px-6 py-4 font-medium text-[#121317] dark:text-white">
                          Tuition Fee (Part 1)
                        </td>
                        <td className="px-6 py-4 text-xs font-mono text-[#656d86] dark:text-gray-500">
                          REM-88293021
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#121317] dark:text-white">
                          ₦80,000.00
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                            Success
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#1e3fae] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            <MdDownload className="text-[20px]" />
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-[#1e2230] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-[#656d86] dark:text-gray-400">
                          Oct 10, 2023
                        </td>
                        <td className="px-6 py-4 font-medium text-[#121317] dark:text-white">
                          Library Registration
                        </td>
                        <td className="px-6 py-4 text-xs font-mono text-[#656d86] dark:text-gray-500">
                          REM-99210044
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#121317] dark:text-white">
                          ₦5,000.00
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                            Success
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#1e3fae] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            <MdDownload className="text-[20px]" />
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-[#1e2230] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-[#656d86] dark:text-gray-400">
                          Sep 15, 2023
                        </td>
                        <td className="px-6 py-4 font-medium text-[#121317] dark:text-white">
                          Medical Fees
                        </td>
                        <td className="px-6 py-4 text-xs font-mono text-[#656d86] dark:text-gray-500">
                          REM-11200392
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#121317] dark:text-white">
                          ₦10,000.00
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                            Success
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#1e3fae] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            <MdDownload className="text-[20px]" />
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-[#1e2230] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-[#656d86] dark:text-gray-400">
                          Sep 01, 2023
                        </td>
                        <td className="px-6 py-4 font-medium text-[#121317] dark:text-white">
                          Acceptance Fee
                        </td>
                        <td className="px-6 py-4 text-xs font-mono text-[#656d86] dark:text-gray-500">
                          REM-00129384
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#121317] dark:text-white">
                          ₦20,000.00
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-600 dark:bg-red-400"></span>
                            Failed
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            className="text-gray-400 cursor-not-allowed"
                            disabled
                          >
                            <MdBlock className="text-[20px]" />
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white dark:bg-[#1e2230] hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-[#656d86] dark:text-gray-400">
                          Sep 01, 2023
                        </td>
                        <td className="px-6 py-4 font-medium text-[#121317] dark:text-white">
                          Acceptance Fee
                        </td>
                        <td className="px-6 py-4 text-xs font-mono text-[#656d86] dark:text-gray-500">
                          REM-00129385
                        </td>
                        <td className="px-6 py-4 font-semibold text-[#121317] dark:text-white">
                          ₦20,000.00
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"></span>
                            Success
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="text-[#1e3fae] hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            <MdDownload className="text-[20px]" />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 border-t border-gray-200 dark:border-gray-700 flex justify-center">
                  <button className="text-sm text-[#1e3fae] font-medium hover:underline">
                    View All Transactions
                  </button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white mb-4">
                    Quick Payment
                  </h2>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                        Payment Category
                      </label>
                      <select className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#121317] dark:text-white py-2.5 px-3 focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition-shadow">
                        <option>Tuition Fees</option>
                        <option>Hostel Accommodation</option>
                        <option>Transcript Request</option>
                        <option>Late Registration Penalty</option>
                        <option>Other Charges</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                        Amount (₦)
                      </label>
                      <input
                        className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-sm text-[#121317] dark:text-white py-2.5 px-3 focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition-shadow"
                        placeholder="0.00"
                        type="number"
                        value="45500"
                      />
                    </div>
                    <div className="pt-2">
                      <button
                        className="w-full bg-[#1e3fae] hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2"
                        type="button"
                      >
                        Proceed to Gateway
                        <MdArrowForward className="text-[18px]" />
                      </button>
                      <p className="text-[10px] text-[#656d86] dark:text-gray-500 text-center mt-3 flex items-center justify-center gap-1">
                        <MdLock className="text-[12px]" />
                        Secured by Remita
                      </p>
                    </div>
                  </form>
                </div>
                <div className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
                  <h2 className="text-lg font-bold text-[#121317] dark:text-white mb-4">
                    Fee Structure
                  </h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-[#656d86] dark:text-gray-400">
                        Tuition Fee
                      </span>
                      <span className="font-medium text-[#121317] dark:text-white">
                        ₦120,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-[#656d86] dark:text-gray-400">
                        Acceptance Fee
                      </span>
                      <span className="font-medium text-[#121317] dark:text-white">
                        ₦20,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-[#656d86] dark:text-gray-400">
                        Medical
                      </span>
                      <span className="font-medium text-[#121317] dark:text-white">
                        ₦10,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-[#656d86] dark:text-gray-400">
                        Library
                      </span>
                      <span className="font-medium text-[#121317] dark:text-white">
                        ₦5,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-[#656d86] dark:text-gray-400">
                        ICT Development
                      </span>
                      <span className="font-medium text-[#121317] dark:text-white">
                        ₦10,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm pb-2 border-b border-gray-100 dark:border-gray-800">
                      <span className="text-[#656d86] dark:text-gray-400">
                        Sports
                      </span>
                      <span className="font-medium text-[#121317] dark:text-white">
                        ₦5,000
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-sm pt-2">
                      <span className="font-bold text-[#121317] dark:text-white">
                        Total
                      </span>
                      <span className="font-bold text-[#1e3fae] dark:text-blue-400">
                        ₦180,000
                      </span>
                    </div>
                  </div>
                  <button className="w-full mt-5 text-xs text-[#1e3fae] font-medium border border-[#1e3fae]/20 hover:bg-[#1e3fae]/5 rounded-lg py-2 transition-colors">
                    Download Detailed Breakdown
                  </button>
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
