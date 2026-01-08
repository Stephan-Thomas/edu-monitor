import axios, { AxiosInstance } from "axios";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://edumonitor-backend.onrender.com/api";

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // use cookies for real security
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor - attach token if available
api.interceptors.request.use(
  (config) => {
    try {
      const token =
        (typeof window !== "undefined" &&
          localStorage.getItem("accessToken")) ||
        (typeof window !== "undefined" && localStorage.getItem("token")) ||
        null;
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // ignore (server-side render or storage not available)
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Global 401 interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // token invalid / expired - send user to login
      try {
        if (typeof window !== "undefined") window.location.href = "/login";
      } catch (e) {}
    }
    return Promise.reject(error);
  }
);

export default api;
