import { api } from "./api";
import { conversations } from "@/lib/data";
export const messageService = {
 async list(){ if(process.env.NEXT_PUBLIC_USE_DEMO_DATA==="true") return conversations; const {data}=await api.get("/buyer/conversations"); return data; },
 async send(conversationId:string,message:string){ const {data}=await api.post(`/buyer/conversations/${conversationId}/messages`,{message}); return data; }
};
