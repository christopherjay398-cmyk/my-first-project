import { api } from "./api";
import { orders } from "@/lib/data";
export const orderService = {
 async list(){ if(process.env.NEXT_PUBLIC_USE_DEMO_DATA==="true") return orders; const {data}=await api.get("/buyer/orders"); return data; },
 async get(id:string){ if(process.env.NEXT_PUBLIC_USE_DEMO_DATA==="true") return orders.find(o=>o.id===id); const {data}=await api.get(`/buyer/orders/${id}`); return data; },
 async create(payload:Record<string,unknown>){ const {data}=await api.post("/buyer/orders",payload); return data; },
 async cancel(id:string){ const {data}=await api.post(`/buyer/orders/${id}/cancel`); return data; }
};
