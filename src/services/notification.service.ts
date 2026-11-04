import { api } from "./api";
export const notificationService = { async list(){const {data}=await api.get("/buyer/notifications");return data;}, async markRead(id:string){const {data}=await api.post(`/buyer/notifications/${id}/read`);return data;}, async markAllRead(){const {data}=await api.post("/buyer/notifications/read-all");return data;} };
