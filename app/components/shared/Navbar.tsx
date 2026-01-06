import React from "react";
import { MdMenu, MdNotifications } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between border-b border-[#f0f1f4] dark:border-gray-800 bg-white dark:bg-[#1a202c] px-6 py-4 lg:py-3 sticky top-0 z-20">
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button className="p-2 -ml-2 text-gray-600 dark:text-gray-300">
          <MdMenu />
        </button>
      </div>
      {/* Title (Mobile only) or Breadcrumbs */}
      <div className="flex flex-col lg:hidden">
        <span className="text-sm font-bold text-[#111318] dark:text-white">
          My Courses
        </span>
      </div>
      {/* Spacer for desktop */}
      <div className="hidden lg:block"></div>
      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center justify-center size-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors relative">
          <MdNotifications />
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-white dark:border-[#1a202c]"></span>
        </button>
        <div className="h-8 w-px bg-gray-200 dark:bg-gray-700"></div>
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-[#111318] dark:text-white">
              Chinedu Okafor
            </p>
            <p className="text-xs text-[#616b89] dark:text-gray-400">
              Matric: 2019/12345
            </p>
          </div>
          <div
            className="size-10 rounded-full bg-gray-200 bg-cover bg-center border-2 border-white dark:border-gray-700 shadow-sm"
            data-alt="Portrait of a male student smiling"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIaS0aQXTkZrpV0gtjY2n1MYig7vjxN5AkgQ_-z051GuHLSUedWk0ZDuCFn48izmJ5ezJk2DyVIQNUh-Q4mOjmbGOA2kNPXXfq4qHkXa9KoKf8zRbQB9A1rBXZ1w8GRV84w3gIZviG0ZoVV0nfIGHuKLd5hFsU9p06DIPiCwr5T0RGxJBPM9bjkg1Nt16zyvDUl_2upqTM1aWjqgsaLVXtN_aFfnai0yBHWQIzXJHEesNFrHNWyxMIBAws3qmCqBu5fn7Kq0GSk6Xi')",
            }}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
