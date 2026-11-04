import { api } from "./api";
import type { User } from "@/types";
export const authService = {
 async login(email:string,password:string){ const {data}=await api.post<{user:User;token:string}>("/auth/login",{email,password}); return data; },
 async register(payload:Record<string,string>){ const {data}=await api.post("/auth/register",payload); return data; },
 async forgotPassword(email:string){ const {data}=await api.post("/auth/forgot-password",{email}); return data; },
 async resetPassword(token:string,password:string){ const {data}=await api.post("/auth/reset-password",{token,password}); return data; },
 async me(){ const {data}=await api.get<User>("/auth/me"); return data; },
 async logout(){ await api.post("/auth/logout"); }
};
