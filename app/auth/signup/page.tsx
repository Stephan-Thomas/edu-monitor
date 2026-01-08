"use client";
import Head from "next/head";
import {
  MdSchool,
  MdMail,
  MdLock,
  MdVisibility,
  MdVisibilityOff,
  MdArrowForward,
  MdPerson,
  MdPhone,
  MdCalendarToday,
  MdAttachFile,
  MdBadge,
} from "react-icons/md";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import api from "../../api/axios";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();

  // Store input values in state
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [matricNumber, setMatricNumber] = useState("");
  const [lecturerRegistrationNumber, setLecturerRegistrationNumber] =
    useState("");
  const [department, setDepartment] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [proof, setProof] = useState<File | null>(null);
  const [authError, setAuthError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const baseGroups = [
    ["role", "firstName", "lastName"],
    [
      "middleName",
      role === "student" ? "matricNumber" : "lecturerRegistrationNumber",
      "department",
    ],
    ["phoneNumber", "dateOfBirth", "gender"],
    ["email", "password", "confirmPassword"],
  ];

  const totalSteps =
    role === "lecturer" ? baseGroups.length + 1 : baseGroups.length;

  useEffect(() => {
    if (currentStep >= totalSteps) {
      setCurrentStep(totalSteps - 1);
    }
  }, [role, currentStep, totalSteps]);

  const icons: { [key: string]: any } = {
    role: MdPerson,
    firstName: MdPerson,
    lastName: MdPerson,
    middleName: MdPerson,
    matricNumber: MdBadge,
    lecturerRegistrationNumber: MdBadge,
    department: MdSchool,
    phoneNumber: MdPhone,
    dateOfBirth: MdCalendarToday,
    gender: MdPerson,
    email: MdMail,
    password: MdLock,
    confirmPassword: MdLock,
    proof: MdAttachFile,
  };

  const placeholders: { [key: string]: string } = {
    firstName: "your first name",
    lastName: "your last name",
    middleName: "your middle name (optional)",
    matricNumber: "your matric number",
    lecturerRegistrationNumber: "your lecturer registration number",
    department: "your department",
    phoneNumber: "your phone number",
    dateOfBirth: "YYYY-MM-DD",
    gender: "Male or Female",
    email: "your.email@university.edu.ng",
    password: "Enter your password",
    confirmPassword: "Confirm your password",
  };

  const labels: { [key: string]: string } = {
    role: "Account Type",
    firstName: "Firstname",
    lastName: "Lastname",
    middleName: "Middle Name",
    matricNumber: "Matric Number",
    lecturerRegistrationNumber: "Lecturer Registration Number",
    department: "Department",
    phoneNumber: "Phone Number",
    dateOfBirth: "Date of Birth",
    gender: "Gender",
    email: "Email Address",
    password: "Password",
    confirmPassword: "Confirm Password",
    proof: "Proof of Faculty Status (e.g., ID or document upload)",
  };

  const types: { [key: string]: string } = {
    dateOfBirth: "date",
    email: "email",
    password: "password",
    confirmPassword: "password",
    proof: "file",
    phoneNumber: "tel",
    default: "text",
  };

  const getValue = (field: string): string | File | null => {
    switch (field) {
      case "role":
        return role;
      case "firstName":
        return firstName;
      case "lastName":
        return lastName;
      case "middleName":
        return middleName;
      case "matricNumber":
        return matricNumber;
      case "lecturerRegistrationNumber":
        return lecturerRegistrationNumber;
      case "department":
        return department;
      case "phoneNumber":
        return phoneNumber;
      case "dateOfBirth":
        return dateOfBirth;
      case "gender":
        return gender;
      case "email":
        return email;
      case "password":
        return password;
      case "confirmPassword":
        return confirmPassword;
      case "proof":
        return proof;
      default:
        return "";
    }
  };

  const setValue = (field: string, value: string | File | null) => {
    switch (field) {
      case "role":
        setRole(value as string);
        break;
      case "firstName":
        setFirstname(value as string);
        break;
      case "lastName":
        setLastname(value as string);
        break;
      case "middleName":
        setMiddleName(value as string);
        break;
      case "matricNumber":
        setMatricNumber(value as string);
        break;
      case "lecturerRegistrationNumber":
        setLecturerRegistrationNumber(value as string);
        break;
      case "department":
        setDepartment(value as string);
        break;
      case "phoneNumber":
        setPhoneNumber(value as string);
        break;
      case "dateOfBirth":
        setDateOfBirth(value as string);
        break;
      case "gender":
        setGender(value as string);
        break;
      case "email":
        setEmail(value as string);
        break;
      case "password":
        setPassword(value as string);
        break;
      case "confirmPassword":
        setConfirmPassword(value as string);
        break;
      case "proof":
        setProof(value as File | null);
        break;
    }
  };

  const renderField = (field: string) => {
    const Icon = icons[field];
    const labelText = labels[field];
    const placeholder = placeholders[field] || "";
    let inputType = types[field] || types.default;
    const isPasswordField = field === "password" || field === "confirmPassword";
    const show = field === "password" ? showPassword : showConfirmPassword;
    const setShow =
      field === "password" ? setShowPassword : setShowConfirmPassword;

    if (isPasswordField) {
      inputType = show ? "text" : "password";
    }

    if (field === "role") {
      return (
        <label key={field} className="flex flex-col gap-2">
          <span className="text-[#121317] dark:text-gray-200 text-sm font-medium leading-normal">
            {labelText}
          </span>
          <div className="relative">
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-[20px]" />
            <select
              className="form-select flex w-full rounded-lg text-[#121317] dark:text-white dark:bg-[#1f2937] border border-[#dcdee5] dark:border-gray-700 focus:border-[#1e3fae] focus:ring-1 focus:ring-[#1e3fae] h-12 pl-11 pr-4 text-base font-normal transition-all appearance-none"
              value={getValue(field) as string}
              onChange={(e) => setValue(field, e.target.value)}
            >
              <option value="student">Student</option>
              <option value="lecturer">Lecturer</option>
            </select>
          </div>
        </label>
      );
    }

    if (field === "proof") {
      return (
        <label key={field} className="flex flex-col gap-2">
          <span className="text-[#121317] dark:text-gray-200 text-sm font-medium leading-normal">
            {labelText}
          </span>
          <div className="relative">
            <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-[20px]" />
            <input
              className="form-input flex w-full rounded-lg text-[#121317] dark:text-white dark:bg-[#1f2937] border border-[#dcdee5] dark:border-gray-700 focus:border-[#1e3fae] focus:ring-1 focus:ring-[#1e3fae] h-12 pl-11 px-4 text-base font-normal transition-all file:bg-[#1e3fae] file:text-white file:border-0 file:px-4 file:py-2 file:rounded file:mr-4 file:font-medium file:hover:bg-[#162f8a]"
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={(e) =>
                setValue(field, e.target.files ? e.target.files[0] : null)
              }
            />
          </div>
        </label>
      );
    }

    return (
      <label key={field} className="flex flex-col gap-2">
        <span className="text-[#121317] dark:text-gray-200 text-sm font-medium leading-normal">
          {labelText}
        </span>
        <div className="relative">
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 text-[20px]" />
          <input
            className="form-input flex w-full rounded-lg text-[#121317] dark:text-white dark:bg-[#1f2937] border border-[#dcdee5] dark:border-gray-700 focus:border-[#1e3fae] focus:ring-1 focus:ring-[#1e3fae] h-12 pl-11 pr-4 placeholder:text-[#656d86] dark:placeholder:text-gray-500 text-base font-normal transition-all"
            placeholder={placeholder}
            type={inputType}
            value={getValue(field) as string}
            onChange={(e) => setValue(field, e.target.value)}
          />
          {isPasswordField && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 focus:outline-none"
              type="button"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <MdVisibilityOff className="text-[20px]" />
              ) : (
                <MdVisibility className="text-[20px]" />
              )}
            </button>
          )}
        </div>
      </label>
    );
  };

  const getCurrentFields = () => {
    if (currentStep < baseGroups.length) {
      return baseGroups[currentStep];
    } else {
      return ["proof"];
    }
  };

  const validateCurrentStep = () => {
    const currentFields = getCurrentFields();
    for (let field of currentFields) {
      if (field === "middleName") continue; // optional
      const val = getValue(field);
      if (field === "proof") {
        if (!val) return false;
      } else if (typeof val === "string" && val.trim() === "") {
        return false;
      }
    }
    if (currentStep === baseGroups.length - 1 && password !== confirmPassword) {
      return false;
    }
    return true;
  };

  const handleNext = () => {
    setAuthError(null);
    if (!validateCurrentStep()) {
      setAuthError(
        currentStep === baseGroups.length - 1 && password !== confirmPassword
          ? "Passwords do not match"
          : "All required fields must be filled"
      );
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  // Build payload from state
  const handleSignup = async () => {
    setAuthError(null);
    setSuccessMessage(null);

    if (!validateCurrentStep()) {
      setAuthError("All required fields must be filled");
      return;
    }

    if (password !== confirmPassword) {
      setAuthError("Passwords do not match");
      return;
    }

    if (role === "lecturer" && !proof) {
      setAuthError("Proof of faculty status is required for lecturers");
      return;
    }

    // Full validation
    const registrationId =
      role === "student" ? matricNumber : lecturerRegistrationNumber;
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      registrationId.trim() === "" ||
      department.trim() === "" ||
      phoneNumber.trim() === "" ||
      dateOfBirth.trim() === "" ||
      gender.trim() === "" ||
      email.trim() === "" ||
      password.trim() === ""
    ) {
      setAuthError("All required fields must be filled");
      return;
    }

    try {
      // Many backends expect JSON (application/json). If the server is
      // not parsing multipart/form-data, the fields will be missing and
      // you'll get validation errors for required fields. Send JSON here
      // and handle file uploads separately if needed.

      // Ensure password meets minimum length to avoid server validation errors
      if (password.length < 6) {
        setAuthError("Password must be at least 6 characters");
        return;
      }

      const userId =
        role === "student" ? matricNumber : lecturerRegistrationNumber;

      const payload: any = {
        role,
        firstName,
        lastName,
        middleName,
        department,
        phoneNumber,
        dateOfBirth,
        gender,
        email,
        password,
        userId,
      };

      if (role === "student") payload.matricNumber = matricNumber;
      else payload.lecturerRegistrationNumber = lecturerRegistrationNumber;

      // Debug: Log JSON payload
      console.log("JSON payload being sent:", payload);

      const res = await api.post("/auth/register", payload);

      if (res.data.token || res.data.accessToken) {
        const tokenValue = res.data.accessToken || res.data.token;
        if (tokenValue) {
          localStorage.setItem("accessToken", tokenValue);
          localStorage.setItem("token", tokenValue);
        }
        // Prefer the role returned by the server (if present), fallback to
        // the role chosen in the form. Route students to /students and
        // lecturers to /lecturer. Any other role goes to /dashboard.
        const userRole = res.data.user?.role || role;
        if (userRole === "student") {
          router.push("/students");
        } else if (userRole === "lecturer") {
          router.push("/lecturer");
        } else {
          router.push("/dashboard");
        }
      } else {
        // If the server didn't return a token (e.g. account pending approval),
        // we previously redirected to /login. Instead, redirect to the
        // appropriate role-specific page (using server role if provided),
        // so users land where they expect.
        setSuccessMessage(
          res.data.message || "Account created successfully. Redirecting..."
        );
        const userRole = res.data.user?.role || role;
        setTimeout(() => {
          if (userRole === "student") {
            router.push("/students");
          } else if (userRole === "lecturer") {
            router.push("/lecturer");
          } else {
            router.push("/");
          }
        }, 2000);
      }
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        if (err.response) {
          setAuthError(
            err.response.data?.message || "An error occurred during signup"
          );
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
        <title>EduMonitor Signup</title>
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
          {/* Right Panel: Signup Form */}
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
                  Join EduMonitor
                </h2>
                <p className="text-[#656d86] dark:text-gray-400 text-base font-normal leading-normal">
                  Create your account by entering your details.
                </p>
                <p className="text-[#656d86] dark:text-gray-400 text-sm">
                  Step {currentStep + 1} of {totalSteps}
                </p>
              </div>
              {/* Form */}
              <form
                className="flex flex-col gap-5 mt-4"
                onSubmit={(e) => e.preventDefault()}
              >
                {currentStep < baseGroups.length
                  ? baseGroups[currentStep].map((field) => renderField(field))
                  : role === "lecturer" && renderField("proof")}
                {authError && <p className="text-red-500">{authError}</p>}
                {successMessage && (
                  <p className="text-green-500">{successMessage}</p>
                )}
                {/* Buttons */}
                <div className="flex gap-4 mt-2">
                  {currentStep > 0 && (
                    <button
                      className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 h-12 rounded-lg font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                      type="button"
                      onClick={() => {
                        setAuthError(null);
                        setCurrentStep((prev) => prev - 1);
                      }}
                    >
                      Back
                    </button>
                  )}
                  <button
                    className="w-full bg-[#1e3fae] hover:bg-[#162f8a] text-white h-12 rounded-lg font-bold text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2"
                    type="button"
                    onClick={
                      currentStep < totalSteps - 1 ? handleNext : handleSignup
                    }
                  >
                    {currentStep < totalSteps - 1 ? "Next" : "Create Account"}
                    <MdArrowForward className="text-[18px]" />
                  </button>
                </div>
              </form>
              {/* Footer / Help */}
              <div className="mt-4 flex flex-col items-center gap-4 text-center">
                <p className="text-[#656d86] dark:text-gray-400 text-sm">
                  Already have an account?
                  <a
                    className="text-[#1e3fae] dark:text-blue-400 font-semibold hover:underline"
                    href="/"
                  >
                    Sign in
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
