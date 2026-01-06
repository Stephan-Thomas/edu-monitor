import Sidebar from "@/app/components/students/Sidebar";
import Head from "next/head";
import {
  MdNotifications,
  MdPerson,
  MdLock,
  MdVisibilityOff,
  MdPalette,
  MdDelete,
  MdEdit,
  MdLightMode,
  MdDarkMode,
  MdBrightnessMedium,
  MdLaptopMac,
  MdSmartphone,
} from "react-icons/md";

export default function SettingsPage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Student Settings Page</title>
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
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }
          ::-webkit-scrollbar-track {
            background: transparent;
          }
          ::-webkit-scrollbar-thumb {
            background: #cbd5e1;
            border-radius: 4px;
          }
          .dark ::-webkit-scrollbar-thumb {
            background: #374151;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #94a3b8;
          }
        `}</style>
      </Head>
      <section className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex flex-col md:flex-row overflow-hidden text-[#121317] dark:text-white transition-colors duration-200">
        <Sidebar />
        <main className="flex-1 h-screen overflow-y-auto overflow-x-hidden bg-[#f6f6f8] dark:bg-[#121520]">
          <div className="max-w-6xl mx-auto p-4 md:p-8 space-y-8">
            <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-[#121317] dark:text-white tracking-tight">
                  Account Settings
                </h1>
                <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                  Manage your profile, notifications, and security preferences.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button className="hidden sm:flex items-center justify-center h-10 w-10 rounded-full bg-white dark:bg-[#1e2230] border border-gray-200 dark:border-gray-700 text-[#656d86] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition shadow-sm">
                  <MdNotifications className="text-[20px]" />
                </button>
              </div>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start">
              <div className="lg:col-span-1">
                <nav className="sticky top-4 space-y-1">
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg bg-[#1e3fae]/10 text-[#1e3fae] border-l-4 border-[#1e3fae] transition-all"
                    href="#profile"
                  >
                    <MdPerson className="text-[20px]" />
                    Profile
                  </a>
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-white dark:hover:bg-[#1e2230] hover:text-[#121317] dark:hover:text-white hover:shadow-sm transition-all"
                    href="#notifications"
                  >
                    <MdNotifications className="text-[20px]" />
                    Notifications
                  </a>
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-white dark:hover:bg-[#1e2230] hover:text-[#121317] dark:hover:text-white hover:shadow-sm transition-all"
                    href="#security"
                  >
                    <MdLock className="text-[20px]" />
                    Security
                  </a>
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-white dark:hover:bg-[#1e2230] hover:text-[#121317] dark:hover:text-white hover:shadow-sm transition-all"
                    href="#privacy"
                  >
                    <MdVisibilityOff className="text-[20px]" />
                    Privacy
                  </a>
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-[#656d86] dark:text-gray-400 hover:bg-white dark:hover:bg-[#1e2230] hover:text-[#121317] dark:hover:text-white hover:shadow-sm transition-all"
                    href="#appearance"
                  >
                    <MdPalette className="text-[20px]" />
                    Appearance
                  </a>
                  <hr className="border-gray-200 dark:border-gray-700 my-2 mx-4" />
                  <a
                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg text-[#dc2626] hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
                    href="#account"
                  >
                    <MdDelete className="text-[20px]" />
                    Account Zone
                  </a>
                </nav>
              </div>
              <div className="lg:col-span-3 space-y-8">
                <section
                  className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
                  id="profile"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                      Profile Settings
                    </h2>
                    <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                      Update your photo and personal details.
                    </p>
                  </div>
                  <div className="p-6 space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div
                          className="h-20 w-20 rounded-full bg-cover bg-center border-2 border-gray-100 dark:border-gray-600"
                          style={{
                            backgroundImage:
                              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB13xHvdk8TlIrBSeR0-cgXWa9Iyt-4ZXRneKUp533eaEqrLsBzYhccOYfuYruBYeNS87oJ1crs-X06-3aMmjww8SZ9R-YAgPXJIODgKidkJUQ6nUUFYPoASID_V1vh6RHxR6cKmifx6IPE6kEOmnvguIrGaUi6e8VSJn8-I1jrlfiibbOzQgpsNJtrP4BBq-JC8L7oxoeHapjJtwVVAva2GfteMYexGXgpCle0anY7bNTkMAMeESLaWjzGsvfWmjD0GYWdA6fxpvJL')",
                          }}
                        ></div>
                        <button className="absolute bottom-0 right-0 h-7 w-7 bg-[#1e3fae] text-white rounded-full flex items-center justify-center border-2 border-white dark:border-[#1e2230] hover:bg-blue-700 transition">
                          <MdEdit className="text-[14px]" />
                        </button>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-[#121317] dark:text-white">
                          Profile Photo
                        </h3>
                        <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1 mb-2">
                          Recommended: 400x400px, JPG or PNG.
                        </p>
                        <div className="flex gap-3">
                          <button className="px-3 py-1.5 text-xs font-medium text-[#121317] dark:text-white bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition">
                            Change
                          </button>
                          <button className="px-3 py-1.5 text-xs font-medium text-[#dc2626] hover:text-red-700 transition">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                          Full Name
                        </label>
                        <input
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-[#121317] dark:text-white focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition"
                          type="text"
                          value="Chinedu Okafor"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                          Matric Number (Read-only)
                        </label>
                        <input
                          className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm text-[#656d86] dark:text-gray-500 cursor-not-allowed"
                          readOnly
                          type="text"
                          value="CSC/2021/1045"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                          Email Address
                        </label>
                        <input
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-[#121317] dark:text-white focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition"
                          type="email"
                          value="chinedu.o@uni.edu.ng"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                          Phone Number
                        </label>
                        <input
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-[#121317] dark:text-white focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition"
                          type="tel"
                          value="+234 801 234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                          Department
                        </label>
                        <input
                          className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm text-[#656d86] dark:text-gray-500 cursor-not-allowed"
                          readOnly
                          type="text"
                          value="Computer Science"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#656d86] dark:text-gray-400 mb-1.5">
                          Level
                        </label>
                        <input
                          className="w-full bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg px-3 py-2 text-sm text-[#656d86] dark:text-gray-500 cursor-not-allowed"
                          readOnly
                          type="text"
                          value="300 Level"
                        />
                      </div>
                    </div>
                    <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex justify-end">
                      <button className="bg-[#1e3fae] hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition shadow-sm">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </section>
                <section
                  className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
                  id="notifications"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                      Notification Preferences
                    </h2>
                    <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                      Choose how you want to be notified about school
                      activities.
                    </p>
                  </div>
                  <div className="p-6 divide-y divide-gray-100 dark:divide-gray-800">
                    <div className="flex items-center justify-between py-4 first:pt-0">
                      <div>
                        <h3 className="text-sm font-medium text-[#121317] dark:text-white">
                          Grade Updates
                        </h3>
                        <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                          Receive notifications when new grades are posted.
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1e3fae]"></div>
                          </div>
                          <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                            Email
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1e3fae]"></div>
                          </div>
                          <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                            Push
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4">
                      <div>
                        <h3 className="text-sm font-medium text-[#121317] dark:text-white">
                          Attendance Alerts
                        </h3>
                        <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                          Get notified if your attendance falls below 75%.
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1e3fae]"></div>
                          </div>
                          <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                            Email
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between py-4 last:pb-0">
                      <div>
                        <h3 className="text-sm font-medium text-[#121317] dark:text-white">
                          General Announcements
                        </h3>
                        <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1">
                          News, events, and circulars from the university.
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1e3fae]"></div>
                          </div>
                          <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                            Email
                          </span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <div className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked
                            />
                            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-[#1e3fae]"></div>
                          </div>
                          <span className="text-xs font-medium text-[#656d86] dark:text-gray-400">
                            Push
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
                  id="security"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                      Security Settings
                    </h2>
                    <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                      Manage your password and account security.
                    </p>
                  </div>
                  <div className="p-6 space-y-8">
                    <div>
                      <h3 className="text-sm font-semibold text-[#121317] dark:text-white mb-4">
                        Change Password
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-[#121317] dark:text-white focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition"
                          placeholder="Current Password"
                          type="password"
                        />
                        <input
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-[#121317] dark:text-white focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition"
                          placeholder="New Password"
                          type="password"
                        />
                        <input
                          className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-sm text-[#121317] dark:text-white focus:ring-1 focus:ring-[#1e3fae] focus:border-[#1e3fae] outline-none transition"
                          placeholder="Confirm Password"
                          type="password"
                        />
                      </div>
                      <button className="mt-4 px-4 py-2 bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-[#121317] dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                        Update Password
                      </button>
                    </div>
                    <div className="flex items-start justify-between border-t border-gray-100 dark:border-gray-800 pt-6">
                      <div>
                        <h3 className="text-sm font-semibold text-[#121317] dark:text-white">
                          Two-Factor Authentication
                        </h3>
                        <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1 max-w-md">
                          Add an extra layer of security to your account by
                          requiring a code from your email when logging in.
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer mt-1">
                        <input type="checkbox" className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#1e3fae]"></div>
                      </label>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-6">
                      <h3 className="text-sm font-semibold text-[#121317] dark:text-white mb-4">
                        Active Sessions
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <MdLaptopMac className="text-gray-400 text-2xl" />
                            <div>
                              <p className="text-sm font-medium text-[#121317] dark:text-white">
                                Windows PC - Chrome
                              </p>
                              <p className="text-xs text-[#656d86] dark:text-gray-400">
                                Lagos, Nigeria • Current Session
                              </p>
                            </div>
                          </div>
                          <span className="text-xs font-semibold text-[#07883d] bg-[#07883d]/10 px-2 py-1 rounded">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <MdSmartphone className="text-gray-400 text-2xl" />
                            <div>
                              <p className="text-sm font-medium text-[#121317] dark:text-white">
                                iPhone 13 - Safari
                              </p>
                              <p className="text-xs text-[#656d86] dark:text-gray-400">
                                Lagos, Nigeria • 2 days ago
                              </p>
                            </div>
                          </div>
                          <button className="text-xs font-medium text-[#dc2626] hover:underline">
                            Revoke
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="bg-white dark:bg-[#1e2230] rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden"
                  id="appearance"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-[#121317] dark:text-white">
                      Appearance
                    </h2>
                    <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                      Customize the interface theme.
                    </p>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-4">
                      <button className="group flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-[#1e3fae] bg-blue-50/50 dark:bg-blue-900/10">
                        <div className="h-16 w-full rounded-lg bg-white border border-gray-200 shadow-sm flex items-center justify-center">
                          <MdLightMode className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-[#1e3fae]">
                          Light Mode
                        </span>
                      </button>
                      <button className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition">
                        <div className="h-16 w-full rounded-lg bg-gray-900 border border-gray-800 shadow-sm flex items-center justify-center">
                          <MdDarkMode className="text-gray-400" />
                        </div>
                        <span className="text-sm font-medium text-[#656d86] dark:text-gray-400 group-hover:text-[#121317] dark:group-hover:text-white">
                          Dark Mode
                        </span>
                      </button>
                      <button className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition">
                        <div className="h-16 w-full rounded-lg bg-linear-to-r from-white to-gray-900 border border-gray-300 dark:border-gray-600 shadow-sm flex items-center justify-center">
                          <MdBrightnessMedium className="text-gray-500 mix-blend-difference" />
                        </div>
                        <span className="text-sm font-medium text-[#656d86] dark:text-gray-400 group-hover:text-[#121317] dark:group-hover:text-white">
                          System
                        </span>
                      </button>
                    </div>
                  </div>
                </section>
                <section
                  className="bg-white dark:bg-[#1e2230] rounded-xl border border-[#dc2626]/20 shadow-sm overflow-hidden"
                  id="account"
                >
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-red-50 dark:bg-red-900/10">
                    <h2 className="text-lg font-bold text-[#dc2626]">
                      Danger Zone
                    </h2>
                    <p className="text-sm text-[#656d86] dark:text-gray-400 mt-1">
                      Irreversible actions for your account.
                    </p>
                  </div>
                  <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-[#121317] dark:text-white">
                        Deactivate Account
                      </h3>
                      <p className="text-xs text-[#656d86] dark:text-gray-400 mt-1 max-w-sm">
                        Temporarily disable your account. You will not receive
                        notifications or be able to access course materials.
                      </p>
                    </div>
                    <button className="px-4 py-2 bg-white dark:bg-transparent border border-[#dc2626] text-[#dc2626] rounded-lg text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition">
                      Deactivate Account
                    </button>
                  </div>
                </section>
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
