import { api } from "./api";
import { properties } from "@/lib/data";
import type { Property } from "@/types";
export const propertyService = {
 async list(params?:Record<string,string|number>){ if(process.env.NEXT_PUBLIC_USE_DEMO_DATA==="true") return properties; const {data}=await api.get<Property[]>("/properties",{params}); return data; },
 async getById(id:string){ if(process.env.NEXT_PUBLIC_USE_DEMO_DATA==="true") return properties.find(p=>p.id===id); const {data}=await api.get<Property>(`/properties/${id}`); return data; },
 async search(q:string){ return properties.filter(p=>`${p.title} ${p.location} ${p.type}`.toLowerCase().includes(q.toLowerCase())); }
};
