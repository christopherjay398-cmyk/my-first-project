import axios from "axios";
import { API_BASE_URL } from "@/lib/config";
export const api = axios.create({baseURL:API_BASE_URL,timeout:15000,headers:{"Content-Type":"application/json"}});
api.interceptors.request.use((config)=>{ if(typeof window!=="undefined"){const token=localStorage.getItem("zedrent_token"); if(token) config.headers.Authorization=`Bearer ${token}`;} return config;});
api.interceptors.response.use(r=>r,(error)=>Promise.reject(error));
