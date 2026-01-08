"use client";
import Head from "next/head";
import {
  MdSchool,
  MdMail,
  MdLock,
  MdVisibility,
  MdArrowForward,
} from "react-icons/md";
import { useState } from "react";
import { useRouter } from "next/navigation";
import api from "./api/axios";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();

  // 1️⃣ Store input values in state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // 2️⃣ Build payload from state
  const handleLogin = async () => {
    setAuthError(null);

    if (!email || !password) {
      setAuthError("Email and password are required");
      return;
    }

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });
      setSuccessMessage(
        res.data.message || "Logged in successfully. Redirecting..."
      );
      // Store tokens under both keys for backward compatibility
      const tokenValue = res.data.accessToken || res.data.token || "";
      if (tokenValue) {
        localStorage.setItem("accessToken", tokenValue);
        localStorage.setItem("token", tokenValue);
      }
      const userRole = res.data?.user?.role ?? res.data?.role;
      setTimeout(() => {
        if (userRole === "student") {
          router.push("/students");
        } else if (userRole === "lecturer") {
          router.push("/lecturer");
        } else {
          router.push("/");
        }
      }, 2000);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setAuthError(err.response.data?.message || "Login failed");
        } else {
          setAuthError("Cannot reach server");
        }
      } else {
        setAuthError("Unexpected error");
      }
    }
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EduMonitor Login</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
        <style>{`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}</style>
      </Head>
      <div className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex flex-col transition-colors duration-300">
        <div className="flex flex-1 w-full h-full min-h-screen overflow-hidden">
          {/* Left Panel: Image & Branding (Hidden on mobile, visible on lg screens) */}
          <div className="hidden lg:flex w-1/2 bg-[#1e3fae] relative overflow-hidden flex-col justify-between p-12 text-white">
            {/* Background Image with Overlay */}
            <div
              className="absolute inset-0 z-0 bg-cover bg-center"
              data-alt="Modern university library with students studying"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBY4SDD3EoMIVAIHmPJ63eOGecH8dlCTcW2guT9Imjui9K05yJXfGpkmVTZoGDWhxgG_Wk45EKsZ9IhJqECxVrYIA0nAcEZY6L2EiX2y9F3zQgOKh4c_aDnkWNXEQASbJyto-CO1BwfvWtN2IJHyB9Oz03n3cQun-hTmpjb0aRibcc2YRKkg5lnUNO4SIeE4M8pzX4TxbHWtpZIwwFUMbTUcHrxY7YkblhZyiSmuvtWddSBLFVAoZ96E6O9CSOe6qAkIsoIjqUTeeZ7')",
              }}
            ></div>
            <div className="absolute inset-0 z-10 bg-[#1e3fae]/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/60 to-transparent"></div>
            {/* Content on top of image */}
            <div className="relative z-20 flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#1e3fae]">
                <MdSchool className="text-3xl" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                EduMonitor
              </span>
            </div>
            <div className="relative z-20 max-w-lg">
              <h1 className="text-4xl font-black leading-tight mb-6">
                Empowering Academic Excellence Through Data.
              </h1>
              <p className="text-blue-100 text-lg leading-relaxed mb-8">
                Access real-time performance analytics, track attendance, and
                stay updated with your academic journey in one secure platform.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    alt="Student avatar 1"
                    className="w-10 h-10 rounded-full border-2 border-[#1e3fae]"
                    data-alt="Student avatar portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAISQMTOGlc-fzk5m8k48gJuYulLznbNyndN1d2ovZpWadsVgp3g5j0B1gEc4kUw29H2VYTn_eqdbNTs6kMRuK8JBVYvFNXVGQxKHRw0zi_fnnfsardiwVaRr3BEFwILBd6qc93zwGih7tWjMeuVnR2B0YyuYpA55JfudS-bXcjrqbo3Q1I_stOfFd4nmR6Qhdgj3miNGEE7ki45cVln-qUPqOaF5AvHRkIzMAgTwUOUzvJ6B1i5Qn4ut6pv54_WekLapJVgYIkFxv7"
                  />
                  <img
                    alt="Student avatar 2"
                    className="w-10 h-10 rounded-full border-2 border-[#1e3fae]"
                    data-alt="Student avatar portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5gKb9jwUzrxcUN6NMr9JJBxuNpJ4Sokqk5Nn0iEDcTNZKPOnSkvLullkTKnkw1fS6TJbSXF1j5rVPDAlfoUTESZzFIWJkbAFQoNnyjPx1-9YBPkuJL7AaI6eK8AaZUz9ELAjoM-Zt9N0Hk4ETfU2csyJh-RE-wJL6cpbsjZLvDh5jEUcVK5PsXbA4ZiL3ef9XZ3IP2VsA9UU9-GKjiSxTavDGcURYecoRUO26SAF2exbOMxXbFkA-slWRqDkBAV7Soew44pft3dWI"
                  />
                  <img
                    alt="Student avatar 3"
                    className="w-10 h-10 rounded-full border-2 border-[#1e3fae]"
                    data-alt="Student avatar portrait"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuABhbFmXmNkugu5u8hCoUvp_Twc_RKzdvw2NMICpQ5TxD2tDWtDVsyujh5bA6Id3-7hTp-wnxqdVQ1O40-UnQN69FF1bQRoqre2ryzSgeDm-U08q4blhJDCJT7mxyfkZxG70ozh7EXQL1tfpcKwRqSPcGXz_kWGXbhBWA7OjJacqATmPmU80GQfV9iJgP6E88esRtXH8FKVcDzuh30zySVurSRyMwzt5lG7S7e8mqt8ur3Nq9su5Xv9v3jresT4LuKz8eE4FOSi-SSn"
                  />
                </div>
                <p className="text-sm font-medium text-blue-100">
                  Used by 10,000+ Students
                </p>
              </div>
            </div>
            <div className="relative z-20 text-xs text-blue-200/60">
              © 2023 Nigerian Tertiary Institution. All rights reserved.
            </div>
          </div>
          {/* Right Panel: Login Form */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 lg:p-24 bg-white dark:bg-[#121520] overflow-y-auto">
            {/* Mobile Logo (Visible only on smaller screens) */}
            <div className="lg:hidden w-full flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-[#1e3fae] rounded flex items-center justify-center text-white">
                <MdSchool className="text-xl" />
              </div>
              <span className="text-lg font-bold text-gray-900 dark:text-white">
                EduMonitor
              </span>
            </div>
            <div className="w-full max-w-md flex flex-col gap-6">
              {/* Header */}
              <div className="flex flex-col gap-2">
                <h2 className="text-[#121317] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                  Welcome back
                </h2>
                <p className="text-[#656d86] dark:text-gray-400 text-base font-normal leading-normal">
                  Please enter your details to sign in.
                </p>
              </div>
              {/* Form */}
              <form
                className="flex flex-col gap-5 mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {/* Email Field */}
                <label className="flex flex-col gap-2">
                  <span className="text-[#121317] dark:text-gray-200 text-sm font-medium leading-normal">
                    Email Address or Student ID
                  </span>
                  <div className="relative">
                    <MdMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-[20px]" />
                    <input
                      className="form-input flex w-full rounded-lg text-[#121317] dark:text-white dark:bg-[#1f2937] border border-[#dcdee5] dark:border-gray-700 focus:border-[#1e3fae] focus:ring-1 focus:ring-[#1e3fae] h-12 pl-11 pr-4 placeholder:text-[#656d86] dark:placeholder:text-gray-500 text-base font-normal transition-all"
                      placeholder="student@university.edu.ng"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </label>
                {/* Password Field */}
                <label className="flex flex-col gap-2">
                  <span className="text-[#121317] dark:text-gray-200 text-sm font-medium leading-normal">
                    Password
                  </span>
                  <div className="relative">
                    <MdLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-[20px]" />
                    <input
                      className="form-input flex w-full rounded-lg text-[#121317] dark:text-white dark:bg-[#1f2937] border border-[#dcdee5] dark:border-gray-700 focus:border-[#1e3fae] focus:ring-1 focus:ring-[#1e3fae] h-12 pl-11 pr-12 placeholder:text-[#656d86] dark:placeholder:text-gray-500 text-base font-normal transition-all"
                      placeholder="Enter your password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
                      type="button"
                    >
                      <MdVisibility className="text-[20px]" />
                    </button>
                  </div>
                </label>
                {authError && <p className="text-red-500">{authError}</p>}
                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}
                {/* Utility Links */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      className="rounded border-gray-300 text-[#1e3fae] focus:ring-[#1e3fae] h-4 w-4 bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
                      type="checkbox"
                    />
                    <span className="text-sm text-[#656d86] dark:text-gray-400 font-medium">
                      Remember for 30 days
                    </span>
                  </label>
                  <a
                    className="text-[#1e3fae] hover:text-[#162f8a] dark:text-blue-400 dark:hover:text-blue-300 text-sm font-semibold hover:underline"
                    href="#"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* Submit Button */}
                <button
                  className="mt-2 w-full bg-[#1e3fae] hover:bg-[#162f8a] text-white h-12 rounded-lg font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                  type="submit"
                  onClick={handleLogin}
                >
                  Secure Login
                  <MdArrowForward className="text-[18px]" />
                </button>
              </form>
              {/* Footer / Help */}
              <div className="mt-4 flex flex-col items-center gap-4 text-center">
                <p className="text-[#656d86] dark:text-gray-400 text-sm">
                  Don't have an account?
                  <a
                    className="text-[#1e3fae] dark:text-blue-400 font-semibold hover:underline"
                    href="/auth/signup"
                  >
                    Signup
                  </a>
                </p>
                <div className="w-full border-t border-gray-100 dark:border-gray-800 mt-2 pt-6">
                  <div className="flex justify-center gap-6 text-xs text-gray-400 dark:text-gray-500">
                    <a
                      className="hover:text-gray-600 dark:hover:text-gray-300"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                    <a
                      className="hover:text-gray-600 dark:hover:text-gray-300"
                      href="#"
                    >
                      Terms of Service
                    </a>
                    <a
                      className="hover:text-gray-600 dark:hover:text-gray-300"
                      href="#"
                    >
                      Help Center
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
