import { create } from "zustand";
import type { User } from "@/types";
type AuthState={user:User|null;token:string|null;setSession:(user:User,token:string)=>void;logout:()=>void};
export const useAuthStore=create<AuthState>((set)=>({user:null,token:null,setSession:(user,token)=>{if(typeof window!=="undefined"){localStorage.setItem("zedrent_token",token);localStorage.setItem("zedrent_user",JSON.stringify(user));}set({user,token});},logout:()=>{if(typeof window!=="undefined"){localStorage.removeItem("zedrent_token");localStorage.removeItem("zedrent_user");}set({user:null,token:null});}}));
