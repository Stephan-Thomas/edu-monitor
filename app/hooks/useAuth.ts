import { useEffect, useState } from "react";
import api from "../api/axios";

// Define your user type
export interface User {
  id: string;
  email: string;
  fullName: string;
  department?: string;
  matricNumber?: string;
  role?: string;
  // add more fields if needed
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    api
      .get<{ user: User }>("/auth/me")
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        // interceptor handles redirect
      });
  }, []);

  return { user, loading };
};
