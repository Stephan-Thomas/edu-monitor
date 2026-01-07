import api from "./axios";

export interface LoginRequest {
  [key: string]: unknown;
}

export interface LoginResponse {
  token?: string;
  [key: string]: unknown;
}

export const login = (data: LoginRequest): Promise<LoginResponse> =>
  api.post<LoginResponse>("/login", data).then((res) => res.data);
export const logout = () => api.post("/logout");
export const getMe = () => api.get("/me");
